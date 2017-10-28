let should = require('should')
let exercises = require('../exercises') // First import!
let BankAccount = require('../bankaccount')

// Create a describe block with a callback
describe('The exercises module', () => {

	let bankAccount
	beforeEach(() => {
		bankAccount = new BankAccount()
	})

    describe('The function is being tested', () => {
        it('should do something', () => {
        })
    })
})