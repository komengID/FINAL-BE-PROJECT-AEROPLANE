const path = require('path');
const request  = require("supertest");
const app = require ("../app/index");
const {faker} = require ('@faker-js/faker');
require ("dotenv").config();


describe ("Create Airport", () =>{
    it("Success Create Airport", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const createAirport = {
            "airport_name": "testing",
            "airport_location": "Kupang"
        }
        const response = await request(app)
        .post("/api/airports/")
        .set("Authorization", "Bearer " + token)
        .send(createAirport);
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Airport", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const createAirport = {
            "airport_name": "El Tari International Airport",
            "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia"
        }
        const response = await request(app)
        .post("/api/airports/")
        .set("Authorization", "Bearer " + token)
        .send(createAirport);
        expect(response.statusCode).toBe(403);
    });
});
describe ("Data All Airport", () =>{
    it("Success Show Data All Airport", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const response = await request(app)
        .get("/api/airports/")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
});

describe ("Data Id Airport", () =>{
    it("Success Show Data Airport", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const IdAirport ={
            id:11
        }
        const response = await request(app)
        .get(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Not Found Airport", async () =>{
        const token = "";
        const IdAirport ={
            id:99999999
        }
        const response = await request(app)
        .get(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(401);
    });
});
describe ("Data Update Airport", () =>{
    it("Success Update Airport", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const IdAirport ={
            id:11
        }
        const Airport ={
            "airport_name": "El Tari International Airport",
            "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia"
        }
        const response = await request(app)
        .put(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        .send(Airport)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Airport", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const IdAirport ={
            id:1
        }
        const Airport ={
            "airport_name": "El Tari International Airport",
            "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia"
        }
        const response = await request(app)
        .put(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        .send(Airport)
        expect(response.statusCode).toBe(403);
    });
    it("Not Found Airport", async () =>{
        const token = "";
        const IdAirport ={
            id:99999999999
        }
        const Airport ={
            "airport_name": "El Tari International Airport",
            "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia"
        }
        const response = await request(app)
        .put(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        .send(Airport)
        expect(response.statusCode).toBe(401);
    });
    
});
describe ("Delete Airport", () =>{
    it("Success Delete Airport", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const IdAirport ={
            id:11
        }
        const Airport ={
            "airport_name": "El Tari International Airport",
            "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia"
        }
        const response = await request(app)
        .delete(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        .send(Airport)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token AirportcreateAirport (Unauthorized)", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const IdAirport ={
            id:22
        }
        const Airport ={
            "airport_name": "El Tari International Airport",
            "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia"
        }
        const response = await request(app)
        .delete(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        .send(Airport)
        expect(response.statusCode).toBe(403);
    });
    it("Not Found Airport ", async () =>{
        const token = "";
        const IdAirport ={
            id:22
        }
        const Airport ={
            "airport_name": "El Tari International Airport",
            "airport_location": "Kupang, Nusa Tenggara Timur, Indonesia"
        }
        const response = await request(app)
        .delete(`/api/airports/${IdAirport.id}`)
        .set("Authorization", "Bearer " + token)
        .send(Airport)
        expect(response.statusCode).toBe(401);
    });
    
});