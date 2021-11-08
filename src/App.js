import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from './sections/cover/Cover';
import Projects from './sections/projects/Projects';
import Certificates from './sections/certificates/Certificates';

function App() {
  return (
    <>
      <Cover />
      <Projects />
      <Certificates />
      <div className="footer">Made with {'<3'} by <a rel="noreferrer" href="https://github.com/rifkiystark" target="_blank">rifkiystark</a></div>
    </>
  );
}

export default App;
