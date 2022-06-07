import React from 'react';

const Card = ({ country }) => {
    return (
        <li className='card'>
            <img
                src={country.flags.svg}
                alt={"flag of " + country.name.common}
            />
            <div className="infos">
                <h2>{"Name: " + country.name.common}</h2>
                <h4>{"Capital: " + country.capital}</h4>
                <p>{"Pop: " + country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;