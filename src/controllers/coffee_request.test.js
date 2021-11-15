const request = require("supertest");
const app = require("../app");

test("GET /coffee should return correct object", async () => {
  const res = await request(app)
  .get("/coffee")
  .query({ coffeeName: "Latte" });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

test("GET /coffee without passing coffeeName should return correct object", async () => {
  const res = await request(app)
  .get("/coffee")
  
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

test("GET /coffee with coffeeName not equal to Latte should return correct object", async () => {
  const res = await request(app)
  .get("/coffee")
  .query({ coffeeName: "Expresso" });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Expresso",
  });
});