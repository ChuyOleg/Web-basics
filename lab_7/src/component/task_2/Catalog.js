import React, { useEffect, useState } from 'react';
import GoodsCards from './GoodsCard';
import c from './Catalog.module.css';

const Catalog = () => {
    const [fruits, setFruit] = useState([]);

    useEffect(() => {
        setFruit(require('./fruits.json').fruits)
    }, []);

    return (
        <div className={c.catalog}>
            <h3 className={c.fruitsTitle}>Fruits</h3>
            <div className={c.container}>
                {fruits.map((fruit) => (
                    <GoodsCards key={fruit.id} props={fruit} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
