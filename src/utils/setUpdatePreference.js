import axios from 'axios';

const setUpdatePreference = () => {
    const res = axios.get(`/home/updatepreference`);
    console.log("User preference updating", res)
}

export default setUpdatePreference
