import React from "react";
import { fCurrency } from "../fcurrency";

test("test fcurrency number", () => {
  expect(fCurrency(12)).toEqual("$12");
});

test("test fcurrency string", () => {
  expect(fCurrency("12.50")).toEqual("$12.50");
});
