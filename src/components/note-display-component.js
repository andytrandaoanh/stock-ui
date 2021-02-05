import React, { useState, useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { STOCK_NOTES_URL, safeHeaders } from './api-config';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));



const Styles = styled.div`
.container {
  padding: 10px;
  width: 100%;
}


.text-note {
  width: 98%;
  margin-bottom: 15px;
}

.note-date {
  color: #777;
}


`
export default function NoteDisplayComponent() {
  const classes = useStyles();
  const PER_PAGE = 10;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0);
  const [notes, setNotes] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
    //console.log('page:', value);
    const indexFrom = (value - 1) * PER_PAGE;
    const indexTo = value  * PER_PAGE;
    setNotes(data.slice(indexFrom, indexTo));
  };


  useEffect(() => {
    
    const fetchNotes = async () =>{
      //console.log('url', `${STOCK_NOTES_URL}/search?tickerid=${tickerid}`);
      
      try {
        setIsLoading(true);
        const result = await axios.get(STOCK_NOTES_URL, safeHeaders);
        //console.log('notes', result.data);
        setData(result.data);
        setPageCount(Math.ceil(data.length / PER_PAGE));
        setNotes(result.data.slice(0,PER_PAGE));
        setIsLoading(false);



      } catch (error) {
        setIsError(true);
        //setNotes(null);
        console.log('error:', error);
      }
      


    }

    
 
    fetchNotes();
  }, []);  




    return (

      <Styles>
      {isError && <div>Error encountered loading API data ...</div>}
      {isLoading && <div><CircularProgress /></div>}    
   

      {data && 


      <Grid container spacing={0.5}>        
        {notes.map(item=>{
          
          return(
            <Grid item xs={12} key={item.note_id}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
              {moment(item.note_date).format('DD/MM/YYYY')}
            </Typography>

                  <Typography variant="h5" component="h2">
                    {item.ticker} 
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                  {item.exchange} - {item.company}
                </Typography>


                  <Typography variant="body2" component="p">
                    {item.note})
                  </Typography>                  
                </CardContent>
                <CardActions>
                  <Button size="small" component={RouterLink} to={`/stockdetails/${item.ticker}`}>Learn More</Button>
                </CardActions>
              </Card>
       
            </Grid>
            )
        })}


        <Pagination count={pageCount}  page={page} onChange={handleChange} />   
        
      
      </Grid>

        
      }    

    </Styles>        
      );



} 