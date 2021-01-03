import React, { Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StockDetailInfo from './stock-detail-info-component';
import StockDetailTab5 from './stock-detail-tab5-component';
import StockDetailTab6 from './stock-detail-tab6-component';
import StockDetailChartContainer from './stock-detail-chart-container';
import StockDetailDataComponent from './stock-detail-data-component';
import StockDetailNotes from './stock-detail-note-component';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const chartTypeCombined = "combined";
const chartTypeVolume = "volume";
const chartTypePrice = "price";



export default function StockDetailComponent(props) {
 
    return (
      <Fragment>
      <BrowserView>
        <Tabs>
          <TabList>
            <Tab>Basic Information</Tab>
            <Tab>Combined Chart</Tab>
            <Tab>Price Chart</Tab>
            <Tab>Volume Chart</Tab>  
            <Tab>Maintain Stock</Tab>
            <Tab>Maintain Notes</Tab>
          </TabList>
      
          <TabPanel>
            <StockDetailInfo ticker={props.ticker}/>
            <StockDetailDataComponent ticker={props.ticker}/>
            <StockDetailNotes ticker={props.ticker}/>


            
           </TabPanel>
          <TabPanel>
            <StockDetailChartContainer ticker={props.ticker} type={chartTypeCombined}/>
          </TabPanel>
          <TabPanel>
          <StockDetailChartContainer ticker={props.ticker} type={chartTypePrice}/>
          </TabPanel> 

          <TabPanel>
          <StockDetailChartContainer ticker={props.ticker} type={chartTypeVolume}/>
          </TabPanel> 
         
          <TabPanel>
            <StockDetailTab5 ticker={props.ticker}/>
  
          </TabPanel>
          <TabPanel>
          <StockDetailTab6 ticker={props.ticker}/>
          </TabPanel>
        </Tabs>
      
      </BrowserView>
      <MobileView>

      <Tabs>
          <TabList>
            <Tab>Basic Information</Tab>
            <Tab>Charts</Tab>
            <Tab>Maintain Stock</Tab>
            <Tab>Maintain Notes</Tab>
          </TabList>
      
          <TabPanel>
            <StockDetailInfo ticker={props.ticker}/>
            <StockDetailDataComponent ticker={props.ticker}/>
            <StockDetailChartContainer ticker={props.ticker} type={chartTypeCombined}/>
            <StockDetailNotes ticker={props.ticker}/>
           </TabPanel>
          <TabPanel>
            
            <StockDetailChartContainer ticker={props.ticker} type={chartTypePrice}/>
            <StockDetailChartContainer ticker={props.ticker} type={chartTypeVolume}/>
          </TabPanel>
         
          <TabPanel>
            <StockDetailTab5 ticker={props.ticker}/>
  
          </TabPanel>
          <TabPanel>
          <StockDetailTab6 ticker={props.ticker}/>
          </TabPanel>
        </Tabs>
      </MobileView>
      </Fragment>
    )




} 