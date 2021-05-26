app.get('/people', (req, res) => {
    axios.get(url)
    .then( data => {
        //log the data before moving on!
        console.log(data);
        //rather than rendering, just send back the json data!
        res.json(data);
    })
    .catch(error => {
        //log the error before moving on!
        console.log(error);
        res.json(error);
    })
});



// es5 style
var anonES5 = function(parameter){                      
    return parameter + 5;                                               
}
// arrow functions
const anonES6 = parameter => parameter + 5;  
// curly brackets are not required if there is only one expression
// parentheses are not required if there is only one parameter
// the return is implicit with just one line
const twoParams = (parameter1, parameter2) => {   
    parameter1 += 5;                  
    return parameter1 + parameter2;               
} 
// with more parameters, parentheses are required  
// with more lines of code, curly brackets are required

