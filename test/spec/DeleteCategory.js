const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const { getAccessToken } = require('../../data/Auth');
const sharedId = require('../../data/categoryId'); 

const baseUrl = 'https://kasir-api.belajarqa.com';
const kasiraja = supertest(baseUrl);

describe('API Tests - Delete Category', () => {
  let accessToken;

  before(async () => {
    accessToken = await getAccessToken();
  });

  // Fungsi untuk menghapus kategori
  async function deleteCategory(categoryId) {
    const response = await kasiraja.delete(`/categories/${categoryId}`)
      .set('Authorization', `Bearer ${accessToken}`);

    return response;
  }

  describe('Positive Case (+) - Delete Existing Category', () => {
    it('should successfully delete an existing category', async () => {
      await waitForCategoryIdToBeSet(sharedId.categoryId);

      const response = await deleteCategory(sharedId.categoryId);

      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal('success');
      expect(response.body.data).to.deep.equal({});
      console.log(response.body); 
    });
  });

  describe('Negative Case (-) - Delete Non-existent Category', () => {
    it('should fail to delete a non-existent category', async () => {
      const invalidCategoryId = 12345567789; // Contoh ID yang tidak valid
      const response = await deleteCategory(invalidCategoryId);

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
