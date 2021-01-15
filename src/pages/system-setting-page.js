import React, { Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {BrowserView, MobileView,} from "react-device-detect";
import { makeStyles } from '@material-ui/core/styles';
import SettingAddComponent from '../components/setting-add-component';
import SettingEditComponent from '../components/setting-edit-component';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
  
  }));


  

export default function SystemSettingPage() {
    const classes = useStyles();
  
      return (
  
          <Fragment>
           <BrowserView>
            <Tabs>
              <TabList>
              
                <Tab>Add Key</Tab>
                <Tab>Edit Keys</Tab>
  
              </TabList>
          
              <TabPanel>
              
                <SettingAddComponent />
              
              </TabPanel>
              <TabPanel>
                <SettingEditComponent />
              </TabPanel>
            </Tabs>
            </BrowserView>
 
          </Fragment>
  
      )
  
  }