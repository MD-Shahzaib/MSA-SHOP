// Redux
import { Provider } from 'react-redux';
import store from './Store';

// Components.
import Navbar from './Screens/Navbar';
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Contact from './Screens/Contact';
import TopBtn from './Screens/TopBtn';
import Footer from './Screens/Footer/Index';

function App() {
  return (
    <>
      <Provider store={store}>

        <Navbar />
        <Home />
        <About />
        <Services />
        <Contact />
        <TopBtn />
        <Footer />

      </Provider>
    </>
  );
}

export default App;
