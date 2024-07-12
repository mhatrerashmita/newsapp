const fetch = require('node-fetch');

const url = 'https://trains.p.rapidapi.com/';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'd07b1a9b2amshe2e5c37277c2fd5p1b7df6jsn7dfcbe8b9d85',
    'X-RapidAPI-Host': 'trains.p.rapidapi.com'
  },
  body: {search: 'Rajdhani'}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}