import { useParams } from 'react-router-dom';
import StockPriceTable from '../components/price-list-component';


export default function PriceListPage () {
	const params = useParams();   
	return <StockPriceTable listId = {params.id}/>
}

