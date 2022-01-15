import React from 'react';
import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {

    const x = function restore() {
        return setMenuOpen(false);
    };
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={x}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={x}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={x}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={x}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={x}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
