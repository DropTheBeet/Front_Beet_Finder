import React, { useContext, Fragment } from 'react'
import BeetContext from '../../context/beet/beetContext'

const SearchItem = ( { key, tag} ) => {

    const beetContext = useContext(BeetContext);
    const { search_tags, setSearchTags } = beetContext 

    return (
        <Fragment>
            <label className="label" >        {tag.tag_han}   
            <input  
                type="checkbox"
                onChange= { e => {
                    let checked = e.target.checked
                    setSearchTags(
                        search_tags.map( data =>{
                            if( tag.tag_no === data.tag_no)
                                data.checked = checked
                            return data;
                        })
                    )
                }}
             />
            </label>
        </Fragment>
    )
}

export default SearchItem
