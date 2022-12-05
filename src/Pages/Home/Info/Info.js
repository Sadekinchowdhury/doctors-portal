import React from 'react'
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import CardInfo from '../CardInfo/CardInfo'

const Info = () => {
    const CardData = [
        {
            id: 1,
            name: "Opening hours",
            desciption: "Lorem Ipsum is simply dummy text of the pri",
            icon: clock,
            bgclass: 'bg-primary'
        },
        {
            id: 2,
            name: "Opening hours",
            desciption: "Lorem Ipsum is simply dummy text of the pri",
            icon: marker,
            bgclass: 'bg-primary'
        },
        {
            id: 3,
            name: "Opening hours",
            desciption: "Lorem Ipsum is simply dummy text of the pri",
            icon: phone,
            bgclass: 'bg-primary'
        }
    ]

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                CardData.map(cards => <CardInfo
                    key={cards.id}
                    cards={cards}

                >

                </CardInfo>)
            }
        </div>
    );
};

export default Info;