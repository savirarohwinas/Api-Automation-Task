const supertest = require('supertest');

// Ganti dengan URL yang sesuai
const baseUrl = 'https://kasir-api.belajarqa.com';
const kasiraja = supertest(baseUrl);

let accessToken;

async function getAccessToken() {
  if (!accessToken) {
    const loginResponse = await kasiraja.post('/authentications')
      .send({
        email: "savirarohwina47@mail.com",
        password: "123"
      });
    accessToken = loginResponse.body.data.accessToken;
  }
  return accessToken;
}

module.exports = {
  getAccessToken
};

