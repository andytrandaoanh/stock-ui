import { useParams } from 'react-router-dom';
import VolumeTicker from '../components/volume-ticker-component';


export default function VolumeTickerPage () {
	const params = useParams();   
	return (<VolumeTicker ticker = {params.ticker} />
	
	)

}

