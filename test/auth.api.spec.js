const path = require('path');
const request  = require("supertest");
const app = require ("../app/index");
const {faker} = require ('@faker-js/faker');
require ("dotenv").config();

beforeAll((done) => {
  const newUser = {
        firstName : "Imam",
        lastName : "Taufiq",
        email: 'zaki@gmail.com',
        password : "jaki1234",
        username : "Imam",
        country_code : "+62",
        phone_number : "01234567877",
        address : "Kalimantan",
        role : 2
  };
 request(app)
   .post('/api/auth/register')
   .send(newUser)
   .end((err, response) => {
     tokenEmail = response.body.tokenVerifikasi; 
     done();
   });
});

describe("API Register", () => {
    it("success register", async () => {
      const users = {
        firstName : "Imam",
        lastName : "Taufiq",
        email: faker.internet.email(),
        password : "123456789",
        username : "Imam",
        country_code : "+62",
        phone_number : "01234567877",
        address : "Kalimantan",
        role : 2
      };
      const response = await request(app).post('/api/auth/register').send(users);
      expect(response.statusCode).toBe(201);
    });
  });
  
  describe("API Login", () => {
    it("success login", async () => {
      const users = {
        email : "imam@gmail.com",
        password : "123456789",
      };
      const response = await request(app).post('/api/auth/login').send(users);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("API allUsers", () => {
    it("success allUsers", async () => {
      const response = await request(app).get('/api/auth/allusers');
      expect(response.statusCode).toBe(200);
    });
  });
  describe("API Profile", () => {
    var auth = {};
    beforeAll(loginUser(auth));

    it("success profile", async () => {
      const users = {
        id : 1
      };
      const response = await request(app).get('/api/auth/profile').set('Authorization', auth.token).send(users);
      expect(response.statusCode).toBe(200);
    });
  });

  // describe("API Update Users", () => {
  //   it("update by id Update Users", async () => {
  //     const picture = path.resolve(__dirname, './person.jpg');
  //     const response = await request(app).put('/api/auth/profile').field('id', 2).attach('image', picture);
  //     expect(response.statusCode).toBe(200);
  //   });
  // });


  function loginUser(auth) {
    return function (done) {
      request(app)
        .post('/api/auth/login')
        .send({
          email: 'zaki@gmail.com',
          password: 'jaki1234',
        })
        .expect(200)
        .end(onResponse);
  
      function onResponse(err, res) {
        auth.token = res.body.token;
        return done();
      }
    };
  }
 
 describe('API update profile', () => {
  var auth = {};
  beforeAll(loginUser(auth));

it('profil berhasil diubah', async () => {
const response = await request(app)
  .put('/api/auth/update-profile')
  .set('Authorization', auth.token)
  .send({ fullName: 'stringingg' });
expect(response.statusCode).toBe(200);
});
});




  
