import React, { useEffect, Fragment, useContext} from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';
import BeetContext from '../../context/beet/beetContext';

const Image = ({ match }) => {

    const beetContext = useContext(BeetContext);

    const { getImage, loading, image, like_or_unlike} = beetContext;

    useEffect(() => {
        getImage(match.params.img_no)
    }, [])
    
    const {
        filename,
        img_no,
        img_url,
        like,
        profile_thum,
        reg_date,
        user_id,
        } = image;

    if (loading) return <Spinner />;
}
export default Image;

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