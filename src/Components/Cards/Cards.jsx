import { useEffect, useState } from "react";
import SoloCard from "./SoloCard";
const Cards = () => {

    let [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch('./card.json')
        .then(res => res.json())
        .then(data => setCardData(data))
    }, [])
    
    return (
        <div className="w-3/4 grid grid-cols-3 gap-6">
            {
                cardData.map((card)=><SoloCard
                key={card.id}
                card={card}
                ></SoloCard>)
            }
        </div>
    );
};

export default Cards;