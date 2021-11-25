import "../scss/menu.scss";
import React from "react";

export default function Menu({ menuIsVisible, setMenuIsVisible }) {
    return (
        <div className={"menu " + (menuIsVisible && "active")}>
            <ul>
                <li onClick={() => setMenuIsVisible(false)}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={() => setMenuIsVisible(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuIsVisible(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={() => setMenuIsVisible(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}
