import Navbar from './Navbar';
import './styles/App.scss';

function App() {
  return (
    <>
      <Navbar header='React Apps' />
      <a href={'/quote-machine'}>Quote Machine</a>
    </>
  );
}

export default App;
