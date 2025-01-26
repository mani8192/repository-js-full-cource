/*Question 2: Calculate the Area of a Rectangle
Ek function banao jo rectangle ka area calculate kare.

Function ka naam ho calculateArea.
Parameters: length, width.
Formula: Area = length * width
Return: Rectangle ka area.*/


function Calculate_Area(lenght,width){
    let area = lenght * width;
    return area;
}

let rectangle = Calculate_Area(5,10);
console.log(rectangle);