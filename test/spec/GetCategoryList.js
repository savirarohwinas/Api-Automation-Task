const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const { getAccessToken } = require('../../data/Auth');

const baseUrl = 'https://kasir-api.belajarqa.com';
const kasiraja = supertest(baseUrl);

describe('API Tests KasirAja - Get List Category', () => {
  let accessToken;

  before(async () => {
    accessToken = await getAccessToken();
  });

  // Fungsi untuk mendapatkan daftar kategori
  async function getCategoryList() {
    const response = await kasiraja.get('/categories')
      .set('Authorization', `Bearer ${accessToken}`);

    return response;
  }

  describe('Positive Case (+) - Menampilkan list Kategori', () => {
    it('sukses menampilkan list kategori', async () => {
      const response = await getCategoryList();

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.data).to.have.property('categories');
      expect(response.body.data.categories).to.be.an('array');
      expect(response.body.data.meta).to.be.an('object');
      console.log(JSON.stringify(response.body, null, 2));
    });
  });

  describe('Negative case (-) - Gagal menampilkan kategori tanpa adanya token', () => {
    it('Gagal menampilkan kategori dengan akses token yang tidak valid', async () => {
      const response = await kasiraja.get('/categories');

      expect(response.status).to.equal(401);
      expect(response.body.error).to.equal('Unauthorized');
      expect(response.body.message).to.equal('Missing authentication');
      console.log(response.body);
    });
  });
});
