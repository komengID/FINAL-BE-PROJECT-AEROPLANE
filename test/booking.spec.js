const path = require('path');
const request  = require("supertest");
const app = require ("../app/index");
const {faker} = require ('@faker-js/faker');
require ("dotenv").config();

describe ("Create Booking", () =>{
    it("Succes Create booking", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const createbooking = {
            "id": 1,
            "id_booking": 1,
            "id_ticket": 1,
            "id_users": 1,
            "total_booking": 1
        }
        const response = await request(app)
        .post("/api/bookings/")
        .set("Authorization", "Bearer " + token)
        .send(createbooking);
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Booking", async () =>{
        const token = "";
        const createbooking = {
            "id": 1,
            "id_booking": 1,
            "id_ticket": 1,
            "id_users": 1,
            "total_booking": 1
        }
        const response = await request(app)
        .post("/api/bookings/")
        .set("Authorization", "Bearer " + token)
        .send(createbooking);
        expect(response.statusCode).toBe(401);
    });
});
describe ("Data All Booking", () =>{
    it("Success Show Data All Booking", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const response = await request(app)
        .get("/api/bookings")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Booking", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";   
        const response = await request(app)
        .get("/api/bookings")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(403);
    });
});
describe ("Data Booking User", () =>{
    it("Success Show Data Booking User", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
       
        const response = await request(app)
        .get("/api/bookings/user")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Booking", async () =>{
        const token = "";
        const response = await request(app)
        .get("/api/bookings/user")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(401);
    });
});
describe ("Data Id Booking", () =>{
    it("Success Show Data Booking", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const IdBooking ={
            id:11
        }
        const response = await request(app)
        .get(`/api/bookings/${IdBooking.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Booking", async () =>{
        const token = "";
        const IdBooking ={
            id:99999999
        }
        const response = await request(app)
        .get(`/api/bookings/${IdBooking.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(401);
    });
});

