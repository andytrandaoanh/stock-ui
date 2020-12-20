import { useParams } from 'react-router-dom';
import StockCombinedComponent from '../components/stock-combined-component';


export default function StockCombinedPage () {
	const params = useParams();   
	return (<StockCombinedComponent ticker = {params.ticker} />
	
	)

}

