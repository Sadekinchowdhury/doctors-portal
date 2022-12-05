import React from 'react';

const CardInfo = ({ cards }) => {
    const { icon, name, desciption, bgclass } = cards
    return (
        <div className={`card shadow-xl  lg:card-side px-6 ${bgclass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desciption}</p>

            </div>
        </div>
    );
};

export default CardInfo;