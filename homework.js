// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.


// function remove (arr, name) { 

//     let newArr= arr;

//     for(let i = 0; i < arr.length; i++) {

//         if (newArr[i] === name) {
//             newArr.splice(i, 1);
//         }
//     }

//     return newArr;

// } 

let people = ['Cadence', 'Ordel', 'Marion']

function remove (arr, name) { 

    let newArr= []

    for(let i = 0; i < arr.length; i++) {

        if (name !== arr[i] ) {
            newArr.push(arr[i] )
        }
    }

    return newArr;

}



//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.



// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(arr) {

    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }

    return total;
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

// ** below method works? 
// function average(arr) {

//     let total = 0;

//     for(let i = 0; i < arr.length; i++) {
//         total = total + arr[i];
//     }

//     return total / arr.length

// }

function average (arr) {

    if(arr.length === 0) {
        return undefined;
    }

    let average = 0


    for(let i = 0; i < arr.length; i++) {
        average = average + arr[i];
    }
    average = average/arr.length;   
    return average;
}





// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.


function minimum (arr){

    let minimum = arr[0]; 

    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minimum) {

            minimum = arr[i];
        }

    }
        return minimum;

}







// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// copy the code 
// add smallest code to the new Array
// return new array

function selectionSort (arr) {

    let newArr = []

    var arrayCopy = arr.slice(0);


    for (let i = 0; i < arr.length; i++) {

        let minimum = arrayCopy[0];
        let minIndex = 0;
        for (let j = 0; j < arrayCopy.length; j++) {
            if (arrayCopy[j] < minimum) {
                minimum = arrayCopy[j];
                minIndex = j;
            }
        }

        arrayCopy.splice(minIndex, 1);

        newArr.push(minimum);


    }


    return newArr;

}






// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion" //

function textList(arr) {
    let output = "";

    for(let i = 0; i < arr.length; i++) {
        if(i == arr.length - 1) {
            output = output + arr[i];
        }
        else {
            output = output + arr[i] + ",";
        }
    }
    
    return output;
}