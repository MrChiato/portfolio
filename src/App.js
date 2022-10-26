import { Component } from 'react';
import './App.css';
import { MenuAnimation } from './Menu';
import { Route, Routes, HashRouter} from "react-router-dom";
import { Home } from './pages/home';
import { About } from './pages/about';


class App extends Component {
  componentDidMount(){
    MenuAnimation();
  }
  render(){
    return(
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </HashRouter>
    )
  }
}
export default App;