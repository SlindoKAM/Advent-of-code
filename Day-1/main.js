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

    //index of smaller element and indicates the right position of pivot found so far
    let i = lowIndex - 1;

    //Traversing through all elements(arr[lowIndex...highIndex]) and moving elements smaller than pivot to left of pivot
    for (let j = lowIndex; j <= highIndex - 1; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            //swap elements
            // [arr[i], arr[j]] = [arr[j], arr[i]];
            swap(arr, i, j);
        }
    }

    //swap pivot with the greater element
    swap(arr, i + 1, highIndex);

    //return the position of pivot
    return i + 1;
}

//swap function
function swap(arr, i, j)
{
    //swapping elements at index i and j of the array 
    // temp array to store the value of arr[i] then replace arr[i] with arr[j] and make arr[j] = temp
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//Quick Sort function implementation with lowIndex as 0 and highIndex as length of array
function quickSort(arr, lowIndex, highIndex)
{
    if (lowIndex < highIndex)
    {
        //partition the array and get the pivot index 
        let pivotIndex = partition(arr, lowIndex, highIndex);

        //Recursively sort elements before pivot and after pivot index
        //sort elements before pivot index...
        //sort elements after pivot index...
        quickSort(arr, lowIndex, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, highIndex);
    }
}

//To show the output
// console.log(input);
console.log(firstColArr);
