const VOL1 = "Vol1"
const VOL2 = "Vol2"

const DISCOUNT_PERCENTAGE = 0.95
const PRICE = 8

const bookCost = (number, discount=1) => number * PRICE * discount

function calculateCost (...books){
    const numberOfBooks = books.length
    const numberOfDifferentBooks = new Set(books).size
    const booksAllTheSame = numberOfDifferentBooks == 1

    let cost 
    if (numberOfBooks > 1 && !booksAllTheSame){
        const duplicateBooks = numberOfBooks - numberOfDifferentBooks
        const discountedPrice = PRICE * DISCOUNT_PERCENTAGE
        cost = bookCost(numberOfDifferentBooks, DISCOUNT_PERCENTAGE) + bookCost(duplicateBooks)
    } else {
        cost = bookCost(numberOfBooks)
    }
    return cost
}

describe("Buying books", () =>{
    it("should cost 8 euros for 1 book", () => {
        const cost = calculateCost(VOL1)
        expect(cost).toBe(8)
    })

    it("should cost 16 for two of the same books", () => {
        const cost = calculateCost(VOL1, VOL1)
        expect(cost).toBe(16)
    })

    it("should cost 15.20 for two different books", () => {
        const cost = calculateCost(VOL1, VOL2)
        expect(cost).toBe(15.20)
    })

    it("should cost 8 + 15.20 for two different books and 1 duplicate", () => {
        const cost = calculateCost(VOL1, VOL1, VOL2)
        expect(cost).toBe(15.20 + 8)
    })
})
