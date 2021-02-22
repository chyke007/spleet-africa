import { request } from "../index";
import db from "../setup/db_setup";


// Connects to test database
db.setupDB();


/**
 * Index routes
 */
describe("Index routes test", () => {
  it("should respond with HTTP 404 for missing route", async (done) => {
    const response = await request.post("/test");

    expect(response.status).toBe(404);
    done();
  });

});


