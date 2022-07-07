const supertest = require('supertest');
const app = require('../app');

const flagMockPayload = {
    name:'test-ff-mock',
    role: ['mock-1','mock-2'],
    isEnable: false,
    createdOn:'12-03-2002',
    createdBy:'mock-user',
    modifyBy: 'mock-admin',
    modifyOn:'12-03-2002'
}

describe("create and get feature flags", () => {
    it("should get 200 for GET request to /featureflags", async () => {
        await supertest(app).get(`/featureflags`).expect(200)
    })
    it("should throw 404 for accessing wrong URL", async () => {
        await supertest(app).get(`/featureflag`).expect(404)
    })
    it("should return 404 if flag is not there ", async () => {
        const flagName = 'mock';
        await supertest(app).get(`/featureflag/${flagName}`).expect(404)
    })
    it("should return 404 for incorrect POST request", async () => {
        await supertest(app).post("/featureflags").expect(404);
    })
})