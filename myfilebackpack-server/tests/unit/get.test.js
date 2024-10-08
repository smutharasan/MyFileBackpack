// tests/unit/get.test.js

const request = require('supertest');

const app = require('../../src/app');

describe('GET /v1/myfilebackpack', () => {
  // If the request is missing the Authorization header, it should be forbidden
  test('unauthenticated requests are denied', () =>
    request(app).get('/v1/myfilebackpack').expect(401));

  // If the wrong username/password pair are used (no such user), it should be forbidden
  test('incorrect credentials are denied', () =>
    request(app)
      .get('/v1/myfilebackpack')
      .auth('invalid@email.com', 'incorrect_password')
      .expect(401));

  // Using a valid username/password pair should give a success result with a .MyFileBackpackData array
  test('authenticated users get a myfilebackpack array', async () => {
    const res = await request(app).get('/v1/myfilebackpack').auth('user1@email.com', 'password1');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(Array.isArray(res.body.myFileBackpackData)).toBe(true);
  });

  // TODO: we'll need to add tests to check the contents of the MyFileBackpackData array later
});
