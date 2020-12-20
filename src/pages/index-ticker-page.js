import { useParams } from 'react-router-dom';
import IndexTickerComponent from '../components/index-ticker-component';


export default function IndexTickerPage () {
	const params = useParams();   
	return (<IndexTickerComponent ticker = {params.ticker} />
	
	)

}

