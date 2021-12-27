
/**
 The missing number problem
 Implement algorithm 1 here
*/

function missing1(arr){
    let n = arr.length + 1;
    for (let i = 1; i < n; i++){
        let found = false;
        let j = 0;
        while (!found && j < arr.length){
            if (i === arr[j]){
                found = true;
            }
            j++;
        }
        if (!found){
            return i;
        }
    }
}


/**
The missing number problem
Implement algorithm 2 here
*/
function missing2(arr){
    let n = arr.length + 1;
    let fullSum = (n * (n+1) /2)
    let sum = arr.reduce((acc, num) => (acc +=num), 0);
    return fullSum - sum;
}

module.exports = {
    missing1,
    missing2,
}