// import React, { useEffect, Fragment, useContext} from 'react';
// import Spinner from '../layout/Spinner';
// import { Link } from 'react-router-dom';
// import BeetContext from '../../context/beet/beetContext';

// import styled from "styled-components";
// import Overlay from "react-overlay-component";

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
// // 이미지 데이터 불러오는데 까지는 이상없음
// // import Overlay from "react-overlay-component";
// const Image = ({ match }) => {
//     const beetContext = useContext(BeetContext);
//     const { getImage, loading, image, like_or_unlike, click_type} = beetContext;
    
//   const [isOpen, setOverlay] = useState(true);
//   const closeOverlay = () => setOverlay(false);

//     useEffect(() => {
//         console.log(click_type)
//         getImage({ "img_no":match.params.img_no, "type" : click_type})
//     }, [])

//     const { img_info , reg_date } = image

//     const onClickLike = (event) => {
  
//         const dataImgNo = event.target.parentNode.getAttribute("data-img-no");
//         //if (dataImgNo) likeApi(dataImgNo, like, setLike);
//       };



//     return (
//         <div>
//             <Overlay
//         style={{ maxWidth: "800px" }}
//         configs={configs}
//         isOpen={isOpen}
//         closeOverlay={closeOverlay}
//       >
//         <div>
//           <DetailHeader>
//             <div style={{ display: "flex" }}>
//               <Thum bgUrl={`${img_info.profile_thum}`} />
//               <List>
//                 <Item>{img_info.user_id}</Item>
//                 <Item>{reg_date.slice(0, 17)}</Item>
//               </List>
//             </div>
//             <GiBeet
//               onClick={onClickLike}
//               color={like ? "#F04F53" : "black"}
//               size="50px"
//               data-img-no={match.params.img_no}
//             />
//           </DetailHeader>
//           <ImageDetail bgUrl={`${img_info_url}`}></ImageDetail>
//         </div>
//       </Overlay>
//         </div>
//     )
// }

// export default Image


import React, { useEffect, Fragment, useContext} from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import BeetContext from '../../context/beet/beetContext';

// 이미지 데이터 불러오는데 까지는 이상없음
// import Overlay from "react-overlay-component";
const Image = ({ match }) => {
    const beetContext = useContext(BeetContext);
    const { getImage, loading, image, like_or_unlike, click_type} = beetContext;

    useEffect(() => {
        console.log(click_type)
        getImage({ "img_no":match.params.img_no, "type" : click_type})
    }, [])

    const { img_info } = image




    return (
        <div>
            <div>Hello</div>
        </div>
    )
}

export default Image


// props.params.img_




// const Image = (props) => {




    
//     const {
//         filename,
//         img_no,
//         img_url,
//         like,
//         profile_thum,
//         reg_date,
//         user_id,
//         } = image;

//     if (loading) 
//     {return 
//     <Spinner />
//     }else {
//      return
//      <Fragment>
//          <div>{console.log(props)}</div>
//          <div>{console.log(image)}</div>
//      </Fragment>
//     }
// }
// export default Image;

//         <Fragment>
//  <Container
//       onClick={() => {
//         setOverlay(true);
//         DetailImg(img_no);
//       }}
//     >
//     <Button
//       onClick={() => onClickDelete(img_no)}
//     />
//       <Overlay
//         style={{ maxWidth: "800px" }}
//         configs={configs}
//         isOpen={isOpen}
//         closeOverlay={closeOverlay}
//       >
//         <div>
//           <DetailHeader>
//             <div style={{ display: "flex" }}>
//               <Thum bgUrl={`${thumbUrl}`} />
//               <List>
//                 <Item>{imgUser}</Item>
//                 <Item>{reg_date.slice(0, 17)}</Item>
//               </List>
//             </div>
//             <GiBeet
//               onClick={onClickLike}
//               color={like ? "#F04F53" : "black"}
//               size="50px"
//               data-img-no={img_no}
//             />
//           </DetailHeader>
//           <ImageDetail bgUrl={`${urlImg}`}></ImageDetail>
//         </div>
//       </Overlay>
//       <ImageContainer>
//         <Image bgUrl={imageUrl && `${imageUrl}`}></Image>
//       </ImageContainer>
//     </Container>
//         </Fragment>

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
// `;

// const ImageContainer = styled.div`
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

// const Button = styled.button`
// `