import Navbar from './Navbar';
import './styles/App.scss';

function App() {
  return (
    <>
      <Navbar header='React Apps' />
      <a href={process.env.PUBLIC_URL + '/#/quote-machine'}>Quote Machine</a>
      <a href={process.env.PUBLIC_URL + '/#/markdown-editor'}>Markdown Editor</a>
    </>
  );
}

export default App;
