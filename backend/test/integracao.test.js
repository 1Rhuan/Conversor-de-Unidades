const request = require("supertest");
const app = require("../index");
const sinon = require("sinon");
const axios = require("axios");
const { expect } = require("chai");

describe("Testes de integração da API", () => {

    before(() => {
        sinon.stub(axios, "get").resolves({
            data: { result: 50 } // valor mockado
        });
    });

    after(() => {
        sinon.restore();
    });

    describe("GET /api/moeda", () => {

        it("deve converter USD para BRL", async () => {
            const res = await request(app)
                .get("/api/moeda?from=USD&to=BRL&amount=10");

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property("resultado");
            expect(res.body.resultado).to.equal(50);
        });

        it("deve falhar sem parâmetros", async () => {
            const res = await request(app).get("/api/moeda");

            expect(res.status).to.equal(400);
            expect(res.body).to.have.property("error");
        });
    });

});
