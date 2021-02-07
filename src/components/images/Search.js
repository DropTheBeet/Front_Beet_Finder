import React, {useState, useContext} from 'react';
import BeetContext from '../../context/beet/beetContext'
import AlertiContext from '../../context/alerti/alertiContext'


const Search = () => {
    const beetContext = useContext(BeetContext);
    const alertiContext = useContext(AlertiContext);

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            alertiContext.setAlerti('Please enter something', 'light');
        } else {
            beetContext.searchImages(text);
            setText('');
        }
    } 

    const onChange = (e) =>  setText(e.target.value)


    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text"
                    name="text"
                    placeholder="Search Images..." 
                    value={text}
                    onChange={onChange}  />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block" />
            </form>
            {beetContext.images.length > 0 && (
            <button className="btn btn-light btn-block" onClick={beetContext.clearImages}>
                Clear
            </button>)}
        </div>
    )
    
}


export default Search
