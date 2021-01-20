import HomePageComponent from '../components/dashboard-component';
import GaugeChart from '../components/gauge-chart-container';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function HomePage () {

	return (

		<Tabs>
		<TabList>
		  <Tab>Most Active</Tab>
		  <Tab>Warning</Tab>
		</TabList>
	
		<TabPanel>
			<HomePageComponent />
		</TabPanel>
		<TabPanel>
			<GaugeChart />
		</TabPanel>
		</Tabs>

	)



}
