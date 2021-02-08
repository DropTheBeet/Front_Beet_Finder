import React, { useContext, useEffect } from 'react';
import ImageItem from './ImageItem';
import Spinner from '../layout/Spinner';
import BeetContext from '../../context/beet/beetContext';


const Images = ({ path }) => {
    const beetContext = useContext(BeetContext);

    const { loading, images, getFavoriteImages} = beetContext;


    useEffect(() => {
        if(path ==="Favorite"){
            getFavoriteImages()
        }
    }, [])

    
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style= {imageStyle}>
                {images.map(image => (
                    <ImageItem key={image.img_no} image={image} />
                ))}
            </div>
        );
    }


}

const imageStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: ''
}

export default Images
