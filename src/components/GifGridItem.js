import React from 'react';

export const GifGridItem = ({id, title, url}) => {
    // console.log({id, title, url});
    return (
        <div className="card animate___animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;
