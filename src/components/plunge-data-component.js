import React, { Fragment,  useState, useEffect } from 'react';
import axios from 'axios';
import { STOCK_PLUNGE_URL, safeHeaders } from './api-config.js';
import styled from 'styled-components';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    greenNum: {
        color: 'green',
        textAlign: 'right',
    },
    redNum: {
        color: 'red',
        textAlign: 'right',
    },
    yellowNum: {
      color: 'orange',
      textAlign: 'right',
    },   
    leftCell: {
        textAlign: 'left',
    },
    rightCell: {
        textAlign: 'right',
    },

    
  }));

const Styles = styled.div`

table {
    border-collapse: collapse;
    margin: 10px;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    font-size: 0.9em;

}

th, td {
    padding: 12px;

}

caption {
    margin: 10px;
    font-size: 1.1em;
}


`


export default function PlungeDataComponent(props) {
    const classes = useStyles();    
    const [data, setData] = useState([]);
    const [averageLoss, setAverageLoss] = useState([0]);
    const [averageDuration, setAverageDuration] = useState([0]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    

  function convertDate(dateseq) {
    let newString = String(dateseq);
    let yearPart = newString.substring(0,4); 
    let monthPart = newString.substring(4,6); 
    let dayPart = newString.substring(6); 
    return `${dayPart}-${monthPart}-${yearPart}`;
  }
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {


  
        const result = await axios.get(STOCK_PLUNGE_URL, safeHeaders);

        console.log(result.data);
        
        let totalDuration = 0;
        let totalLoss = 0;
        let i = 0;
        for (i ; i < result.data.length ; i ++ ){
          totalDuration += result.data[i].duration;
          totalLoss += result.data[i].loss; 
        }

        setAverageDuration(totalDuration/i);
        setAverageLoss(totalLoss/i);

        //console.log('average loss', totalLoss/i);
        //console.log('average duration', totalDuration/i);        

        setData(result.data);



      } catch (error) {
        setIsError(true);
        console.log('error:', error);
      }

      setIsLoading(false);
      //console.log(result.data);
 
    };
 
    fetchData();
  }, [props.ticker]);  

    return (
      <Fragment>
      {isError && <div>Something went wrong when loading API data ...</div>}
      {isLoading ? ( <div>Loading ...</div>) : (
          <Styles>
              
              <table>
                  <caption>{props.ticker}</caption>
                  <tr>
                      <th className={classes.leftCell}>Date</th>
                      <th>Loss</th>
                      <th>Duration</th>                      
                      
                      
                  </tr>
              
              {data && data.map((item, index)=>{
                
                return(
                <tr key={item.id}>
                      <td>{convertDate(item.dateseq)}</td>
                      <td><span className={classes.redNum}>{item.loss}%</span></td>
                      <td>{item.duration}</td>
                </tr>
                )  
                
              

              })}

            <tfoot>
              <tr>
                <td>Average</td>
                <td><span className={classes.redNum}>{averageLoss}%</span></td>
                <td>{averageDuration}</td>
                
              </tr>
            </tfoot>
              </table>
          </Styles>
    
      )}
    </Fragment>
    )
}