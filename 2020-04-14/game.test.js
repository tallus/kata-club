class Game {
    constructor(){
        this.holder = 1
    }

    winner(){
        if (this.holder === 1){
            return 2
        } else if(this.holder === 2){
            return 1
        }
    }

    round(){
        if (this.holder === 1){
            this.holder = 2
        } else if(this.holder === 2){
            this.holder = 1
        }
    }
}

test("2 players, 3 rounds, team 2 wins", () => {
    const game = new Game(['a'], ['b'])
    game.round()
    game.round()
    game.round()
    expect(game.winner()).toBe(1)
})

test('2 players, 4 rounds, team 1 wins', ()=>{
    const game = new Game(['a'], ['b'])
    game.round()
    game.round()
    game.round()
    game.round()
    expect(game.winner()).toBe(2)
})

test('4 players, 3 rounds, team 2 wins', () => {
    const game = new Game(['a', 'b'], ['c', 'd']) // TODO use these in Game
    game.round('b')
    game.round('a')
    game.round('c')
    expect(game.winner()).toBe(1)
})