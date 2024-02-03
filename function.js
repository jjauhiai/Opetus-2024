
let x=5;
let y=5;

function myFunction(p1, p2) {
    return p1 * p2;
}

function myComp(p1, p2) {
    if (p1 > p2)
        return p1;
    if (p2 > p1)
        return p2;
    return "yhtä suuret";
}

function ageComp(age)
{
    if (isNaN(age)) {
       return("Input is not a number");
      } else {
       return((age < 18) ? "Too young" : "Old enough");
      }

}
console.log("Lukujen tulo on ",myFunction(x,y));
console.log("Suurempi on ",myComp(x,y));
console.log(ageComp('perce'));

