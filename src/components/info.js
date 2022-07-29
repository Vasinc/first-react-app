import './info.css'

function Info(props) {
    return(
        <div>
            <h2 className='name'>Name: {props.dataPerson.name}</h2>
            <h3 className='age'>Age: {props.dataPerson.age}</h3>
            <p className='occupation'>Occupation: {props.dataPerson.occupation}</p>
        </div>
    );
}

export default Info;