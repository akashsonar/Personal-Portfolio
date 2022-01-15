import "./testimonials.scss";
import React from "react";

export default function Testimonials() {
    const data = [
        {
            id: "1",
            name: "Tom Durdon",
            title: "Senior Developer",
            img: "https://www.mot-tech.com/wp-content/uploads/2019/04/Random-Person-Testimonial-Te" +
                    "mplate-500x382.png",
            icon: "/assets/twitter.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        }, {
            id: "2",
            name: "Alex Junior",
            title: "Co-Founder of DELKA",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKOKt2DPKuvIUMEZxVRh2g4bL" +
                    "EPNY9QzQP-ppMWDYRo8Ai8SAXXFyAA9MEt4QMjyi0Y8&usqp=CAU",
            icon: "/assets/youtube.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            featured: true
        }, {
            id: "3",
            name: "Arnold Schwarzenegger",
            title: "Co-Founder of Arnold Acadmy",
            img: "https://bit.ly/3FqY2jS",
            icon: "/assets/linkedin.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        }
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((x) => (
                    <div
                        className={x.featured
                        ? "card featured"
                        : "card"}>
                        <div className="top">
                            <img className="left" src="/assets/right-arrow.png" alt=""/>
                            <img className="user" src={x.img} alt=""/>
                            <img className="right" src={x.icon} alt=""/>
                        </div>
                        <div className="center">
                            {x.desc}
                        </div>
                        <div className="bottom">
                            <h3>{x.name}</h3>
                            <h4>{x.title}</h4>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}