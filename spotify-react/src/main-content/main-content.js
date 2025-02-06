/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './main-content.css'
import data from '../assets/playlist/data'

export const MainContent = () => {
    return (
        <div className="main-container">
            <div className="playlist-container">
                <div id="result-playlist" className="result-playlist">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="greeting-subtitle">Navegar por todas as seções</h2>
                    </div>
                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                {
                                    data.map((item, i) => (
                                        <a key={item} href="" className="cards">
                                            <div className={`cards card${i + 1}`}>
                                                <div>{item.title}</div>
                                                <img src={item.image} alt="" />
                                            </div>
                                        </a>
                                    ))
                                }
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}