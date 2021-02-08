import React, { useReducer } from 'react'
import axios from 'axios';
import BeetContext from './beetContext';
import BeetReducer from './beetReducer';
import AuthContext from '../auth/authContext'
import {
    SEARCH_IMAGES,
    SET_LOADING,
    CLEAR_IMAGES,
    GET_IMAGE,
    GET_REPOS,
    SET_SEARCH_TAGS
} from '../types';


const BeetState = props => {
    const initialState = {
        images:[],
        image: {  "img_info": {
            "filename": "2021-01-29 07:14:11.590848KakaoTalk_20210126_143134532.png",
            "img_no": 8004,
            "img_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/2021-01-29 07:14:11.590848KakaoTalk_20210126_143134532.png",
            "like": false,
            "profile_thum": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-02-01 08:23:15.671852test_zebra_bear_.jpg",
            "reg_date": "Fri, 29 Jan 2021 16:14:13 GMT",
            "user_id": "f_testid2",
            "user_no": 531
          },
          "like_or_unlike": false,
          "user_no": 531},
        tag_list: [],

        search_tags:[],

        loading: false
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


    const getFavoriteImages = async() => {
        setLoading();

        console.log()

    try{
        const res = await axios.get('/likeimage');
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


    const searchImages = async text => {
        setLoading();

        const res = await axios.get(
        `/home/`);

        dispatch({
            type: SEARCH_IMAGES,
            payload:res.data.items
        })
    }



    
    // Get Repos
    // const getImageRepos = async(imagename) => {
    //     setLoading();
    
    //     const res = await axios.get(
    //       `https://api.github.com/users/${imagename}/repos?per_page=5&sort=created:asc&client_id=
    //       ${githubClientId}&client_secret=${githubClientSecret}`);

    //       dispatch({
    //           type: GET_REPOS,
    //           payload: res.data
    //       })
    //     }

    // Clear Users
    const clearImages = () => dispatch({ type: CLEAR_IMAGES})

    // Set Loading
    const setLoading = () => dispatch( { type: SET_LOADING})

    // Set SearchTags
    const setSearchTags = (props) =>  dispatch( { type: SET_SEARCH_TAGS, payload: props})
    
    // Function selector

    return (
        <BeetContext.Provider
            value = {{
                images: state.images,
                image: state.image,
                tag_list: state.tag_list,
                search_tags : state.search_tags,
                searchImages,
                clearImages,
                getHomeImages,
                setSearchTags,
                getPublicImages,
                getFavoriteImages
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