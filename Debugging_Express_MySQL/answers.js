//callback---------------------------->>>>>
 function executeQuery(query, callback) {
    connection.query(query, (err, result) => {
        setTimeout(() => {
            callback(result);
        }, 2000)
   });	
}

console.log("STEP 1");
    executeQuery(get_user_query, (result) => {
        console.log("STEP 2", result);
        console.log("STEP 3");
    })

//Promise------------------------------>>>>
function executeQuery(query){
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
}


//async await--------------------------->>>>>
function executeQuery(query){
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
}

console.log("STEP 1");

async function get_data(){
    try {
        let result = await executeQuery(get_user_query);
        console.log('STEP 2', result);
        console.log('STEP 3');
    }
    catch(err){
        console.log("Error data:", err);
    }
}