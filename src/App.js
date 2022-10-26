import { Component } from 'react';
import './App.css';
import { MenuAnimation } from './Menu';
import { BrowserRouter as Router, Route, Routes, Link, Redirect, BrowserRouter} from "react-router-dom";
import { Home } from './pages/home';
import { About } from './pages/about';


class App extends Component {
  componentDidMount(){
    MenuAnimation();
  }
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;