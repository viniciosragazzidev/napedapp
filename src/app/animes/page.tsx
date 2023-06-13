"use client";

import Image from "next/image";
import "./animes.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import naruto from "../medias/bannerTop.png";
import searchIcon from "../medias/searchIcon.svg";
import CardsGroup from "../_components/CardsGroup";
export default function Animes() {
  return (
    <main>
      <header>
        <div className="bannerTop loadImagCover">
          <Image src={naruto} alt="Card 1" />
          <div className="boxText">
            <h3 className="title">Animes </h3>
            <p className={`desc ${inter.className}`}>
              O Naped pode ser sua fonte de informações sobre o mundo nerd e
              outros assuntos relacionados.
            </p>
          </div>
        </div>
      </header>

      <div className="searchArea">
        <input
          type="search"
          placeholder="Quer ajuda na procura? Pesquise aqui"
          name="search"
          id="search"
        />
        <span>
          <Image src={searchIcon} alt="Search icon" />
        </span>
      </div>


      <section className="cards">
        <CardsGroup/>
        <CardsGroup/>
        <CardsGroup/>
      </section>
    </main>
  );
}
