const { assert } = require("chai");
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
import findColor from "../app";
let COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];
describe("findColor", () => {
  COLORS.forEach((color) => {
    it(`should work for ${color}`, () => {
      assert.equal(findColor(sha256(utf8ToBytes(color))), color);
    });
  });
});
