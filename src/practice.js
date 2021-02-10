const BeetState = props => {
    const initialState = {
        images: [
            {
              "img_no": 8008,
              "reg_date": "Mon, 01 Feb 2021 17:23:16 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-02-01 08:23:15.671852test_zebra_bear_.jpg"
            },
            {
              "img_no": 8007,
              "reg_date": "Fri, 29 Jan 2021 16:14:23 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-01-29 07:14:22.022277KakaoTalk_20210126_143135209.png"
            },
            {
              "img_no": 8006,
              "reg_date": "Fri, 29 Jan 2021 16:14:19 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-01-29 07:14:18.534769KakaoTalk_20210126_143135054.png"
            },
            {
              "img_no": 8005,
              "reg_date": "Fri, 29 Jan 2021 16:14:16 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-01-29 07:14:15.060434KakaoTalk_20210126_143134718.png"
            },
            {
              "img_no": 8004,
              "reg_date": "Fri, 29 Jan 2021 16:14:13 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-01-29 07:14:11.590848KakaoTalk_20210126_143134532.png"
            },
            {
              "img_no": 8003,
              "reg_date": "Fri, 29 Jan 2021 16:14:09 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-01-29 07:14:08.055081KakaoTalk_20210126_143134144.png"
            },
            {
              "img_no": 8002,
              "reg_date": "Fri, 29 Jan 2021 16:14:06 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-01-29 07:14:04.507721KakaoTalk_20210126_143134033.png"
            },
            {
              "img_no": 8001,
              "reg_date": "Fri, 29 Jan 2021 16:14:02 GMT",
              "thum_url": "https://s3.ap-northeast-2.amazonaws.com/beetbitbucket/thum_2021-01-29 07:14:00.505728KakaoTalk_20210126_143133528.png"
            }
          ],
        detail: {  "img_info": {
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
        search_tags: [{'tag_no': 23, 'cate_no': 4, 'tag': 'zebra', 'tag_han': '얼룩말', 'major_no': 3, 'c_major': '동물', 'middle_no': 4, 'c_middle': '동물'},
         {'tag_no': 24, 'cate_no': 4, 'tag': 'giraffe', 'tag_han': '기린', 'major_no': 3, 'c_major': '동물', 'middle_no': 4, 'c_middle': '동물'},
          {'tag_no': 47, 'cate_no': 8, 'tag': 'banana', 'tag_han': '바나나', 'major_no': 4, 'c_major': '음식', 'middle_no': 8, 'c_middle': '음식'},
           {'tag_no': 48, 'cate_no': 8, 'tag': 'apple', 'tag_han': '사과', 'major_no': 4, 'c_major': '음식', 'middle_no': 8, 'c_middle': '음식'},
            {'tag_no': 50, 'cate_no': 8, 'tag': 'orange', 'tag_han': '오렌지', 'major_no': 4, 'c_major': '음식', 'middle_no': 8, 'c_middle': '음식'}],
        
        loading: false
    }

    const [state, dispatch] = useReducer(BeetReducer, initialState);

    // Search Users# tags,  tag_no 리스트

    return (
        <BeetContext.Provider
            value = {{
                images: state.images,
                detail: state.detail,
                search_tags: state.search_tags,
                loading: state.loading,

            }}
            >
                {props.children}
        </BeetContext.Provider>
        );
    };



    const config = {
        headers: {
          'Content-Type' : 'application/json'
        }
      }