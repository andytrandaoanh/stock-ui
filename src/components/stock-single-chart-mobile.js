import React, { Fragment,  useState, useEffect } from 'react';
import axios from 'axios';
import { TRANSACTIONS_TICKER_URL, safeHeaders } from './api-config.js';
import styled from 'styled-components';
import CandleStickChart from '../charts/candlestick-chart-v1.3';
import CombinedChart from '../charts/combined-chart-mobile-v1';
import BarChart from '../charts/bar-chart-v3.1';
import * as d3 from 'd3';

const chartTypeCombined = "combined";
const chartTypePrice = "price";


const Styles = styled.div`

.chart-title {
  font-size: 12px;
  float: right;
  font-weight: bold;
  color: #1769aa;
  margin-top: 5px;
  margin-right: 5px;
  .span {padding-top: 2px;}
}

.chart-button {
  font-size: 8px;
  margin: 2px;
  border-radius: 3px;
}
.chart-button:hover{
  color: "white";
  background: "#1769aa";
}

.link-button {
  padding: 0px 2px;
  text-decoration: none;
}

`

function ChartContainer(props) {
  const [data, setData] = useState([]);
    const parseDate = d3.utcParse("%Y-%m-%d");

    const d3Data = [];
    useEffect(() => {
    
      props.data.forEach(d =>{
        d3Data.push({
          date : parseDate(d.date), 
          open: +d.open * 1000,            
          close : +d.close * 1000,
          high: +d.high * 1000,
          low: +d.low * 1000,
          volume: +d.volume
        });

      setData(d3Data);

      });
 
        
    }, [props.data]);


    return (
        <div>
          {
            props.type === chartTypeCombined ?
            <CombinedChart width={480} height={420} data={data} />
            
          :(
            props.type === chartTypePrice ?
            <CandleStickChart width={800} height={260} data={data} />
            :
              <BarChart width={800} height={260} data={data} />
          )}
            
        </div>
    );
};

export default function TransactionTicker(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [backDate, setBackDate] = useState(60);

    
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {

        
        let today = new Date();
        today.setDate(today.getDate() - backDate);
        //let newDay = today.getDate();
        let mindate = `${today.getFullYear()}${(today.getMonth()+1).toString().padStart(2, "0")}${today.getDate().toString().padStart(2, "0")}` 

        //console.log('mindate', mindate);

        const result = await axios.get(
          `${TRANSACTIONS_TICKER_URL}?ticker=${props.ticker}&mindate=${mindate}`, safeHeaders);
     
        //console.log(result.data);
        setData(result.data);

      } catch (error) {
        setIsError(true);
        console.log('error:', error);
      }

      setIsLoading(false);
      //console.log(result.data);
 
    };
 
    fetchData();
  }, [props.ticker, backDate]);  

    return (
      <Fragment>
      {isError && <div>Something went wrong when loading API data ...</div>}
      {isLoading ? ( <div>Loading ...</div>) : (
          <Styles>
          <div className="chart-title">{props.ticker.toUpperCase()} {backDate} <span>DAYS</span>
          <button className="chart-button" onClick={()=>{setBackDate(2 * 30)}}>2M</button>
          <button className="chart-button" onClick={()=>{setBackDate(4 * 30)}}>4M</button>
          <button className="chart-button" onClick={()=>{setBackDate(6 * 30)}}>6M</button>
         
     


          </div>
          
          <ChartContainer  data={data} type={props.type} />
          </Styles>
    
      )}
    </Fragment>
    )
}