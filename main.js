const fileSystem = require('fs');


//function to read the txt file( with data input inside).
function readtxtFile(filePath)
{
    try
    {
        const data = fileSystem.readFileSync(filePath);
        return data.toString();
    }catch (error)
    {
        console.error(`Got an error trying to read the file:${error.message}`);
    }
}

//Putting the file path of the exactly data(data.txt)
const input = readtxtFile('./data.txt');

//Create two arrays that will hold the 
//divide the input array into two different arrays




//To show the output
console.log(input);