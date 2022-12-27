import '../src/App.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
        <Router>
            <div className='app'>
              <div className='container'>
                  <Header />
                  <Routes>   
                  <Route path='/' element={<Home />} />
                  <Route path='/ficheLogement/:id' element={<FicheLogement />} />          
                  <Route path='/aPropos' element={<APropos />} />
                  <Route path='/*' element={<NotFound />} />  
                </Routes>  
              </div>
                
              <div className='footer'>
                <Footer />
              </div>
                
            </div>
        </Router>
  );
}

export default App;
