import "../assets/styles/PopUpBar.css"

function PopUpBar(props: any) {

    const {language, setLanguage} = props

  function handleClick() {
    setLanguage(props.language === "en" ? "it" : "en")
  }


  return (
    <div className="pop-menu-bar up-in">
        <nav className="pop-menu">
          <img className="pop-logo" src="logo_white.png" alt="logo" />
          <div className="pop-flex">

          <div className="pop-menu-btn">
              <button className="menu-button">Home</button>
          </div>
          <div className="pop-menu-btn">
              <button className="menu-button">Description</button>
          </div>
          <div className="pop-menu-btn">
              <button className="menu-button">Project</button>
          </div>
          <div className="pop-menu-btn">
              <button className="menu-button">About</button>
          </div>
        <div className="pop-menu-btn">
            <button className="contact-button">Contact Me</button>
        </div>
          </div>
          {language === "en" && <img className="pop-flag" src="italy_flag.svg" alt="it" onClick={handleClick}/>}
          {language === "it" && <img className="pop-flag" src="uk_flag.svg" alt="uk" onClick={handleClick}/>}
      </nav>
    </div>
  )
}


export default PopUpBar;
