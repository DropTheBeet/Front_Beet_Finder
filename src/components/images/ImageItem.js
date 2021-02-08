import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ImageItem = ({image : { img_no, thum_url, reg_date }}) => {

    return (
        <div className="card text-center"> 
            <Link to={`/image/${img_no}`} className="btn btn-dark btn-sm my-1">
                <img src={thum_url} 
                alt={img_no}
                className="round-img"
                style={{ width: '270px'}}/>
            </Link>
        </div>
    )

}

ImageItem.propTypes = {
    image:PropTypes.object.isRequired,
}


//inline style 사용시에는 {{}}  두개의 괄호를 사용하여야 한다
export default ImageItem
