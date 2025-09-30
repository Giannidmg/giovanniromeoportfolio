import "../assets/styles/MainBar.css"

function MainBar(props: any) {


  function handleClick() {
    props.setLanguage(props.language === "en" ? "it" : "en")
  }


  return (
    <div className="menu-bar">
        <nav className="menu">
          <img className="logo" src="logo_white.png" alt="logo" />
          <div className="menu-btn">
              <button className="menu-button">Home</button>
          </div>
          <div className="menu-btn">
              <button className="menu-button">Description</button>
          </div>
          <div className="menu-btn">
              <button className="menu-button">Project</button>
          </div>
          <div className="menu-btn">
              <button className="menu-button">About</button>
          </div>
        <div className="menu-btn">
            <button className="contact-button">Contact Me</button>
        </div>
          {props.language === "en" && <img className="flag" src="italy_flag.svg" alt="it" onClick={handleClick}/>}
          {props.language === "it" && <img className="flag" src="uk_flag.svg" alt="uk" onClick={handleClick}/>}
      </nav>
    </div>
  )
}


export default MainBar;
