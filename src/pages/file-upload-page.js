import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FileUpload from '../components/file-upload-component';
import FileList from '../components/file-list-component';
import MaintainData from '../components/add-stock-data-component';

export default function FileUploadPage () {

	return (
	
	
	
		<Tabs>
		<TabList>
		  <Tab>Upload File</Tab>
		  <Tab>Process File</Tab>
		  <Tab>Maitain Data</Tab>
		</TabList>
	
		<TabPanel>
			<FileUpload />
		</TabPanel>
		<TabPanel>
			<FileList />
		</TabPanel>
		<TabPanel>
			<MaintainData />
		</TabPanel>
		</Tabs>
		
		
		
		)
}
