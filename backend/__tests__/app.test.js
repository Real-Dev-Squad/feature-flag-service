const supertest = require('supertest');
const app = require('../app');

describe("create and get feature flags", () => {
    it("should get 200 for GET request to /featureflags", async () => {
        await supertest(app).get(`/featureflags`).expect(200)
    })
    it("should throw 404 for accessing wrong URL", async () => {
        await supertest(app).get(`/featureflas`).expect(404)
    })
})