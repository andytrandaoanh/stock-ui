import { useParams } from 'react-router-dom';
import IndexVolumeComponent from '../components/index-volume-component';


export default function IndexTickerPage () {
	const params = useParams();   
	return (<IndexVolumeComponent ticker = {params.ticker} />
	
	)

}

