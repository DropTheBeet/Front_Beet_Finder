import React, { useContext } from 'react';
import ImageItem from './ImageItem';
import Spinner from '../layout/Spinner';
import BeetContext from '../../context/beet/beetContext';


const Images = () => {
    const beetContext = useContext(BeetContext);

    const { loading, images } = beetContext;
    
    
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style= {imageStyle}>
                {images.map(image => (
                    <ImageItem key={image.id} image={image} />
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
