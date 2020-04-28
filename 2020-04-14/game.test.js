class Player {
    constructor(player, team){
        this.player = player
        this.team = team
    }
    passDynamite(team1, team2) {
        if(this.team == 1) {
            return team2[0]
        } else {
            return team1[0]
        }
    }
}

const teamOne = [new Player('A',1)]
const teamTwo = [new Player('C', 2)]

class Game {
    constructor(team1, team2, rounds){
        this.team1 = team1
        this.team2 = team2

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

    start() {
        for(let i =0; i<this.rounds; i++) {
            this.holder = this.holder.passDynamite(this.team1, this.team2)
        }
    }
}

test("2 players, 3 rounds, team 2 wins", () => {
    const maxRounds = 3
    const game = new Game(teamOne, teamTwo, maxRounds)
    game.start()
    expect(game.winner()).toBe(1)
})

test('2 players, 4 rounds, team 1 wins', ()=>{
    const maxRounds = 4
    const game = new Game(teamOne, teamTwo, maxRounds)
    game.start()
    expect(game.winner()).toBe(2)
})

test('4 players, 3 rounds, team 2 wins', () => {
    const team1 = [new Player('A', 1), new Player('B', 1)]
    const team2 = [new Player('C', 2), new Player('D', 2)]
    const maxRounds = 3
    const game = new Game(team1, team2, maxRounds)
    game.start()
    expect(game.winner()).toBe(1)
})

test('4 players, 1 round, player 1 passes to same team', () => {
    const team1 = [new SameTeamPassingPlayer('A', 1), new Player('B', 1)]
    const team2 = [new Player('C', 2), new Player('D', 2)]
    const maxRounds = 1
    const game = new Game(team1, team2, maxRounds)
    game.start()
    expect(game.winner()).toBe(2)
})