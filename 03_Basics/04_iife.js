// Immediately Invoked Function Expressions (IIFE)
// Globle scope se problem hoti h kai baar, to globle scope ke jo variales hai ya jo bhi declaration h uske pollution ho hatane ke liye IIFE use kiya jata hai 

// Syntax - ()()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();       // ; must when 2 iife called

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
