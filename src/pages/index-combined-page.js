import { useParams } from 'react-router-dom';
import IndexCombinedComponent from '../components/index-combined-component';


export default function IndexCombinedPage () {
	const params = useParams();   
	return (<IndexCombinedComponent ticker = {params.ticker} />
	
	)

}

