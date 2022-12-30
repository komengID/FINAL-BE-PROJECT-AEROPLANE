const path = require('path');
const request  = require("supertest");
const app = require ("../app/index");
const {faker} = require ('@faker-js/faker');
require ("dotenv").config();

describe ("Create Passenger", () =>{
    it("Succes Create Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY3MjQyMDc3OX0.jIrZ4_IHaHc4ZCSbRF1SGLEgtREGHXQRvfpXQNV1yUQ";
        const createPassenger = {
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .post("/api/passengers/")
        .set("Authorization", "Bearer " + token)
        .send(createPassenger);
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Passanger", async () =>{
        const token = "";
        const createPassenger = {
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .post("/api/passengers/")
        .set("Authorization", "Bearer " + token)
        .send(createPassenger);
        expect(response.statusCode).toBe(400);
    });
    it("Not Found Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const response = await request(app)
        const createPassenger = {
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        .post("/api/passengers/")
        .set("Authorization", "Bearer " + token)
        .send(createPassenger);
        expect(response.statusCode).toBe(404);
    });
});
describe ("Data All Passengers", () =>{
    it("Success Show Data All Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const response = await request(app)
        .get("/api/passengers/")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Passanger", async () => {
        const token = "";
        const response = await request(app)
          .get("/api/passengers/")
          .set("Authorization", "Bearer " + token)
           expect(response.statusCode).toBe(400);
      });
    
    it("Not Found Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY3MjQyMDc3OX0.jIrZ4_IHaHc4ZCSbRF1SGLEgtREGHXQRvfpXQNV1yUQ";
        const response = await request(app)
        .get("/api/passengers/")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(404);
    });
      
});

describe ("Data Passengers", () =>{
    it("Success Show Data Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const IdPassengers ={
            id:11
        }
        const response = await request(app)
        .get(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Passanger", async () =>{
        const token = "";
        const IdPassengers ={
            id:11
        }
        const response = await request(app)
        .get(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(400);
    });
    it("Not Found Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY3MjQyMDc3OX0.jIrZ4_IHaHc4ZCSbRF1SGLEgtREGHXQRvfpXQNV1yUQ";
        const IdPassengers ={
            id:11
        }
        const response = await request(app)
        .get(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(404);
    });
});
describe ("Data Update Passengers", () =>{
    it("Success Update Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const IdPassengers ={
            id:11
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .put(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Passanger", async () =>{
        const token = "";
        const IdPassengers ={
            id:11
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .put(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(400);
    });
    it("Not Found Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY3MjQyMDc3OX0.jIrZ4_IHaHc4ZCSbRF1SGLEgtREGHXQRvfpXQNV1yUQ";
        const IdPassengers ={
            id:11
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .put(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(400);
    });
    
});

