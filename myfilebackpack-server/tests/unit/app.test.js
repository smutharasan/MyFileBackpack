const request = require('supertest');

const app = require('../../src/app');

describe('GET 404 error for invalid resource', () => {
  // If the resource is missing, 404 error should be returned
  test('resource is missing', () => request(app).get('/test/invalid/route').expect(404));
});
