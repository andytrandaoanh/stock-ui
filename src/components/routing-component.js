import {  Switch,  Route } from "react-router-dom";
import HomePage from '../pages/home-page';
import FileUploadPage from '../pages/file-upload-page';
import FileListPage from '../pages/file-list-page';
import ListContainerPage from '../pages/list-container-page';
import StockListDisplayPage from '../pages/stock-list-display-page';
import IndexUploadPage from '../pages/index-upload-page';
import IndexFileListPage from '../pages/index-file-list-page';
import IndexListPage from '../pages/indexes-list-page';
import AddStockDataPage from '../pages/add-stock-data-page';
import AddIndexDataPage from '../pages/add-index-data-page';
import StockDetailPage from '../pages/stock-detail-page';
import SystemSettingPage from '../pages/system-setting-page';


export default function RoutingComponent()  {
    
    return (
      <Switch>
        
        <Route path="/addindexdata" component={AddIndexDataPage} />
        <Route path="/addstockdata" component={AddStockDataPage} />
        <Route path="/indexes/list" component={IndexListPage} />
        <Route path="/indexfiles/list" component={IndexFileListPage} />
        <Route path="/indexupload" component={IndexUploadPage} />
        <Route path="/files/list" component={FileListPage} />
        <Route path="/lists" component={ListContainerPage} />
        <Route path="/settings" component={SystemSettingPage} />
        <Route path="/stockdetails/:ticker" component={StockDetailPage} />
        
        <Route path="/stocklists/display/:id" component={StockListDisplayPage} />
        <Route path="/upload" component={FileUploadPage} />
        <Route path="/" component={HomePage} />
        
      </Switch>

      
    );
    
}
