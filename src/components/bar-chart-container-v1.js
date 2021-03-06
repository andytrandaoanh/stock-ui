//created by Andy Tran 7 December 2020
//version 2.1
//add tooltip


import React, { useEffect, useState } from 'react';
import Chart from '../charts/bar-chart-v3.1';
import * as d3 from 'd3';

function ChartContainer(props) {
  const [data, setData] = useState([]);
    const parseDate = d3.utcParse("%Y-%m-%d");

    const d3Data = [];
    useEffect(() => {
    
      props.data.forEach(d =>{
        d3Data.push({
          date : parseDate(d.date), 
          open: +d.open,            
          close : +d.close,
          high: +d.high,
          low: +d.low,
          volume: +d.volume
        });

      setData(d3Data);

      });
 
        
    }, [props.data]);


    return (
        <div>
            <Chart width={800} height={240} data={data} />
        </div>
    );
};

export default ChartContainer;

