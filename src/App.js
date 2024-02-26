import './styles/global.css';
import { Routes, Route, Link } from 'react-router-dom';

import {Layout} from "./comopnents/layouts/layout";
import { Game } from './pages/game';
import { Main } from './pages/main';
import { Profile } from './pages/profile';
import { Records } from './pages/records';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<Main/>}></Route>
          <Route path='game' element = {<Game/>}></Route>
          <Route path='records' element = {<Records/>}></Route>
          <Route path='profile' element = {<Profile/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
