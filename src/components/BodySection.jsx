import React from 'react';
import '../styles/body-section.scss'

const cardData = [
    {
        icon: <i className="bi bi-bag-dash-fill text-white"></i>,
        title: 'Card Title',	 
    },
    {
        icon: <i className="bi bi-bag-dash-fill"></i>,
        title: 'Card Title',	 
    },
    {
        icon: <i className="bi bi-bag-dash-fill"></i>,
        title: 'Card Title',	
    },
    {
        icon: <i className="bi bi-bag-dash-fill"></i>,
        title: 'Card Title',	
    },
    {
        icon: <i className="bi bi-bag-dash-fill"></i>,
        title: 'Card Title',	
    },
    {
        icon: <i class="bi bi-bag-dash-fill"></i>,
        title: 'Card Title',	
    },
]

const BodySection = () => {
  return (
    <div className='row g-0 m-5'>
        <p>Our Services</p>
        {cardData.map((card, index) => (
            <div className='col'>
                <CardComponent key={index} card={card} />
            </div>
        ))}
         <p>Our Services</p>
        {cardData.map((card, index) => (
            <div className='col'>
                <CardComponent key={index} card={card} />
            </div>
        ))}
    </div>
  )
}

export default BodySection

const CardComponent = (props) => {
    const {key ,card} = props;
    return(
        <div className="card" key={key}>
            <div className="card-header">
                <span>{card?.icon}</span>
            </div>
            <div className="card-body">
                <p>
                    {card?.title}
                </p>
            </div>
        </div>
    )
}
