"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import logo from "./logo.png"; // substitua 'logo.png' pelo nome do arquivo da imagem
import { List, X } from "@phosphor-icons/react";
import AppContext from "../_context/AppContext";


export const Navbar = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);
  
  const [currentPath,setCurrentPath] = useState('')
  useEffect(()=>{
    setCurrentPath(typeof window !== 'undefined' ? window.location.pathname : '')
  },[])
  return (
    <header className="menu">
      <div className="navbar">
        <div className="logo">
          <Image src={logo} alt="" />
          <h1>Naped</h1>
        </div>
        <nav className={`${openMenu ? "open" : ""}`}>
          <span
            className="menubtn"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <X size={24} />
          </span>
          <ul>
            <li>
              <Link onClick={()=>{setCurrentPath('/')}} className={`${currentPath === "/" ? "active" : ""} link`} href="/">
                <span >
                  Início
                </span>
              </Link>
            </li>
            <li>
            <Link onClick={()=>{setCurrentPath("/series")}}  className={`${currentPath === "/series" ? "active" : ""} link`} href="/series">
                <span >
                  Series
                </span>
              </Link>
            </li>
            <li>
            <Link onClick={()=>{setCurrentPath("/filmes")}} className={`${currentPath === "/filmes" ? "active" : ""} link`} href="/filmes">
                <span >
                Filmes
                </span>
              </Link>
            </li>
            <li>
            <Link onClick={()=>{setCurrentPath("/animes")}} className={`${currentPath === "/animes" ? "active" : ""} link`} href="/animes">
                <span >
                Animes
                </span>
              </Link>
            </li>
            <li>
            <Link onClick={()=>{setCurrentPath("/jogos")}} className={`${currentPath === "/jogos" ? "active" : ""} link`} href="/jogos">
                <span >
                Jogos
                </span>
              </Link>
            </li>
          </ul>

          <span className="button">Minha conta</span>
        </nav>

        <span
          className="menubtn"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <List size={24} />
        </span>
      </div>
    </header>
  );
};
