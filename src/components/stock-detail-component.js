import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StockDetailTab1 from './stock-detail-tab1-component';
import StockDetailTab5 from './stock-detail-tab5-component';

export default function StockDetailComponent(props) {
 
    return (


        <Tabs>
          <TabList>
            <Tab>Basic Information</Tab>
            <Tab>Combined Chart</Tab>
            <Tab>Price Chart</Tab>
            <Tab>Volume Chart</Tab>  
            <Tab>Maintain Stock</Tab>
          </TabList>
      
          <TabPanel>
            <StockDetailTab1 ticker={props.ticker}/>
           </TabPanel>
          <TabPanel>
          </TabPanel>
          <TabPanel>
          </TabPanel> 

          <TabPanel>
          </TabPanel> 
         
          <TabPanel>
            <StockDetailTab5 ticker={props.ticker}/>
  
          </TabPanel>
        </Tabs>

    )




} 