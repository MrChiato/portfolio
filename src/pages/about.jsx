export function About(){
    return (
        <div id="about-menu">
            <span className='plain-text'>&lt;div id=<span className='white-text'>"about"</span>&gt;</span>
            <h2 className="about-header">&lt;h2&gt;About Mattias&lt;/h2&gt;</h2>
            <p className="about-text">&lt;p&gt;I am a CS major, currently working on expanding my knowledge within Front-end development, with hopes of landing my first junior developer job soon, so I can learn and improve on my programming skills.&lt;/p&gt;</p>
            <a className="mail-text" href = "mailto: mattias@raver.dk"><span className='mail-tag'>&lt;a&gt;</span>Send Mail<span className='mail-tag'>&lt;/a&gt;</span></a>
            
            <div id="menu-items">
                <a href="#/" className="menu-item"><span className='tag-text'>&lt;a&gt;</span>Return<span className='tag-text'>&lt;/a&gt;</span></a>
            </div>
            <span className='plain-text'>&lt;/div&gt;</span>
        </div>
      );
}