const people = [
    { firstName: "John", lastName: "Doe"},
    { firstName: "Jane", lastName: "Doe"},
    {firstName: "Eddy", lastName: "Lee"},
    {firstName: "John", lastName: "Fawn"},
    {firstName: "Edward", lastName: "Kim"}
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    { firstName: "John", lastName: "Doe"},
    {firstName: "John", lastName: "Fawn"},
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
];

  // Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes"; 
const expected4 = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
    {firstName: "Eddy", lastName: "Lee"},
];

function filterByKeyStartsWith(items, searchFor, searchBy) {
    const newArr = [];
    let temp = "";
    for (item of items) {
        temp = item[searchBy].slice(0, searchFor.length);
        if(temp.toLowerCase() === searchFor.toLowerCase()){newArr.push(item)}
    }
    return newArr
}
  // Nice. I think you got it! :D
console.log("================================================")
console.log("Starts: ",filterByKeyStartsWith(people,searchFor1,searchBy1))
console.log("Starts: ",filterByKeyStartsWith(people,searchFor2,searchBy2))
console.log("Starts: ",filterByKeyStartsWith(people,searchFor3,searchBy3))

function filterByKeyIncludes(items, searchFor, searchBy) {
    const newArr = [];
    let temp = "";
    for (item of items) {
        for(let i=0; i<item[searchBy].length;i++){
            if(item[searchBy][i].toLowerCase() === searchFor.toLowerCase() &&   !newArr.includes(item)){
                newArr.push(item);
            }
        }
    }
    return newArr
}

console.log("================================================")
console.log("Includes: ",filterByKeyIncludes(people,searchFor4,searchBy4))


function filterByKeyEndsWith(items, searchFor, searchBy) {
    const newArr = [];
    let temp = "";
    for (item of items) {
        temp = item[searchBy].slice(-searchFor.length);
        if(temp.toLowerCase() === searchFor.toLowerCase()){newArr.push(item)}
    }
    return newArr
}
console.log("================================================")
console.log("Ends: ",filterByKeyEndsWith(people,searchFor2,searchBy2))

function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    if(searchMethod === "startsWith"){
        return filterByKeyStartsWith(items, searchFor, searchBy);
    }
    else if(searchMethod === "endsWith"){
        return filterByKeyEndsWith(items, searchFor, searchBy);
    }
    else if(searchMethod === "includes"){
        return filterByKeyIncludes(items, searchFor, searchBy);
    }
    else{ return console.log("No valid seach method")}
}