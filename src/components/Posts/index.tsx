import {Outlet, useParams, useSearchParams} from 'react-router-dom';
import './styles.css'

export const Posts = () => {
    const params = useParams();
    const {id} = params;
    const [qs] = useSearchParams();

    return (
        <div>
            <h1>Post {`Para: ${id} QS: ${qs.get('value')}`}</h1>
            <Outlet></Outlet>
        </div>
    );
}
