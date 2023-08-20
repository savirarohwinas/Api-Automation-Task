const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const { getAccessToken } = require('../../data/Auth');

const baseUrl = 'https://kasir-api.belajarqa.com';
const kasiraja = supertest(baseUrl);
const sharedId = require('../../data/categoryId');

const data = require('../../data/Category.js');
const category1 = data.Add_Categories;
const category2 = data.Add_failed_Categories;

describe('API Tests KasirAja - Add Category', () => {
  let accessToken;

  before(async () => {
    accessToken = await getAccessToken();
  });

  // Fungsi untuk menambahkan kategori
  async function addCategory(categoryData) {
    const response = await kasiraja.post('/categories')
      .set('Authorization', `Bearer ${accessToken}`)
      .send(categoryData);

    return response;
  }

  // Positive case (+) Add kategori baru
  it('Positive Case (+) - Sukses Menambahkan Kategori Baru', async () => {
    const response = await addCategory(category1);

    expect(response.status).to.equal(201);
    expect(response.body.status).to.equal('success');
    expect(response.body.data.name).to.equal(category1.name);
    expect(response.body.name).not.to.be.null;
    expect(response.body.description).not.to.be.null;
    expect(sharedId.categoryId).to.not.be.undefined;
    // Simpan categoryId di variabel
    sharedId.categoryId = response.body.data.categoryId;
  });

  // Negative case (-) Add kategori baru
  it('Negative case (-) - Gagal Menambahkan Kategori baru karena kolom nama kosong', async () => {
    const response = await addCategory(category2);

    expect(response.status).to.equal(400);
    expect(response.body.status).to.equal('fail');
  });
});
