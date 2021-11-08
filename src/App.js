import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from './sections/cover/Cover';
import Projects from './sections/projects/Projects';
import Certificates from './sections/certificates/Certificates';

function App() {
  return (<>
    <Cover />
    <Projects />
    <Certificates />
  </>
  );
}

export default App;
