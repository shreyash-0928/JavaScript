// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();       // ; must when 2 iife called

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
