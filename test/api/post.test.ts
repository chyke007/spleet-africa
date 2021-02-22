import { request } from "../index";
import db from "../setup/db_setup";

import {
    ERROR, 
    SUCCESS,
    BODY_MUST_CONTAIN,
    INVALID_URL_FORMAT,
    URL_ALREADY_EXIST
    } from "../../server/utils";
  
    
  const data1 = {
    "url": "https://github.com/chyke007"
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
        
    it("should respond with HTTP 201", async (done) => {
        let response = await request.post(`/`)
        .send(data1)
        .set("Accept", "application/json");

        console.log(response.body)
      expect(response.body.status).toBe(SUCCESS);
      expect(response.body.data).toBeDefined();
      
      expect(response.status).toBe(201);
      done();
    });

    it("should respond with HTTP 400 for missing url parameter in body", async (done) => {
       const response = await request.post('/')
      .send()
      .set("Accept", "application/json");
      expect(response.body.status).toBe(ERROR);
      expect(response.body.message).toBe(BODY_MUST_CONTAIN);
      
      expect(response.status).toBe(400);
      done();
    });

    it("should respond with HTTP 400 for invalid url format", async (done) => {
       const response = await request.post(`/`)
      .send(data2)
      .set("Accept", "application/json");
      expect(response.body.status).toBe(ERROR);
      expect(response.body.message).toBe(INVALID_URL_FORMAT);
      
      expect(response.status).toBe(400);
      done();
    });

    it("should respond with HTTP 200 for existing url", async (done) => {
      let response = await request.post(`/`)
     .send(data1)
     .set("Accept", "application/json");

     response = await request.post(`/`)
     .send(data1)
     .set("Accept", "application/json");

     expect(response.body.status).toBe(SUCCESS);
     expect(response.body.message).toBe(URL_ALREADY_EXIST);
     expect(response.body.data).toBeDefined()
     expect(response.body.data.longUrl).toBe(data1.url)

     expect(response.status).toBe(200);
     done();
   });

});