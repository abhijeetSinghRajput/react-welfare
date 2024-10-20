import './App.css';
import MidNavbar from './components/Navbar/MidNavbar';
import TopNavbar from './components/Navbar/TopNavbar';
import BottomNav from './components/Navbar/BottomNav';
import img from './assets/images/the_department_of_social_welfare_web_banner.png';

function App(){
  return(
    <>
      <TopNavbar/>
      <MidNavbar/>
      <BottomNav/>
      <div className='container' id='hero'>
        <img src={img}></img>
      </div>
    </>
  );
}

export default App;