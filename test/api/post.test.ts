import { request } from "../index";
import db from "../setup/db_setup";

import {
    ERROR, 
    SUCCESS,
    BODY_MUST_CONTAIN,
    } from "../../server/utils";
  
    
  const data1 = {
    "url": "http://localhost:8000/event"
  };
  const data2 = {
      "url": "fake_url"
    };

    /**
   * Validate route
   */
  describe("validate route test - post", () => {

    // Connects to test database
    db.setupDB();
        
    it("should respond with HTTP 200", async (done) => {
        let response = await request.post(`/`)
        .send(data1)
        .set("Accept", "application/json");

      expect(response.body.status).toBe(SUCCESS);
      expect(response.body.data).toBeDefined();
      
      expect(response.status).toBe(200);
      done();
    });
});