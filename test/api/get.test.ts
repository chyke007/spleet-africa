import { request } from "../index";
import db from "../setup/db_setup";

import {
    ERROR, 
    URL_DOES_NOT_EXIST,
    INVALID_UID
    } from "../../server/utils";
  

    /**
   * Validate route
   */
  describe("validate route test - get", () => {

    // Connects to test database
    db.setupDB();
        
    it("should respond with HTTP 400", async (done) => {
        const response = await request.get("/test12")
        .set("Accept", "application/json");

      expect(response.body.status).toBe(ERROR);
      expect(response.body.message).toBe(URL_DOES_NOT_EXIST);

      expect(response.status).toBe(400);
      done();
    });

    it("should respond with HTTP 400 for invalid uid", async (done) => {
        const response = await request.get("/tesdhdnfb-fhfbnd-bfbs-t12")
        .set("Accept", "application/json");

      expect(response.body.status).toBe(ERROR);
      expect(response.body.message).toBe(INVALID_UID);

      expect(response.status).toBe(400);
      done();
    });
  });