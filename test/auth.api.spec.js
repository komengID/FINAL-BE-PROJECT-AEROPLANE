const path = require('path');
const request  = require("supertest");
const app = require ("../app/index");
const {faker} = require ('@faker-js/faker');
require ("dotenv").config();


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
    it("Email already registered", async () => {
      const users = {
        firstName : "Imam",
        lastName : "Taufiq",
        email: "selly@gmail.com",
        password : "selly1234",
        username : "Imam",
        country_code : "+62",
        phone_number : "01234567877",
        address : "Kalimantan",
        role : 2
      };
      const response = await request(app).post('/api/auth/register').send(users);
      expect(response.statusCode).toBe(400);
    });
  });
  
  describe("API Login", () => {
    it("success login", async () => {
      const users = {
        email : "selly@gmail.com",
        password : "selly1234",
      };
      const response = await request(app)
      .post('/api/auth/login')
      .send(users);
      expect(response.statusCode).toBe(200);
    });
    it("Wrong Password", async () => {
      const users = {
        email : "selly@gmail.com",
        password : faker.internet.email(),
      };
      const response = await request(app)
      .post('/api/auth/login')
      .send(users);
      expect(response.statusCode).toBe(400);
    });
  });

  describe("API allUsers", () => {
    it("success allUsers", async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
      const response = await request(app)
      .get("/api/auth/allusers")
      .set("Authorization", "Bearer " + token);
      expect(response.statusCode).toBe(200);
    });
    it("Not Found token", async () => {
      const token = "";
      const users = {
        id : 1
      };
      const response = await request(app).get('/api/auth/allusers')
      .set('Authorization', "Bearer " + token)
      .send(users);
      expect(response.statusCode).toBe(401);
    });
  });

  describe("API Profile", () => {
    it("success profile", async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
      const users = {
        id : 1
      };
      const response = await request(app).get('/api/auth/profile')
      .set('Authorization', "Bearer " + token)
      .send(users);
      expect(response.statusCode).toBe(200);
    });
    it("Not Found token", async () => {
      const token = "";
      const users = {
        id : 1
      };
      const response = await request(app).get('/api/auth/profile')
      .set('Authorization', "Bearer " + token)
      .send(users);
      expect(response.statusCode).toBe(401);
    });
  });

  // describe("API Update Users", () => {
  //   it("update by id Update Users", async () => {
  //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
  //     const idProfile ={
  //       id : 11
  //     }
  //     const picture = path.resolve(__dirname, './person.jpg');
  //     const response = await request(app)
  //     .put(`/api/auth/profile/${idProfile.id}`)
  //     .set('Authorization', 'Bearer ' + token)
  //     .attach('photo', picture)
  //     expect(response.statusCode).toBe(200);
  //   });
  // });

  describe('API update profile', () => {
    it('Success Update Profile', async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
      const user = {
        id:2
      }
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
      const image ={
        photo :"img.url"
      }
      const response = await request(app)
        .put(`/api/auth/profile/${user.id}`)
        .set('Authorization', "Bearer " + token + image )
        .send(users);
      expect(response.statusCode).toBe(200);
    });
  it('Not Found Token', async () => {
    const token = "";
    const user = {
      id:2
    }
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
    const image ={
      photo :"img.url"
    }
    const response = await request(app)
      .put(`/api/auth/profile/${user.id}`)
      .set('Authorization', "Bearer " + token + image )
      .send(users);
    expect(response.statusCode).toBe(401);
  });
});