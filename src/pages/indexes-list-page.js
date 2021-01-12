import React, { Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";
  
  import IndexValueTable from '../components/index-value-list-component';
  import IndexVolumeTable from '../components/index-volume-list-component';
  import IndexDataComponent from '../components/index-data-component';
  import IndexValueChartMobile from '../components/index-value-chart-mobile';
  import IndexValueChartComponent from '../components/index-value-chart-component';
  import IndexVolumeChartMobile from '../components/index-volume-chart-mobile';
  import IndexVolumeChartComponent from '../components/index-volume-chart-component';
  import IndexCombinedChartMobile from '../components/index-combined-chart-mobile';
  import IndexCombinedChartComponent from '../components/index-combined-chart-component';

export default function ListContainer() {

    return (

        <Fragment>
         <BrowserView>
          <Tabs>
            <TabList>
            
              <Tab>Value</Tab>
              <Tab>Volume</Tab>
              <Tab>Value Chart</Tab>
              <Tab>Volume Chart</Tab>
              <Tab>Combined Chart</Tab>

            </TabList>
        
            <TabPanel>
                <IndexValueTable />
            </TabPanel>
            <TabPanel>
                <IndexVolumeTable />
            </TabPanel>
            <TabPanel>
             <IndexValueChartComponent />
            </TabPanel>
            <TabPanel>
              <IndexVolumeChartComponent/>
            </TabPanel>   
            <TabPanel>
             <IndexCombinedChartComponent />

            </TabPanel>  

            </Tabs>
          </BrowserView>
          <MobileView>
          <Tabs>
            <TabList>
              <Tab>Data</Tab>          
              <Tab>Charts</Tab>                  
              
            </TabList>
        
            <TabPanel>
              <IndexDataComponent ticker = {'VNINDEX'} />
              <IndexCombinedChartMobile ticker = {'VNINDEX'}/>
              <IndexDataComponent ticker = {'HNX-INDEX'} />   
              <IndexCombinedChartMobile ticker = {'HNX-INDEX'}/>  
              <IndexDataComponent ticker = {'UPCOM-INDEX'} /> 
              <IndexCombinedChartMobile ticker = {'UPCOM-INDEX'}/>  
              <IndexDataComponent ticker = {'VN30INDEX'} />   
              <IndexCombinedChartMobile ticker = {'VN30INDEX'}/>     
            </TabPanel>
            <TabPanel>
              <IndexValueChartMobile ticker = {'VNINDEX'}/>
              <IndexVolumeChartMobile ticker = {'VNINDEX'}/>
              <IndexValueChartMobile ticker = {'HNX-INDEX'}/>
              <IndexVolumeChartMobile ticker = {'HNX-INDEX'}/>
              <IndexValueChartMobile ticker = {'UPCOM-INDEX'}/>
              <IndexVolumeChartMobile ticker = {'UPCOM-INDEX'}/>
              <IndexValueChartMobile ticker = {'VN30INDEX'}/>
              <IndexVolumeChartMobile ticker = {'VN30INDEX'}/>
            </TabPanel>

            </Tabs>
          </MobileView>
        </Fragment>

    )

}