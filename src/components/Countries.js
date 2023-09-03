import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {

    const [datas, setDatas] = useState([])
    const [rangeValue, setRangeValue] = useState(36)
    const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [selectedContinents, setSelectedContinents] = useState(continents)

    useEffect(() => {
        (async () => {
            const res = await axios.get(
                "https://restcountries.com/v3.1/all/"
            )
            setDatas(res.data)
        })();

    }, [])

    const handleCheckBoxChange = (e) => {
        if (e.target.checked)
            setSelectedContinents([...selectedContinents, e.target.id])
        else
            setSelectedContinents(selectedContinents.filter((c) => c !== e.target.id))
    }

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {
                    continents.map((continent) => (
                        <li key={continent}>
                            <input type="checkbox"
                                id={continent}
                                name="continent-box"
                                onChange={handleCheckBoxChange}
                                defaultChecked="true"
                            />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </ul>
            <ul className={"countries-container"}>
                {
                    datas
                        .filter((country) => selectedContinents.includes(country.continents[0]))
                        .sort((c1, c2) => c2.population - c1.population)
                        .slice(0, rangeValue)
                        .map((country, i) => (
                            <Card key={i} country={country} />
                        ))
                }
            </ul>
        </div>
    );
};

export default Countries;
