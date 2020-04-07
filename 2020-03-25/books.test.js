const VOL1 = "Vol1";
const VOL2 = "Vol2";
const VOL3 = "Vol3";
const discounts = {
    1 : 1.0,
    2 : 0.95,
    3 : 0.9
}

const discountPercentage = (numberOfBooks) => {
    return discounts[numberOfBooks]
}
const PRICE = 8;

const bookCost = (number, discount = 1) => number * PRICE * discount;

function calculateCost(...books) {
  const numberOfBooks = books.length;
  const numberOfDifferentBooks = new Set(books).size;
  const booksAllTheSame = numberOfDifferentBooks == 1;

  let cost;
  if (numberOfBooks > 1 && !booksAllTheSame) {
    const duplicateBooks = numberOfBooks - numberOfDifferentBooks;
    cost =  bookCost(numberOfDifferentBooks, discountPercentage(numberOfDifferentBooks)) + bookCost(duplicateBooks);
} else if (numberOfDifferentBooks === 3) {
  cost = bookCost(3, 0.9);
} else {
    cost = bookCost(numberOfBooks);
  }
  return cost;
}

describe("Buying books", () => {
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
});
