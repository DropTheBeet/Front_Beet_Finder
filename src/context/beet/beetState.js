import React, { useReducer } from 'react'
import axios from 'axios';
import BeetContext from './beetContext';
import BeetReducer from './beetReducer';

import {
    SEARCH_IMAGES,
    SET_LOADING,
    CLEAR_IMAGES,
    GET_IMAGE,
    SELECT_IMAGES,
    SET_SEARCH_TAGS,
    FALSE_LOADING,
    CLEAR_IMAGE,
    SET_CLICK_TYPE_R,
    SET_CLICK_TYPE_S,
    CLEAR_CLICK_TYPE,
    CLEAR_TAG_LIST
} from '../types';


const BeetState = props => {
    const initialState = {
        images:[],

        image: {},

        tag_list: [],

        search_tags:[],

        loading: false,

        selected_files: null,

        click_type: {}
    }

    const [state, dispatch] = useReducer(BeetReducer, initialState);

    // Search Users# tags,  tag_no 리스트

    // Get User
    const getHomeImages = async(formData) => {
        setLoading();

        console.log(formData)

        const config = {
            headers: {
            'Content-Type' : 'application/json'
            }
        }
    try{
        const res = await axios.post('/home', formData, config);
        console.log(res)

        dispatch({
            type: SEARCH_IMAGES,
            payload: res.data
        });
    } catch {
        dispatch({
            type: CLEAR_IMAGES,            
        })
    }
}

    const getPublicImages = async(formData) => {
        setLoading();

        console.log(formData)

        const config = {
            headers: {
              'Content-Type' : 'application/json'
            }
          }
        try{
            const res = await axios.post('/public', formData, config);
            console.log(res)

            dispatch({
                type: SEARCH_IMAGES,
                payload: res.data
            });
        } catch {
            dispatch({
                type: CLEAR_IMAGES,            
            })
        }
    }


    const getFavoriteImages = async(formData) => {
        setLoading();

        console.log(formData)

        const config = {
            headers: {
              'Content-Type' : 'application/json'
            }
          }
        try{
            const res = await axios.post('/likeimage', formData, config);
            console.log(res)

            dispatch({
                type: SEARCH_IMAGES,
                payload: res.data
            });
        } catch {
            dispatch({
                type: CLEAR_IMAGES,            
            })
        }
    }

    const likeApi = (dataImgNo, like, setLike) => {
        axios
          .get("/like/" + dataImgNo)
          .then((res) => {console.log(33333)
            console.log(res.data.like);
            if (res.data.like === 1) 
            {
                  setLike(1);
                  console.log(123123);
            }
              else if(res.data.like === 0) 
            {
                setLike(0);
                console.log(321321);
            }
            
            console.log(like);
            console.log(2);
          })
          .catch((reason) => {
            console.error(reason);
          });
      };

    const getImage = async(setUrl,setUser,setLike,setThumb,img_no1,click_type) => {
       
        const config = {
            headers: {
              'Content-Type' : 'application/json'
            }
          }
 
        try{
            axios.post('/home/detail', { img_no: img_no1, type: click_type.type } , config).then((res) => {
                console.log(res)
                const data1 = res.data.img_info;
                console.log(data1);
                setUrl(data1.img_url);
                setUser(data1.user_id);
                setLike(res.data.like_or_unlike);
                setThumb(data1.profile_thum);


                dispatch({
                    type: GET_IMAGE,
                    payload: res.data
                });
             })
            } catch {
            dispatch({
                type: CLEAR_IMAGE,     
            })
        }
    }
    // const getImage = async(formData) => {
    //     console.log(formData)
    //     const config = {
    //         headers: {
    //           'Content-Type' : 'application/json'
    //         }
    //       }
 
    //     try{
    //         const res = await axios.post('/home/detail', formData, config);
    //         console.log(res)

    //         dispatch({
    //             type: GET_IMAGE,
    //             payload: res.data
    //         });
    //     } catch {
    //         dispatch({
    //             type: CLEAR_IMAGE,     
    //         })
    //     }
    // }

    // const getImage = async(formData) => {
    //     console.log(formData)
    //     const config = {
    //         headers: {
    //           'Content-Type' : 'application/json'
    //         }
    //       }
 
    //     try{
    //         const res = await axios.post('/home/detail', formData, config);
    //         console.log(res)
    //         const data1 = res.data.img_info;
    //         console.log(data1);


    //         dispatch({
    //             type: GET_IMAGE,
    //             payload: res.data
    //         });
    //     } catch {
    //         dispatch({
    //             type: CLEAR_IMAGE,     
    //         })
    //     }
    // }



    const fileHandler = (e) => {
        
        setLoading();
        
        const files = e.target.files;

        dispatch({
            type : SELECT_IMAGES,
            payload : files
        })
    }





 // Clear Users
    const clearImages = () => dispatch({ type: CLEAR_IMAGES})

    // Set Loading
    const setLoading = () => dispatch( { type: SET_LOADING})

    const setLoadingFalser = () => dispatch( { type: FALSE_LOADING})

    // Set SearchTags
    const setSearchTags = (props) =>  dispatch( { type: SET_SEARCH_TAGS, payload: props})
    
    // Function selector

    const setClickTypeR = () => dispatch( {type : SET_CLICK_TYPE_R})
    const setClickTypeS = () => dispatch( {type : SET_CLICK_TYPE_S})
    const clearClickType = () => dispatch( {type : CLEAR_CLICK_TYPE})
    
    

    return (
        <BeetContext.Provider
            value = {{
                images: state.images,
                image: state.image,
                tag_list: state.tag_list,
                search_tags : state.search_tags,
                selected_files : state.selected_files,
                click_type : state.click_type,
                clearImages,
                getHomeImages,
                setSearchTags,
                getPublicImages,
                getFavoriteImages,
                getImage,
                fileHandler,
                setLoading,
                setLoadingFalser,
                setClickTypeR,
                setClickTypeS,
                clearClickType,
                likeApi
            }}
            >
                {props.children}
        </BeetContext.Provider>
        );
    };

export default BeetState;


// {'tag_no': 23, 'cate_no': 4, 'tag': 'zebra', 'tag_han': '얼룩말', 'major_no': 3, 'c_major': '동물', 'middle_no': 4, 'c_middle': '동물'},
//          {'tag_no': 24, 'cate_no': 4, 'tag': 'giraffe', 'tag_han': '기린', 'major_no': 3, 'c_major': '동물', 'middle_no': 4, 'c_middle': '동물'},
//           {'tag_no': 47, 'cate_no': 8, 'tag': 'banana', 'tag_han': '바나나', 'major_no': 4, 'c_major': '음식', 'middle_no': 8, 'c_middle': '음식'},
//            {'tag_no': 48, 'cate_no': 8, 'tag': 'apple', 'tag_han': '사과', 'major_no': 4, 'c_major': '음식', 'middle_no': 8, 'c_middle': '음식'},
//             {'tag_no': 50, 'cate_no': 8, 'tag': 'orange', 'tag_han': '오렌지', 'major_no': 4, 'c_major': '음식', 'middle_no': 8, 'c_middle': '음식'}