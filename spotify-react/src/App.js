import './App.css';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { MainContent } from './main-content/main-content';
import { Sidebar } from './siderbar/sidebar';

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Footer/>
      <MainContent/>
    </div>
  );
}

export default App;
