import React, { Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";
  
import VolumeListTable from '../components/volume-list-v2-component';
import PriceListTable from '../components/price-list-v2-component';
import StockListTable from '../components/stock-list-component';

export default function ListContainer() {

    return (

        <Fragment>
        
          <Tabs>
            <TabList>
              <Tab>Price</Tab>
              <Tab>Volume</Tab>
              <Tab>Maintain</Tab>
            </TabList>
        
            <TabPanel>
                <PriceListTable />
            </TabPanel>
            <TabPanel>
                <VolumeListTable />
            </TabPanel>
            <TabPanel>
                <StockListTable />
            </TabPanel>
            
            </Tabs>
        </Fragment>

    )

}