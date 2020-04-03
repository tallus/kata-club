
describe("Bowling", () => {
	test("a game where every roll is 0", () => {
		const game = new Game([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
		expect(game.score()).toBe(0)
	})
	test("a game where one roll scores five", () =>{
		const game = new Game([5])
		expect(game.score()).toBe(5)
	})
	test("a game where every roll is one", () => {
		const game = new Game([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
		expect(game.score()).toBe(20)
	})
	test("a frame with a spare means the score of the next roll doubles", ()=>{
		const game = new Game([[5,5],[2]])
		expect(game.score()).toBe(14)
	})
})


class Game {
	constructor(rolls) {
		this.rolls = rolls
	}
	score() {
		let total = 0
		for(let roll of this.rolls){
			console.log()
			total += (roll[0] + roll[1])
		}

		return total
	}
}