import Image from "next/image";
import Card1 from "../medias/card1.png";
import Card2 from "../medias/card2.png";
import Card3 from "../medias/card3.png";

export default function CardsGroup(){
    return(

        <div className="cardsGroup ">
          <div className="card1 card grid">
            <div className="imgArea">
              <Image src={Card1} alt="Card 1" />
            </div>

            <div className="content grid">
              <span className="typeCard">Animes</span>

              <div className="text">
                <strong className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare urna pharetra ut ac, pellentesque.
                </p>

                <span className="more">Ler mais</span>
              </div>
            </div>
          </div>
          <div className="card2 card grid">
            <div className="imgArea">
              <Image src={Card2} alt="Card 1" />
            </div>

            <div className="content grid">
              <span className="typeCard">Animes</span>

              <div className="text">
                <strong className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare urna pharetra ut ac, pellentesque.
                </p>

                <span className="more">Ler mais</span>
              </div>
            </div>
          </div>
          <div className="card3 card grid">
            <div className="imgArea">
              <Image src={Card3} alt="Card 1" />
            </div>

            <div className="content grid">
              <span className="typeCard">Animes</span>

              <div className="text">
                <strong className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare urna pharetra ut ac, pellentesque.
                </p>

                <span className="more">Ler mais</span>
              </div>
            </div>
          </div>
        </div>

    )
}