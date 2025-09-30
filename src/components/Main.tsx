import "../assets/styles/Main.css"
import TextType from "./TextType";

function Main(props: any) {


  const titleEn = "Hi! I'm Giovanni Romeo";
  const titleIt = "Ciao! Sono Giovanni Romeo";

  return (
    <>
  <div id="top"></div>

    <div className="section main watch">
      <div className="main-name">
        {props.language === "en" && <TextType text={titleEn}/>}
        {props.language === "it" && <TextType text={titleIt}/>}
      </div>
      <div className="main-img watch fade-in">
        <img src="MemojiHi.svg" alt="img" />
      </div>
    </div>

    </>
  )
}


export default Main;
