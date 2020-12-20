import React, { useEffect, useState } from 'react';
import CombinedChart from '../charts/combined-chart-v1.1';
import * as d3 from 'd3';

function ChartContainer(props) {
  const [data, setData] = useState([]);
    const parseDate = d3.utcParse("%Y-%m-%d");

    const d3Data = [];
    useEffect(() => {
    
      props.data.forEach(d =>{
        d3Data.push({
          date : parseDate(d.date), 
          open: +d.open * 1000,            
          close : +d.close  * 1000,
          high: +d.high  * 1000,
          low: +d.low  * 1000,
          volume: +d.volume
        });

      setData(d3Data);

      });
 
        
    }, [props.data]);


    return (
        <div>
            <CombinedChart width={800} height={340} data={data} />
            
        </div>
    );
};

export default ChartContainer;

