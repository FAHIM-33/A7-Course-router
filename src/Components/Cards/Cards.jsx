import { useEffect, useState } from "react";
import SoloCard from "./SoloCard";
import pt from 'prop-types'

const Cards = ({ handleCourse }) => {

    let [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch('./card.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div className="w-3/4 grid grid-cols-3 gap-6">
            {
                cardData.map((card) => <SoloCard
                    key={card.id}
                    card={card}
                    handleCourse={handleCourse}
                ></SoloCard>)
            }
        </div>
    );
};
Cards.propTypes = {
    handleCourse: pt.func,
}
export default Cards;