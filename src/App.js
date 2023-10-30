// import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoginForm/>
      {/* <RegistrationForm/> */}
      <Footer/>
    </div>
  );
}

export default App;
