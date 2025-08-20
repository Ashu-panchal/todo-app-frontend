import axios from 'axios';

const host = "https://todo-app-backend-x8jo.onrender.com";

async function callCreateAPI(apiPath, body) {
    return await axios.post(host + apiPath, body)
        .then(response => {
            console.log(`got response from CreateAP ${JSON.stringify(response.data)}`);
            return response.data;
        })
        .catch(error => {
            alert(`api call failed, error: ${error.message}`);
            return null;
        });
}

async function callGetAllAPI(apiPath){
    return await axios.get(host + apiPath)
    .then(response => {
        console.log(`callGetAllAPI call got failed, error ${JSON.stringify(response.data)}`);
        return response.data;
    })
    .catch(error => {
        alert(`callGetAllAPI call got failed, error ${error}`);
    })
}

async function callGetAPI(apiPath, params){
    return await axios.get(host = apiPath, {'params': params})
    .then(response => {
        console.log(`claaGetAPI response ${JSON.stringify(response.data)}`)
        return response.data;
    })
    .catch(error => {
        alert(`callGetAPI call got failed, error ${error}`);
    })
}

async function callUpdateAPI(apiPath, body, params){
    return await axios.patch(host + apiPath, body, {'params': params})
    .then(response =>{
        console.log(`callUpdateAPI response ${JSON.stringify(response.data)}`)
        return response.data;
    })
    .catch(error =>{
        alert(`callUpdateAPI call got failed, error ${error}`)
    })
}

export { callCreateAPI, callGetAllAPI, callGetAPI, callUpdateAPI};
