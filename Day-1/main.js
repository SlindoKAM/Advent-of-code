const fileSystem = require('fs');


//function to read the txt file( with data input inside).
function readtxtFile(filePath)
{
    try
    {
        const data = fileSystem.readFileSync(filePath);
        return data.toString().split('\n');
    }catch (error)
    {
        console.error(`Got an error trying to read the file:${error.message}`);
    }
}

//Putting the file path of the exactly data(data.txt)
const input = readtxtFile('./Day-1/data.txt');

//Create two arrays that will hold the each colomn
 const firstColArr = [];
 const secondColArr = [];

 //A container to put the sum inside or where i will be summing up the data(Addind together)
 let sum = 0;

//divide the input array into two different arrays
input.forEach((locVal) => 
{
    //Splitting the two colomns by seeing a (' ') space. Then pushing the splitted values to the new arrays separately.
    const locValIndex = locVal.split(' ');
    firstColArr.push(locValIndex[0]);
    secondColArr.push(locValIndex[1]);
});

//Sort each colomn by using the Quick Sort...
//partition function like a DIVIDER FUNCTION
function partition(arr, lowIndex, highIndex)
{
    //Choose the pivot
    let pivot = arr[highIndex];
}


//To show the output
// console.log(input);
// console.log(firstColArr);
