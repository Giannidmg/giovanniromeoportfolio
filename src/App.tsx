import { useEffect, useRef, useState } from "react";
import "./App.css";
import Tobe from "./components/Tobe";
import Main from "./components/Main";
import PopUpBar from "./components/PopUpBar";
import MainBar from "./components/MainBar";
import Description from "./components/Description";
import { useInView } from "motion/react"
import Carousel from "./components/Carousel";

function App() {
  const [tobe] = useState(false);
  const [language, setLanguage] = useState("en");
  const mainref = useRef<HTMLElement | null>(null)
  const mainInView = useInView(mainref, { margin: "-50px" });



  useEffect(()=>{
    inPage();
  })

  function inPage(){
    var elements_to_watch = document.querySelectorAll(".watch");
    var callback = function(items: any[]){
      items.forEach((item) => {
        if(item.isIntersecting){
          item.target.classList.add("in-page");
        } 

      });
    }
    var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
    elements_to_watch.forEach((element) => {
      observer.observe(element); 
    });
  }


  return (
    <>
      {tobe && <Tobe />}
      {!tobe && 
      <>
      <MainBar language={language} setLanguage={setLanguage}/>
      {!mainInView && <PopUpBar language={language} setLanguage={setLanguage}/>}
      <Main mainref={mainref} language={language} />
      <Description language={language}/>
      <Carousel/>
      </>
      }
    </>
  );
}

export default App;
