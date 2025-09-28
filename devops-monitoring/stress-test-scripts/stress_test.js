import http from 'k6/http';
import { check } from 'k6';

// Define the URL of your API
const url = 'https://back.caria.tn/api/governorates';

// Define the payload (the body of the POST request)
const payload = JSON.stringify({
  name: "p1",
  price: "1000",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s"
});

// Define the headers for the request
const headers = { 
  'Content-Type': 'application/json'
};

export const options = {
  stages: [
    { duration: '30m', target: 1000 },
  ],
};

export default function () {
  // Send the POST request
  const res = http.get(url, { headers });

  // Log the response status code for each request
  console.log(`Response code: ${res.status}`);

  // Check if the response status is 200 OK
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}


//k6 run stress_test.js
