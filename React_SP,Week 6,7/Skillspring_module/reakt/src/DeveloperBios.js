import React from 'react';
import{PropTypes} from 'prop-types';

const DeveloperBios = (props) => {
  return (
    <div className="card d-inline-block text-dark">
      <div className="card-body">
        <h1 className="card-title"></h1>
        <p className="card-text">
          <span className="bold">Name: Kanish Paul </span>
        </p>

        <p className="card-text">
          <span className="bold">Favorite Language: Java </span>
        </p>
        <p className="card-text">
          <span className="bold">Year Started: 2023 </span>
        </p>
      </div>
    </div>
  );
};

export default DeveloperBios;