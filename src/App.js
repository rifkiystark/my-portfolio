import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from './sections/cover/Cover';
import Projects from './sections/projects/Projects';
import Certificates from './sections/certificates/Certificates';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#projects' },
  { label: 'Creds', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <div className="portfolio-shell">
      <aside className="portfolio-rail" aria-label="Navigasi portfolio">
        <a className="rail-brand" href="#home" aria-label="Kembali ke bagian awal">ARH</a>
        <nav className="rail-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="rail-status">
          <span>Open for work</span>
          <strong>Go · Microservices · Event-Driven</strong>
        </div>
      </aside>

      <main className="portfolio-main">
        <Cover />
        <Projects />
        <Certificates />
        <footer className="footer" id="contact">
          <div className="footer__inner">
            <span>Bangun produk digital dengan</span>
            <a rel="noreferrer" href="https://github.com/rifkiystark" target="_blank">rifkiystark</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
