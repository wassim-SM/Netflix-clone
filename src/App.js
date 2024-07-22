import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginPage from './pages/LoginPage';
import MoviePage from './pages/MoviePage';
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import  SighUp from './pages/SighUp'
import TvShow from './pages/TvShow'
// import Header from './components/Header';
// import Background from './components/Background';
function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route exact path='/login' element={<LoginPage/>}  />
    <Route exact path='/movie' element={<MoviePage/>}  />

    <Route exact path='/' element={<Netflix/>}  />

    <Route exact path='/player' element={<Player/>}  />

    <Route exact path='/signup' element={<SighUp/>}  />

    <Route exact path='/tv' element={<TvShow/>}  />

    <Route exact path='/login' element={<LoginPage/>}  />

   </Routes> 
   
   
   </BrowserRouter>
  );
}

export default App;
