import {  Switch,  Route } from "react-router-dom";
import HomePage from '../pages/home-page';
import FileUploadPage from '../pages/file-upload-page';
import FileListPage from '../pages/file-list-page';
import PriceListPage from '../pages/price-list-page';
import VolumeListPage from '../pages/volume-list-page';
import StockListPage from '../pages/stock-list-page';
import StockListDisplayPage from '../pages/stock-list-display-page';
import TransactionTickerPage from '../pages/transaction-ticker-page';
import VolumeTickerPage from '../pages/volume-ticker-page';
import IndexUploadPage from '../pages/index-upload-page';
import IndexFileListPage from '../pages/index-file-list-page';
import IndexListPage from '../pages/indexes-list-page';
import IndexTickerPage from '../pages/index-ticker-page';
import IndexVolumePage from '../pages/index-volume-page';
import AddStockDataPage from '../pages/add-stock-data-page';
import AddIndexDataPage from '../pages/add-index-data-page';
import StockCombinedPage from '../pages/stock-combined-page';
import IndexCombinedPage from '../pages/index-combined-page';
import StockDetailPage from '../pages/stock-detail-page';


export default function RoutingComponent()  {
    
    return (
      <Switch>
        
        <Route path="/addindexdata" component={AddIndexDataPage} />
        <Route path="/addstockdata" component={AddStockDataPage} />
        <Route path="/indexcombined/:ticker" component={IndexCombinedPage} />
        <Route path="/indextransactions/:ticker" component={IndexTickerPage} />
        <Route path="/indexvolumes/:ticker" component={IndexVolumePage} />
        <Route path="/indexes/list" component={IndexListPage} />
        <Route path="/indexfiles/list" component={IndexFileListPage} />
        <Route path="/indexupload" component={IndexUploadPage} />
        <Route path="/transvolumes/:ticker" component={VolumeTickerPage} />
        <Route path="/transactions/:ticker/list/:id" component={TransactionTickerPage} />
        <Route path="/stockdetails/:ticker" component={StockDetailPage} />
        <Route path="/stockcombined/:ticker" component={StockCombinedPage} />
        <Route path="/stocklists/display/:id" component={StockListDisplayPage} />
        <Route path="/stocks/list" component={StockListPage} />
        <Route path="/volumes/list/:id" component={VolumeListPage} />
        <Route path="/prices/list/:id" component={PriceListPage} />
        <Route path="/files/list" component={FileListPage} />
        <Route path="/upload" component={FileUploadPage} />
        <Route path="/" component={HomePage} />
        
      </Switch>

      
    );
    
}
