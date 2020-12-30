import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import IndexTransAddComponent from './index-trans-add-component';
import IndexTransEditComponent from './index-trans-edit-component';


export default function IndexMaintenanceTabs(props) {
 
    return (


        <Tabs>
          <TabList>
            <Tab>Add Index Data</Tab>
            <Tab>Edit Index Data</Tab>

          </TabList>
      
          <TabPanel>
            <IndexTransAddComponent />
          </TabPanel>
          
          <TabPanel>
            <IndexTransEditComponent />
          </TabPanel>
   
        </Tabs>

    )




} 