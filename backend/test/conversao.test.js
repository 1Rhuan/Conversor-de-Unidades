const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../index');

describe('API de Conversões', () => {
    describe('GET /api/moedas', () => {
        it('deve converter USD para BRL com sucesso', async () => {
            const res = await request(app)
                .get('/api/moedas?from=USD&to=BRL&amount=10');

            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('resultado');
        });

        it('deve retornar erro se faltar parâmetros', async () => {
            const res = await request(app)
                .get('/api/moedas?from=USD');

            expect(res.status).to.equal(400);
        });
    });
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

        it('deve falhar se faltar valor', async () => {
            const res = await request(app)
                .get('/api/temp?from=C&to=F');

            expect(res.status).to.equal(400);
        });
    });

    describe('GET /api/dist', () => {
        it('deve converter Km para Milhas', async () => {
            const res = await request(app)
                .get('/api/dist?from=km&to=mi&value=10');

            expect(res.status).to.equal(200);
        });

        it('deve falhar ao usar unidade inválida', async () => {
            const res = await request(app)
                .get('/api/dist?from=X&to=km&value=10');

            expect(res.status).to.equal(400);
        });
    });

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

        it('deve retornar erro ao enviar unidade inválida', async () => {
            const res = await request(app)
                .get('/api/peso?from=xx&to=kg&value=10');

            expect(res.status).to.equal(400);
        });
    });
});
