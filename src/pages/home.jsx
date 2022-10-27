import { Component } from "react";
import { MenuAnimation } from "../Menu";

export class Home extends Component{
    componentDidMount(){
        MenuAnimation();
      }
    render(){
    return (
        <div id="menu">
          <div id="tag-items">
            <span className='plain-text'>&lt;div id=<span className='white-text'>"menu"</span>&gt;</span>
              <div id="menu-items">
                <a href="#/" className="menu-item"><span className='tag-text'>&lt;a&gt;</span>Current Project<span className='tag-text'>&lt;/a&gt;</span></a>
                <a href="https://mrchiato.github.io/ChiatoIncGame/" target="_blank" className="menu-item"><span className='tag-text'>&lt;a&gt;</span>Clicker Game<span className='tag-text'>&lt;/a&gt;</span></a>
                <a href="https://github.com/MrChiato" target="_blank" className="menu-item"><span className='tag-text'>&lt;a&gt;</span>Github<span className='tag-text'>&lt;/a&gt;</span></a>
                <a href="https://www.linkedin.com/in/mattias-schmidt-53b6671b1/" target="_blank" className="menu-item"><span className='tag-text'>&lt;a&gt;</span>LinkedIn<span className='tag-text'>&lt;/a&gt;</span></a>
                <a href="#/about" className="menu-item"><span className='tag-text'>&lt;a&gt;</span>About Me<span className='tag-text'>&lt;/a&gt;</span></a>
                <a href="https://github.com/MrChiato/portfolio/blob/master/src/App.js" className="menu-item" target="_blank"><span className='tag-text'>&lt;a&gt;</span>Source Code<span className='tag-text'>&lt;/a&gt;</span></a>
              </div>
            <span className='plain-text'>&lt;/div&gt;</span>
          </div>
          <div id="menu-background-pattern"/>
          <div id="menu-background-image"/>
        </div>
      )};
}