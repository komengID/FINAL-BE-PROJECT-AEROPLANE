const path = require('path');
const request  = require("supertest");
const app = require ("../app/index");
require ("dotenv").config();

describe ("Create Ticket", () =>{
    it("Success Create Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const createTicket = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .post("/api/tickets")
        .set("Authorization", "Bearer " + token)
        .send(createTicket);
        expect(response.statusCode).toBe(200);
    });
    it("Invalid Token Ticket", async () =>{
        const token = "";
        const createTicket = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .post("/api/tickets")
        .set("Authorization", "Bearer " + token)
        .send(createTicket);
        expect(response.statusCode).toBe(401);
    });
});
describe ("Data All Ticket", () =>{
    it("Successs Show Data All Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const response = await request(app)
        .get("/api/tickets")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
});
describe ("Data Search Ticket", () =>{
    it("Successs Show Data Search Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        // const departure =2022
        // const arival= 2022
        
        const response = await request(app)
        .get("api/tickets/search?departure_date=2022&arrival_date=2022")
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Not Found Search Ticket", async () =>{
        const token = "";
        const searchTickets = {
            "airport_name": "testing",
        };
        const response = await request(app)
        .get(`/api/tickets/search?searchTicket${searchTickets}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(401);
    });
});
describe ("Data Id Ticket", () =>{
    it("Successs Show Data Id Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const tickets = {
            id:999999
        }
        const response = await request(app)
        .get(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(200);
    });
    it("Not Found Id Ticket", async () =>{
        const token = "";
        const tickets = {
            id:999999
        }
        const response = await request(app)
        .get(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        expect(response.statusCode).toBe(401);
    });
});
describe ("Update Ticket", () =>{
    it("Success Update Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const tickets = {
            id:27
        }
        const updateTicket = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .put(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        .send(updateTicket);
        expect(response.statusCode).toBe(200);
    });
    it("Not Found Update Ticket", async () =>{
        const token = "";
        const tickets = {
            id:999999
        }
        const updateTickets = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .put(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        .send(updateTickets);
        expect(response.statusCode).toBe(401);
    });
    it("Invalid Token Update Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const tickets = {
            id:999999
        }
        const updateTickets = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .put(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        .send(updateTickets);
        expect(response.statusCode).toBe(403);
    });
});
describe ("Delete Ticket", () =>{
    it("Success Delete Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY3MjM5Mjc2N30.XQilrMSQcPF0sydg792FTeHSqnhaQhbDIrVQeuQzvJk";
        const tickets = {
            id:27
        }
        const deleteTicket = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .delete(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        .send(deleteTicket);
        expect(response.statusCode).toBe(200);
    });
    it("Not Found Delete Ticket", async () =>{
        const token = "";
        const tickets = {
            id:999999
        }
        const deleteTickets = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .delete(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        .send(deleteTickets);
        expect(response.statusCode).toBe(401);
    });
    it("Invalid Token Delete Ticket", async () =>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3LCJpYXQiOjE2NzI0NzIyNDR9.kbaDSbcXCIlxuO8WNgL9Ft3s6p_UU0TUnOVL2Fz-rVA";
        const tickets = {
            id:27
        }
        const deleteTickets = {
            "id_airport": 1,
            "departure_date": "2022-12-31T16:04:26.666Z",
            "arrival_date": "2022-12-31T16:04:26.666Z",
            "class": "Ekonomi",
            "price": 8000000
        }
        const response = await request(app)
        .delete(`/api/tickets/${tickets.id}`)
        .set("Authorization", "Bearer " + token)
        .send(deleteTickets);
        expect(response.statusCode).toBe(403);
    });
});