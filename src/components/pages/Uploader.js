import React from 'react'

const Uploader = () => {
    return (
        <div>
            
        </div>
    )
}

export default Uploader

state = {selectedFiles: null}
  
fileHandler = (e) => {
  const files = e.target.files;
    this.setState({
      selectedFiles: files
  })
};

onClickHandler = (e) => {
  const formData = new FormData();
  formData.append(
    "uploadImages",
    this.state.selectedFiles,
    this.state.selectedFiles.name
  );
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  axios.post(`uploadAPI`, formData, config);
};


class App extends React.Component {

  
    render() {
      return (
        <div className="App">
          <input type="file" multiple onChange={this.fileChangedHandler} />
          <button onClick={this.onClickHandler}>전송하기</button>
        </div>
      );
    }
  }
  
  export default App;