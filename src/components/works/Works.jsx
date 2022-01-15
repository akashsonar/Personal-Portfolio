import React from "react";
import "./works.scss";
import { useState } from "react";

export default function Works() {
    const [currentSlide,
        setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "/assets/mobile.png",
            title: "Web Design",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://png.pngtree.com/template/20210130/ourlarge/pngtree-shape-purple-idea-mod" +
                    "ern-geometric-abstract-mandala-logo-design-template-image_479968.png"

        }, {
            id: "2",
            icon: "/assets/globe.png",
            title: "Mobile Application",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://png.pngtree.com/element_our/png_detail/20180911/background-material-desi" +
                    "gn-for-lorem-ipsum-logo-png_89694.jpg"

        }, {
            id: "3",
            icon: "/assets/writing.png",
            title: "Branding",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://png.pngtree.com/element_our/png_detail/20180911/background-material-desi" +
                    "gn-for-lorem-ipsum-logo-png_89722.jpg"

        }
    ];

    function handleClick(way) {
        way === "left"
            ? setCurrentSlide(currentSlide > 0
                ? currentSlide - 1
                : 2)
            : setCurrentSlide(currentSlide < data.length - 1
                ? currentSlide + 1
                : 0);
    }
    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{
                transform: `translateX(-${currentSlide * 100}vw)`
            }}>
                {data.map((x) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={x.icon} alt=""/>
                                    </div>
                                    <h2>{x.title}</h2>
                                    <p>{x.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={x.img} alt=""/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="/assets/arrow.png"
                alt=""
                className="arrow left"
                onClick={() => handleClick("left")}/>
            <img
                src="/assets/arrow.png"
                alt=""
                className="arrow right"
                onClick={() => handleClick("right")}/>
        </div>
    );
}