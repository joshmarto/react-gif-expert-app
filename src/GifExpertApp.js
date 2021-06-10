import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Star Wars']);
    /*const handleAdd = () => {
        // setCategories(['HunterXHunter', ...categories]);
        setCategories(cats => [...cats, 'HunterXHunter']);
    }*/
    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Add</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;
