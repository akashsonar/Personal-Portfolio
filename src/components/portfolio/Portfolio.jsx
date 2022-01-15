import React from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {useState} from "react";
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data";
import {useEffect} from "react";

export default function Portfolio() {

    const [selected,
        setSelected] = useState("featured");
    const [data,
        setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        }, {
            id: "web",
            title: "Web App"
        }, {
            id: "mobile",
            title: "Mobile App"
        }, {
            id: "design",
            title: "Design"
        }, {
            id: "content",
            title: "Content"
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;

            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((x) => {
                    return <PortfolioList
                        title={x.title}
                        active={selected === x.id}
                        setSelected={setSelected}
                        id={x.id}/>
                })}
            </ul>
            <div className="container">

                {data.map((x) => (
                    <div className="item">
                        <img src={x.img} alt=""/>
                        <h3>{x.title}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}
