import './infos.css'
import Info from './info';

function Infos(props) {
    return(
        <div className='infos-wrapper'>
            <Info dataPerson={props.data[0]}/>
            <Info dataPerson={props.data[1]}/>
            <Info dataPerson={props.data[2]}/>
        </div>
    );
}

export default Infos;