import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './components/ButtonAppBar';
import { Pokedex } from './pages/Pokedex/Pokedex';
import { Pokemon } from './pages/Pokemon/Pokemon';


export const RoutesPokedex: React.FC = () => {
  return (
    <BrowserRouter>
        <ButtonAppBar/>
        <Routes>
            <Route path='/' element={<Pokedex/>}/>
            <Route path='/pokemon/:name' element={<Pokemon/>}/>
        </Routes>
    </BrowserRouter>
  );
}
