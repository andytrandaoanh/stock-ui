import DashBoardComponent from '../components/dashboard-component';
import GaugeChartContainer from '../components/gauge-chart-container';
import PlungeDataComponent from '../components/plunge-data-component';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function HomePage () {

	return (

		<Tabs>
		<TabList>
		  <Tab>Most Active</Tab>
		  <Tab>Warning</Tab>
		  <Tab>History</Tab>
		</TabList>
	
		<TabPanel>
			<DashBoardComponent />
		</TabPanel>
		<TabPanel>
			<GaugeChartContainer />
		</TabPanel>
		<TabPanel>
			<PlungeDataComponent />
		</TabPanel>
		</Tabs>

	)



}
