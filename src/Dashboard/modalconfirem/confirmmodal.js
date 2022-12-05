
import React from 'react';

const Confirmmodal = ({ title, message, canCellebtn, delteData, delteDoctor }) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            < input type="checkbox" id="deletemodal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">

                        <label onClick={() => delteDoctor(delteData)} htmlFor="deletemodal" className="btn">Yay!</label>


                        <button onClick={canCellebtn} className='btn btn-ghost'>cancel</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmmodal;