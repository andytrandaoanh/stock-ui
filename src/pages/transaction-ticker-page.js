import { useParams } from 'react-router-dom';
import TransactionTicker from '../components/transaction-ticker-component';


export default function TransactionTickerPage () {
	const params = useParams();   
	return (<TransactionTicker ticker = {params.ticker} />
	
	)

}

