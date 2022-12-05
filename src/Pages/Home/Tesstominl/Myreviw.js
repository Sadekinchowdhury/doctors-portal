import React from 'react';

const Myreviw = ({ rev }) => {
    const { img, name, rivew, location } = rev
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {rivew} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Myreviw;