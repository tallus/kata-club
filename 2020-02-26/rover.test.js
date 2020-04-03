const Rover = require ("./Rover.js")

describe('Rover coordinates', () => {
    it('return inital coordinates', () => {
        const rover = new Rover()
        const position = rover.getPosition()
        expect(position).toBe('0:0:N')
    })
})

describe('Input movement', () => {
    it('moving 1 North from start position', () => {
        const rover = new Rover()
        rover.move('M')
        const position = rover.getPosition()
        expect(position).toBe('0:1:N')
    })
    it('Change direction left', () => {
        const rover = new Rover()
        rover.move('L')
        const position = rover.getPosition()
        expect(position).toBe('0:0:W')
    })
    it('Change direction right', () => {
        const rover = new Rover()
        rover.move('R')
        const position = rover.getPosition()
        expect(position).toBe('0:0:E')
    })
    it('Changes direction right twice', () => {
        const rover = new Rover()
        rover.move('RR')
        const position = rover.getPosition()
        expect(position).toBe('0:0:S')
    })
    it('Changes direction right four', () => {
        const rover = new Rover()
        rover.move('RRRR')
        const position = rover.getPosition()
        expect(position).toBe('0:0:N')
    })
    it('Changes direction left four', () => {
        const rover = new Rover()
        rover.move('LLLL')
        const position = rover.getPosition()
        expect(position).toBe('0:0:N')
    })
    // test('moving 2 North from start position', ()=>{
    //     const rover = new Rover()
    //     rover.move('MM')
    //     const position = rover.getPosition()
    //     expect(position).toBe('0:2:N')
    // })
})
