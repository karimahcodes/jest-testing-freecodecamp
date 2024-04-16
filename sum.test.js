// const sum = require('./sum'); 

const {sum, myFunction} = require ('./sum');
    // imports file where we will run the test and saves it as a constant that will be referenced in the test function
        /* Format of test function: 
        test('description', testFunction)
*/
        
// Test 1
test('adds 1+2 to equal 3', ()=>{
    expect(sum(1,2)).toBe(3);
});

//Test 2
test('two plus two is four', () => { 
    expect(2 + 2).toBe(4);
})

//Test 3
test('object assignment', () => {
    const data = { one: 1};
    data ['two'] = 2;
    expect(data).toEqual({one:1, two:2});
});

//Test 4 - testing for falsy values
test('null is falsy', () => {
    // const n = null;
    const n = 0;
    expect(n).toBeFalsy();
});

// Test 5 - truthy
test('one is truthy', () => {
    const n = 1;
    // const n = 0; //test fails
    expect(n).toBeTruthy();
});

//Test 6 - throws an error
test('throws an invalid input', () => {
    expect( ()=> {
        myFunction('fhfukhfkf');
    }).toThrow();
})


// test 6-9 accidentally deleted when repo initialized 
/*** ASYNCHORONOUS FUNCTIONS & PROMISES ***/


/*** MOCKS AND SPIES ****/
