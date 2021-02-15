import React, {useState, useContext, useEffect, Fragment} from 'react';
import BeetContext from '../../context/beet/beetContext'
import AlertiContext from '../../context/alerti/alertiContext'
import SearchItem from './SearchItem'



const Search = ({path}) => {
    const beetContext = useContext(BeetContext);
    const alertiContext = useContext(AlertiContext);
    const { tag_list,
        search_tags,
        getHomeImages,
        setSearchTags, 
        getPublicImages,
        getFavoriteImages,
        setClickTypeR,
        setClickTypeS,
        clearClickType
    } = beetContext;


    useEffect ( () => {
        if ( path ==="Public"){
            getPublicImages({ 'tags' : []})
            setClickTypeR()
        } else if (path =="Favorite") {
            getFavoriteImages({ 'tags' : [], 'type' : "L"})
            clearClickType()   
        } else {
            getHomeImages({ 'tags' : []})
            clearClickType()   
        }
        

        
    }, [])

    useEffect ( () => {     
        setSearchTags(tag_list.map((d) => {
            if (((search_tags.filter((search_tag) => search_tag.checked === true )).map( (data) => data.tag_no )).includes(d.tag_no)) {
                return {
                    checked : true,
                    tag_no : d.tag_no,
                    tag : d.tag,
                    tag_han : d.tag_han,
                    c_major : d.c_major
                } 
            } else
            return {
                checked : false,
                tag_no : d.tag_no,
                tag : d.tag,
                tag_han : d.tag_han,
                c_major : d.c_major
            }
        })  )    
    }, [tag_list])


    const onSubmit = (e) => {
        e.preventDefault();
        if( [] === (search_tags.filter( data => data.checked === true)).map(data => data.tag_no)) {
            alertiContext.setAlerti('Please enter something', 'light');
        } else {
            if ( path ==="Public"){
                getPublicImages( { 'tags' :
                (search_tags.filter( data => data.checked === true)).map(data => data.tag_no)});
                setClickTypeS()
            } else if (path === "Home") {
                getHomeImages( { 'tags' :
                (search_tags.filter( data => data.checked === true)).map(data => data.tag_no)});
                clearClickType()
            } else {
                getFavoriteImages( { 'tags' :
                (search_tags.filter( data => data.checked === true)).map(data => data.tag_no),
                'type' : "L" });
                clearClickType()
            }
        }
    } 

    const tagSet =  new Array (new Set(tag_list.map(tag_info => tag_info.c_major)))



    return (
        <Fragment>
            <div className="checkbox-container">
                <div className="checkbox_item">
                {
                tag_list.map(tag_info => (
                    <SearchItem key={tag_info.tag_no} tag={tag_info} path={path} />
                ))}
                </div>
            </div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {beetContext.images.length > 0 && (
            <button className="btn btn-light btn-block" onClick={beetContext.clearImages}>
                Clear
            </button>)}
        </Fragment>
    )
    
}


export default Search


                {/* <input type="text"
                    name="text"
                    placeholder="Search Images..." 
                    value={text}
                    onChange={onChange}  /> */}