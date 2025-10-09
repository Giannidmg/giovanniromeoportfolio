import "../assets/styles/Card.css";

function Card(props: any) {
  const textPresentationTitle =
    props.language == "en"
      ? `Hello I'm Consultant | Solution Architect | Developer`
      : `Ciao io sono Consultant | Solution Architect | Developer`;
  const textPresentation =
    props.language == "en"
      ? `My name is Giovanni Romeo, and I'm a full-stack software developer. I'm passionate about technology in all its forms, and I see it as a useful tool for facilitating and improving daily life. Driven by this passion, I graduated from the University of Messina in 2022.
        In recent years, I have combined my studies with my work, applying the knowledge I've gained through both independent and academic study in various fields.
        My goal is to contribute to the creation of software that enables the implementation of today's technologies.`
      : `Mi chiamo Giovanni Romeo, e sono un Software Developer Full Stack. Sono un appassionato della tecnologia in ogni sua forma e per me rappresenta uno strumento utile per agevolare e migliorare la vita quotidiana. Guidato da questa passione, mi sono laureato presso l’Università degli studi di Messina nel 2022.
        Negli ultimi anni ho associato lo studio all’attività lavorativa, applicando le conoscenze acquisite nello studio, sia autonomo che universitario, in vari settori lavorativi. 
        Il mio obiettivo è quello di contribuire alla creazione di software che possano implementare le tecnologie odierne.`;

  return (
    <>
      <div className="card ">
        <div className="card-body watch fade-in">
          <img className="card-icon" src="MemojiHi.png" alt="" />
          <div>
            <div className="card-t">
              <p>{textPresentationTitle}</p>
            </div>
          </div>
          <div className="card-d">
            <p>{textPresentation}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
