import './App.css';
import Clicker from './components/clicker';
import Infos from './components/infos';

function App() {
  const infos = [
    {
      name: 'Michael Jackson',
      age: 'not-alive',
      occupation: 'singer',
    },
    {
      name: 'Vasinc Daniel',
      age: 18,
      occupation: 'front end developer'
    },
    {
      name: 'Your father',
      age: 43,
      occupation: 'Gone for milk'
    }
  ]

  return (
    <div className='app'>
      <h1>Hello world!</h1>
      <Clicker />
      <Infos data={infos}/>
    </div>
  );
}

export default App;
