// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacciLength", () => {
    it("a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function", () => {
      const result = fibonacciLength(6)
      expect(result).toEqual([1, 1, 2, 3, 5, 8])
    })
  
    it("a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function", () => {
      const result = fibonacciLength(10)
      expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
// b) Create the function that makes the test pass.
const fibonacciLength = (length) => {
    const sequence = [1, 1]
    for (let i = 2; i < length; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence
} 
// Pseudo code: build a function that uses any number more than to create an array of numbers of that same numbers length in the fibonacci sequence

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe("tallyVotes", () => {
    it("a function that takes in an object that contains up votes and down votes and returns the end tally for votes1", () => {
        const result = tallyVotes({ upVotes: 13, downVotes: 2 });
        expect(result).toEqual(11)
    })
    it("a function that takes in an object that contains up votes and down votes and returns the end tally for votes2", () => {
        const result = tallyVotes({ upVotes: 2, downVotes: 33 });
        expect(result).toEqual(-31);
      })
})
// b) Create the function that makes the test pass.
const tallyVotes = (votes) => {
    return votes.upVotes - votes.downVotes
}
// Pseudo code: 
// create a function that uses object as argument
// get difference from upVotes to downVotes to get tally
// return calculated tally