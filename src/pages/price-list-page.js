import { useParams } from 'react-router-dom';
import StockPriceTable from '../components/price-list-v2-component';


export default function PriceListPage () {
	const params = useParams();   
	return <StockPriceTable listId = {params.id}/>
}

