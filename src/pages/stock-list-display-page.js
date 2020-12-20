import { useParams } from 'react-router-dom';
import StockListDisplay from '../components/stock-list-display-component';


export default function StockListDisplayPage () {
	const params = useParams();   
	return <StockListDisplay listId = {params.id} />
}

