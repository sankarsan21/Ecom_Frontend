import React from 'react';

const ImageHelper = ({product}) => {

    const imageurl = product ? product.image : `https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg`
    return (
        <div className="rounded border border-success p-2">
            <img src="" 
            style={{maxHeight:"100%", maxWidth:"100%"}}
            alt="Image"
            className="mb-3 rounded"
            />
            <h1>App</h1>
        </div>
    )
}

export default ImageHelper;