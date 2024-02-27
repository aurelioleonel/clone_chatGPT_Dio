import axios from 'axios'
const URL_API = 'http://127.0.0.1:5555/api/prompt'
                                      

export const makeRequest = async (message)=>{
    console.log(message)
    const {data} =  await axios.post(URL_API, message)
    return data
}

