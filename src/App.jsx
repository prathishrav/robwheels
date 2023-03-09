
import Landing from "./components/pages/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import Header from './components/sections/Header'
import Footer from "./components/sections/Footer";
import ProductDetails from "./components/pages/ProductDetails";
import Dashboard from "./components/pages/Dashboard";
import Error from "./components/pages/Error";

function App() {
  return (
    <Router>
      <Header/>
    
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/details/:name" element={<ProductDetails/>}/>
        <Route exact path="/admin" element={<Dashboard/>}/>
        <Route exact path="*" element={<Error/>}/>

         </Routes>
       
         <Footer/>
    </Router>
    
  );
}

export default App;
