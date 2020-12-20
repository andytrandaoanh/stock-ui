import { useParams } from 'react-router-dom';
import StockDetailComponent from '../components/stock-detail-component';


export default function StockDetailPage () {
	const params = useParams();   
	return (<StockDetailComponent ticker = {params.ticker} />
	
	)

}

