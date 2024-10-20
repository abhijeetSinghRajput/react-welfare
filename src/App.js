import './App.css';
import MidNavbar from './components/Navbar/MidNavbar';
import TopNavbar from './components/Navbar/TopNavbar';
import BottomNav from './components/Navbar/BottomNav';
import img from './assets/images/the_department_of_social_welfare_web_banner.png';
import News from './components/News/News';
import Services from './components/Services/Services';
import SocialWelfare from './components/SocialWelfare';
import Footer from './components/Footer/Footer'
import Copyright from './components/Footer/Copyright';
function App(){
  return(
    <>
      <TopNavbar/>
      <MidNavbar/>
      <BottomNav/>
      <div id='hero'>
        <img src={img}></img>
      </div>
      <News/>
      <Services/>
      <SocialWelfare/>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;