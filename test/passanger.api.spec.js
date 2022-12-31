const path = require('path');
const request  = require("supertest");
const app = require ("../app/index");
const {faker} = require ('@faker-js/faker');
require ("dotenv").config();

describe ("Create Passenger", () =>{
    it("Succes Create Passenger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
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
    it("Invalid Token Passenger", async () =>{
        const token = "";
        const createPassenger = {
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .post("/api/passengers/")
        .set("Authorization", "Bearer " + token)
        .send(createPassenger);
        expect(response.statusCode).toBe(401);
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
    it("Not Found Passanger", async () =>{
        const token = "";
        const IdPassengers ={
            id:99999999
        }
        const response = await request(app)
        .get(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(401);
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
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const IdPassengers ={
            id:1
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .put(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(403);
    });
    it("Not Found Passanger", async () =>{
        const token = "";
        const IdPassengers ={
            id:99999999999
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .put(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(401);
    });
    
});
describe ("Delete Passengers", () =>{
    it("Success Delete Passanger", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const IdPassengers ={
            id:11
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .delete(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Passenger (Unauthorized)", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const IdPassengers ={
            id:1
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .delete(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(403);
    });
    it("Not Found Passanger ", async () =>{
        const token = "";
        const IdPassengers ={
            id:9999999
        }
        const passengers ={
            "passenger_name":"Selly Bintang Melananda",
            "nik":"3510023553000982"
        }
        const response = await request(app)
        .delete(`/api/passengers/${IdPassengers.id}`)
        .set("Authorization", "Bearer " + token)
        .send(passengers)
        expect(response.statusCode).toBe(401);
    });
    
});

