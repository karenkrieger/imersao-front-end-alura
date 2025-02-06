/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './sidebar.css'
import logoSpotify from "../assets/icons/logo-spotify.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {
    return (
        <div>
            <nav className="sidebar_navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="logo Spotify" />
                    </a>
                </div>
                <div className="navigation">
                    <div className="nav-menu">
                        <a href="">
                            <FontAwesomeIcon icon={faHouse} className="icon" /><text className="menu-text">Início</text>
                        </a>

                    </div>
                    <div className="nav-menu">
                        <a href="">
                            <FontAwesomeIcon icon={faSearch} className="icon" /><text className="menu-text">Buscar</text>
                        </a>
                    </div>
                </div>
                <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <FontAwesomeIcon icon={faBook} className="library__button-book" />
                        <span>Sua biblioteca</span>
                        <FontAwesomeIcon icon={faPlus} className="library__button-plus" />
                    </button>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                        <span className="languages__text">Português do Brasil</span>
                    </button>
                </div>
            </div>
            </nav>
            
        </div>


    )
}