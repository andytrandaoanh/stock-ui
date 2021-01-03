import React, { useState, useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import axios from 'axios';
import { STOCK_DETAIL_URL, STOCK_NOTES_URL, safeHeaders } from './api-config';
import CircularProgress from '@material-ui/core/CircularProgress';



const Styles = styled.div`
.container {
  padding: 10px;
  width: 100%;
}

.column-left {
  float: left;
  width: 60%;
}

.column-right {
  float: left;
  width: 40%;
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}


.row-title {
  font-weight: bold;
  display: inline-block;
  width: 120px;
  text-align: left;
}



.text-note {
  width: 90%;
  height: 120px;
}


`
export default function StockDetailTab1Component(props) {

  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);




  useEffect(() => {
    
    const fetchNotes = async (tickerid) =>{
      //console.log('url', `${STOCK_NOTES_URL}/search?tickerid=${tickerid}`);
      
      try {
        
        const result = await axios.get(`${STOCK_NOTES_URL}/search?tickerid=${tickerid}`, safeHeaders);
        console.log('notes', result.data);
        setNotes(result.data);


      } catch (error) {
        //setIsError(true);
        setNotes(null);
        console.log('error:', error);
      }
      


    }

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

        try {
        const result = await axios.get(`${STOCK_DETAIL_URL}/search?ticker=${props.ticker}`,safeHeaders);

        fetchNotes(result.data[0].id)

      } catch (error) {
        setIsError(true);
        console.log('error:', error);
      }

      setIsLoading(false);
     
 
    };

 
    fetchData();
  }, [props.ticker]);  




    return (

      <Styles>
      {isError && <div>Error encountered loading API data ...</div>}
      {isLoading && <div><CircularProgress /></div>}    
   

      {notes && <div className="container">
            {notes.map(item =>{

            return(
            <div key={item.id}>
              {item.note}
            </div>)
            })}
        
        </div>}


    </Styles>        
      );



} 