import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import BeetContext from '../../context/beet/beetContext';
import styled from "styled-components";
import Overlay from "react-overlay-component";
import { GiBeet } from "react-icons/gi";
const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  content: url("${({ bgUrl }) => bgUrl}");
  height: auto;
  width: 300px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
  padding : 7px;
  
`;

const ImageContainer = styled.div`
  background-color : gray;
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.5;
    }
  }
`;
const ImageDetail = styled.img`
  content: url("${({ bgUrl }) => bgUrl}");
  height: 100%;
  width: 550px;
  object-fit: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const DetailHeader = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 5px;
  justify-content: space-between;
  padding-right: 25px;
`;

const Thum = styled.img`
  background-image: url("${({ bgUrl }) => bgUrl}");

  background-size: cover;
  height: 60px;
  width: 60px;
  border-radius: 70%;

  overflow: hidden;
  object-fit: cover;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  height: 50px;
  font-size: 23px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 10px;
`;
const ImageItem = ({image : { img_no, thum_url, reg_date }, path}) => {
    const beetContext = useContext(BeetContext);
    const { getImage, loading, image, like_or_unlike, click_type,likeApi} = beetContext;
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const [urlImg, setUrl] = useState();
    const [imgUser, setUser] = useState();
    const [like, setLike] = useState();
    const [thumbUrl, setThumb] = useState();

    const onClickLike = (event) => {
  
        const dataImgNo = event.target.parentNode.getAttribute("data-img-no");
        if (dataImgNo) 
        {console.log(like);
            console.log(1);
        likeApi(dataImgNo, like, setLike);}
      };
    
      const DetailImg = (img_no) => {

        getImage(setUrl,setUser,setLike,setThumb,img_no, click_type)
      }
    


    const configs = {
        animate: false,
        // clickDismiss: false,
        // escapeDismiss: false,
        // focusOutline: false,
      };

    return (
        <Container
        onClick={() => {
          setOverlay(true);
          DetailImg(img_no);
        }}
      >
        <Overlay
          style={{ maxWidth: "800px" }}
          configs={configs}
          isOpen={isOpen}
          closeOverlay={closeOverlay}
        >
          <div>
            <DetailHeader>
              <div style={{ display: "flex" }}>
                <Thum bgUrl={`${thumbUrl}`} />
                <List>
                  <Item>{imgUser}</Item>
                  <Item>{reg_date.slice(0, 17)}</Item>
                </List>
              </div>
              <GiBeet
                onClick={onClickLike}
                color={like ? "#F04F53" : "black"}
                size="50px"
                data-img-no={img_no}
              />
            </DetailHeader>
            <ImageDetail bgUrl={`${urlImg}`}></ImageDetail>
          </div>
        </Overlay>
       <div className="card text-center"> 
            
                <img src={thum_url} 
                alt={img_no}
                className="round-img"
                style={{ width: '270px'}}/>
            
        </div>
        </Container>
    )

}

ImageItem.propTypes = {
    image:PropTypes.object.isRequired,
}


//inline style 사용시에는 {{}}  두개의 괄호를 사용하여야 한다
export default ImageItem

// import BeetContext from '../../context/beet/beetContext';
// import styled from "styled-components";
// import Overlay from "react-overlay-component";
// import { GiBeet } from "react-icons/gi";
// import { useContext, useState } from 'react';
// import { prettyDOM } from '@testing-library/react';
// import PropTypes from 'prop-types'

// const Container = styled.div`
//   font-size: 12px;
// `;

// const Image = styled.div`
//   content: url("${({ bgUrl }) => bgUrl}");
//   height: auto;
//   width: 300px;
//   background-size: cover;
//   border-radius: 4px;
//   background-position: center center;
//   transition: opacity 0.1s linear;
//   padding : 7px;
  
// `;

// const ImageContainer = styled.div`
//   background-color : gray;
//   margin-bottom: 5px;
//   position: relative;
//   &:hover {
//     ${Image} {
//       opacity: 0.5;
//     }
//   }
// `;
// const ImageDetail = styled.img`
//   content: url("${({ bgUrl }) => bgUrl}");
//   height: 100%;
//   width: 550px;
//   object-fit: cover;
//   border-radius: 4px;
//   background-position: center center;
//   transition: opacity 0.1s linear;
// `;

// const DetailHeader = styled.div`
//   display: flex;
//   align-content: center;
//   margin-bottom: 5px;
//   justify-content: space-between;
//   padding-right: 25px;
// `;

// const Thum = styled.img`
//   background-image: url("${({ bgUrl }) => bgUrl}");

//   background-size: cover;
//   height: 60px;
//   width: 60px;
//   border-radius: 70%;

//   overflow: hidden;
//   object-fit: cover;
// `;

// const List = styled.ul`
//   display: flex;
// `;

// const Item = styled.li`
//   height: 50px;
//   font-size: 23px;
//   font-weight: bold;
//   color: black;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   margin-left: 15px;
//   margin-right: 10px;
// `;
// const ImageItem = ({image : { img_no, thum_url, reg_date }, path}) => {
//     const beetContext = useContext(BeetContext);
//     const { getImage, loading, image, like_or_unlike, click_type} = beetContext;
//     const [isOpen, setOverlay] = useState(false);
//     const closeOverlay = () => setOverlay(false);

//     const  {img_info : {urlImg, imgUser, like, thumbUrl}}  = image

//     const onClickLike = (event) => {
  
//         const dataImgNo = event.target.parentNode.getAttribute("data-img-no");
//         // if (dataImgNo) likeApi(dataImgNo, like, setLike);
//       };
    
//       const DetailImg = (img_no) => {
//           const formData={ "img_no": img_no, "type" : click_type};
//         getImage({ "img_no": img_no, "type" : click_type})
//       }
    


//     const configs = {
//         animate: false,
//         // clickDismiss: false,
//         // escapeDismiss: false,
//         // focusOutline: false,
//       };

//     return (
//         <Container
//         onClick={() => {
//           setOverlay(true);
//           DetailImg(img_no);
//         }}
//       >
//         <Overlay
//           style={{ maxWidth: "800px" }}
//           configs={configs}
//           isOpen={isOpen}
//           closeOverlay={closeOverlay}
//         >
//           <div>
//             <DetailHeader>
//               <div style={{ display: "flex" }}>
//                 <Thum bgUrl={`${thumbUrl}`} />
//                 <List>
//                   <Item>{imgUser}</Item>
//                   <Item>{reg_date.slice(0, 17)}</Item>
//                 </List>
//               </div>
//               <GiBeet
//                 onClick={onClickLike}
//                 color={like ? "#F04F53" : "black"}
//                 size="50px"
//                 data-img-no={img_no}
//               />
//             </DetailHeader>
//             <ImageDetail bgUrl={`${urlImg}`}></ImageDetail>
//           </div>
//         </Overlay>
//        <div className="card text-center"> 
            
//                 <img src={thum_url} 
//                 alt={img_no}
//                 className="round-img"
//                 style={{ width: '270px'}}/>
            
//         </div>
//         </Container>
//     )

// }

// ImageItem.propTypes = {
//     image:PropTypes.object.isRequired,
// }


// //inline style 사용시에는 {{}}  두개의 괄호를 사용하여야 한다
// export default ImageItem



// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import BeetContext from '../../context/beet/beetContext';

// const ImageItem = ({image : { img_no, thum_url, reg_date }, path}) => {
//     const beetContext = useContext(BeetContext);

//     return (
//         <div className="card text-center"> 
//             <Link to={`/image/${img_no}`} className="btn btn-dark btn-sm my-1">
//                 <img src={thum_url} 
//                 alt={img_no}
//                 className="round-img"
//                 style={{ width: '270px'}}/>
//             </Link>
//         </div>
//     )

// }

// ImageItem.propTypes = {
//     image:PropTypes.object.isRequired,
// }


// //inline style 사용시에는 {{}}  두개의 괄호를 사용하여야 한다
// export default ImageItem
