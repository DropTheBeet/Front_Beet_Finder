import React, {Fragment, useContext} from 'react'
import BeetContext from '../../context/beet/beetContext';



const Upload = () => {

    const beetContext = useContext(BeetContext)
    const { fileHandler } = beetContext  
    
    
    return (
        <Fragment>
            <h1>About This App</h1>
            <p>App to search your pictures</p>
            <p>Version: 1.0.0</p><br></br>
            <p>This application analyzes the pictures you uploaded and checks what objects are there. Based on this, this application recommends you photos uploaded by other people you might like.</p>
            <p>Tap the button below to specify the file, then tap the camera image above to start the upload.</p>
            <br></br>
            <p>이 어플리케이션은 당신이 업로드한 사진을 분석하여 어떤 객체가 있는지 확인합니다. 이를 바탕으로 이 어플리케이션은 당신이 좋아할 만한 다른사람들이 업로드한 사진을 당신에게 추천해 줍니다. </p>
            <p> 아래 버튼을 눌러서 파일을 지정한 후  위에 있는 사진기 이미지를 누르면 업로드가 시작 됩니다.</p>


            <input type="file" multiple onChange={fileHandler} />

        </Fragment>
    )
}

export default Upload
