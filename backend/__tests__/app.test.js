const supertest = require('supertest');
const app = require('../app');

describe("create and get feature flags", () => {
    it("should get 200 for GET request to /featureflags", async () => {
        await supertest(app).get(`/featureflags`).expect(200)
    })
    it("should throw 404 for accessing wrong URL", async () => {
        await supertest(app).get(`/featureflas`).expect(404)
    })
    it("should return 404 if flag is not there ", async () => {
        const flagName = 123;
        await supertest(app).get(`/featureflags/${flagName}`).expect(404)
    })
    it("should return 404 for incorrect POST request", async () => {
        await supertest(app).post("/featureflags").expect(404);
    })
})