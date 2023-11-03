import axios from "axios"

export const rapidApi = async ()=>{
    try {
        // const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    // maxResults: '50',
    maxResults: '10',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': '45d0a63ed6msh4ccdb90c8fd11c8p17289ajsnd1c1b4d14562',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
    return response.data
} catch (error) {
	console.error(error);
}
    } catch (error) {
        console.log(error);
        
    }
}