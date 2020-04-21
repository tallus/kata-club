class Player {
    constructor(player, team){
        this.player = player
        this.team = team
    }
    passDynamite(team1, team2) {
        if(this.team == 1) {
            return team2[0]
        } else {
            return team1[1]
        }
    }
}
class Game {
    constructor(team1, team2, rounds){
        this.team1 = team1.map((player)=>new Player(player,1))
        this.team2 = team2.map((player)=>new Player(player,2))
        this.holder = this.team1[0]
        this.rounds = rounds
    }

    winner(){
        if (this.holder.team == 1){
            return 2
        } else if(this.holder.team == 2){
            return 1
        }
    }

    round(){
        this.holder = this.holder.passDynamite(this.team1, this.team2)
    }

    start() {
        for(let i =0; i<this.rounds; i++) {
            this.round()
        }
    }
}

test("2 players, 3 rounds, team 2 wins", () => {
    const maxRounds = 3
    const game = new Game(['a'], ['b'], maxRounds)
    game.start()
    expect(game.winner()).toBe(1)
})

test('2 players, 4 rounds, team 1 wins', ()=>{
    const maxRounds = 4
    const game = new Game(['a'], ['b'], maxRounds)
    game.start()
    expect(game.winner()).toBe(2)
})

test('4 players, 3 rounds, team 2 wins', () => {
    const team1 = ['a', 'b']
    const team2 = ['c', 'd']
    const maxRounds = 3
    const game = new Game(team1, team2, maxRounds)
    game.start()
    expect(game.winner()).toBe(1)
})