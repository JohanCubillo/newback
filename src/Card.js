import React from 'react';

const Card = ({ id, title, image, buttonText, buttonHref }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href={buttonHref} target="_blank" rel="noopener noreferrer">
            <img src={image} className="card-img-top" alt={title} />
            <button className="btn btn-primary">{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;