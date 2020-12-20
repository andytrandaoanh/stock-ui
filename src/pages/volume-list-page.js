import VolumeListTable from '../components/volume-list-v2-component';
import { useParams } from 'react-router-dom';

export default function VolumeListPage () {
	const params = useParams();   
	return <VolumeListTable listId = {params.id}/>
}


