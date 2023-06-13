import "./styles/page_style/page.css";
import Image from "next/image";

import dragao from "./medias/drag.png";
import gow from "./medias/gow.png";
import viking from "./medias/viking.png";
import CardsGroup from "./_components/CardsGroup";
export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1 className="topo">Mundo nerd? Naped!</h1>
          <p>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e
            outros assuntos relacionados.
          </p>
        </header>

        <section className="grid firstSerction">
          <div className="box1 box loadImgCover">
            <Image src={viking} alt="Card 1" />
            <div className="boxText">
              <span className="type">Series</span>

              <h3 className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
            </div>
          </div>
          <div className="box2 box loadImgCover">
            <Image src={gow} alt="Card 1" />
            <div className="boxText">
              <span className="type">Jogos</span>

              <h3 className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
          <div className="box3 box loadImgCover">
            <Image src={dragao} alt="Card 1" />
            <div className="boxText">
              <span className="type">Animes</span>

              <h3 className="title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
            </div>
          </div>
        </section>
        <section className="secondSection grid">
          <h2>Notícias mais recentes</h2>

          <CardsGroup />
        </section>

        <section className="thirdSection grid">
          <h2>Lançamentos</h2>
          <div className="cards grid">
            <div className="card grid">
              <span className="type">filmes</span>
              <div className="lancamentoCardText">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare urna pharetra ut ac, pellentesque.
                </p>
              </div>
              <span className="more">Ler mais</span>
            </div>
            <div className="card grid">
              <span className="type">filmes</span>
              <div className="lancamentoCardText">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare urna pharetra ut ac, pellentesque.
                </p>
              </div>
              <span className="more">Ler mais</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
