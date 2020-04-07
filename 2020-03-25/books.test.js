const VOL1 = "Vol1";
const VOL2 = "Vol2";
const VOL3 = "Vol3";
const VOL4 = "Vol4";
const VOL5 = "Vol5";
const discounts = {
    1 : 1.0,
    2 : 0.95,
    3 : 0.9,
    4 : 0.8,
    5 : 0.75
}

const discountPercentage = (numberOfBooks) => discounts[numberOfBooks]

const PRICE = 8;

const bookCost = (number, discount = 1) => number * PRICE * discount;

function calculateCost(...books) {
  const numberOfBooks = books.length;
  const numberOfDifferentBooks = new Set(books).size;

  const duplicateBooks = numberOfBooks - numberOfDifferentBooks;
  return bookCost(numberOfDifferentBooks, discountPercentage(numberOfDifferentBooks)) + bookCost(duplicateBooks);
}

describe("Buying books", () => {

  it("should cost 0 euros for 0 book", () => {
    const cost = calculateCost();
    expect(cost).toBe(0);
  });

  it("should cost 8 euros for 1 book", () => {
    const cost = calculateCost(VOL1);
    expect(cost).toBe(8);
  });

  it("should cost 16 for two of the same books", () => {
    const cost = calculateCost(VOL1, VOL1);
    expect(cost).toBe(16);
  });

  it("should cost 15.20 for two different books", () => {
    const cost = calculateCost(VOL1, VOL2);
    expect(cost).toBe(15.2);
  });

  it("should cost 8 + 15.20 for two different books and 1 duplicate", () => {
    const cost = calculateCost(VOL1, VOL1, VOL2);
    expect(cost).toBe(15.2 + 8);
  });

  it("should cost 21.60 for three different books", () => {
    const cost = calculateCost(VOL1, VOL2, VOL3);
    expect(cost).toBe(21.6);
  });

  it("should cost 21.60 + 16.0 for three different books and two duplicates", () => {
    const cost = calculateCost(VOL1, VOL2, VOL2, VOL3, VOL3);
    expect(cost).toBe(21.6+16.0);
  });

  it("should cost 25.60 for 4 different books", () => {
    const cost = calculateCost(VOL1, VOL2, VOL3, VOL4);
    expect(cost).toBe(25.6);
  });

  it("should cost 30 for 5 different books", () => {
    const cost = calculateCost(VOL1, VOL2, VOL3, VOL4, VOL5);
    expect(cost).toBe(30);
  });

  it("should cost 30 + 16.0 for 5 different books", () => {
    const cost = calculateCost(VOL1, VOL2, VOL3, VOL4, VOL5, VOL2, VOL4);
    expect(cost).toBe(46);
  });
});
