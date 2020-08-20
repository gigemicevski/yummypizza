import React from 'react';
import Card from './Card';

const CardList = ({Pizza}) => {

    const cardArray = Pizza.map((pizza,i) => {
        return (
            <Card 
                key={Pizza[i].id} 
                name={Pizza[i].name} 
                info={Pizza[i].info}  
                img={Pizza[i].img}
            />
        )
    })

    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;