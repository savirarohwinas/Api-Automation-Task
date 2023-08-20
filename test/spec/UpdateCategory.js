const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const { getAccessToken } = require('../../data/Auth');
const sharedId = require('../../data/categoryId'); 

const baseUrl = 'https://kasir-api.belajarqa.com';
const kasiraja = supertest(baseUrl);

const data = require('../../data/Category.js');
const updtcategory = data.Update_Categories;
describe('API Tests KasirAja- Update Category', () => {
  let accessToken;

  before(async () => {
    accessToken = await getAccessToken();
  });

  // Fungsi untuk memperbarui kategori
  async function updateCategory(categoryId, categoryData) {
    const response = await kasiraja.put(`/categories/${categoryId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send(categoryData);

    return response;
  }

  describe('Positive Case (+) - Update Category yang sudah ada', () => {
    it('sukses update category dengan id valid', async () => {
      await waitForCategoryIdToBeSet(sharedId.categoryId); 
      const response = await updateCategory(sharedId.categoryId, updtcategory);

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.data.name).to.equal(updtcategory.name);
      console.log(response.body);
    });
  });

  describe('Negative Case (-) - Update Category dengan id tidak valid', () => {
    it('gagal update category dengan id tidak valid', async () => {
      const invalidCategoryId = 12345567789; // Contoh ID yang tidak valid
      const response = await updateCategory(invalidCategoryId, updtcategory);

      expect(response.status).to.equal(404);
      expect(response.body.status).to.equal('fail');
      console.log(response.body);
    });
  });
});

async function waitForCategoryIdToBeSet(categoryId) {
  while (!categoryId) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}
