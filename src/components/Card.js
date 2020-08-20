import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-light-red dib br3 pa3 ma2 grow tc bw2 shadow-5">
            <img  alt='' src= {props.img} />
            <h2>{props.name}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default Card;