const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const sinon = require('sinon');
const axios = require('axios');

const app = require('../index');

describe('API de Conversões', () => {

    before(() => {
        sinon.stub(axios, "get").resolves({
            data: { result: 50 }
        });
    });

    after(() => {
        sinon.restore();
    });

     describe('GET /api/moeda', () => {

        it('deve converter USD para BRL com sucesso', async () => {
            const res = await request(app)
                .get('/api/moeda?from=USD&to=BRL&amount=10'); 

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('resultado');
            expect(res.body).to.have.property('from', 'USD');
            expect(res.body).to.have.property('to', 'BRL');
            expect(res.body).to.have.property('valor', 10);
        });

        it('deve retornar erro se faltar parâmetros', async () => {
            const res = await request(app)
                .get('/api/moeda?from=USD');

            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error');
        });

        it('deve retornar erro quando a moeda é inválida', async () => {
            const res = await request(app)
                .get('/api/moeda?from=ABC&to=BRL&amount=10');

            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error');
        });
});



    // ------------------------
    //  TEMPERATURA
    // ------------------------
    describe('GET /api/temp', () => {
        it('deve converter Celsius para Fahrenheit', async () => {
            const res = await request(app)
                .get('/api/temp?from=C&to=F&value=10');

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('resultado');
        });

        it('deve converter Fahrenheit para Celsius', async () => {
            const res = await request(app)
                .get('/api/temp?from=F&to=C&value=50');

            expect(res.status).to.equal(200);
        });

        it('deve converter Kelvin para Celsius (novo)', async () => {
            const res = await request(app)
                .get('/api/temp?from=K&to=C&value=300');

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('resultado');
        });

        it('deve falhar se faltar valor', async () => {
            const res = await request(app)
                .get('/api/temp?from=C&to=F');

            expect(res.status).to.equal(400);
        });
    });

    // ------------------------
    //  DISTÂNCIA
    // ------------------------
    describe('GET /api/dist', () => {
        it('deve converter Km para Milhas', async () => {
            const res = await request(app)
                .get('/api/dist?from=km&to=mi&value=10');

            expect(res.status).to.equal(200);
        });

        it('deve converter Metros para Km (novo)', async () => {
            const res = await request(app)
                .get('/api/dist?from=m&to=km&value=1500');

            expect(res.status).to.equal(200);
        });

        it('deve falhar ao usar unidade inválida', async () => {
            const res = await request(app)
                .get('/api/dist?from=X&to=km&value=10');

            expect(res.status).to.equal(400);
        });
    });

    // ------------------------
    //  PESO
    // ------------------------
    describe('GET /api/peso', () => {
        it('deve converter Kg para Libras', async () => {
            const res = await request(app)
                .get('/api/peso?from=kg&to=lb&value=10');

            expect(res.status).to.equal(200);
        });

        it('deve converter Libras para Kg', async () => {
            const res = await request(app)
                .get('/api/peso?from=lb&to=kg&value=10');

            expect(res.status).to.equal(200);
        });

        it('deve converter g para oz (novo)', async () => {
            const res = await request(app)
                .get('/api/peso?from=g&to=oz&value=500');

            expect(res.status).to.equal(200);
        });

        it('deve retornar erro ao enviar unidade inválida', async () => {
            const res = await request(app)
                .get('/api/peso?from=xx&to=kg&value=10');

            expect(res.status).to.equal(400);
        });
    });
});
