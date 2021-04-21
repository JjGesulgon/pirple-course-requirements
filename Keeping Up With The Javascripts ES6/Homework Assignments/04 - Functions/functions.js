let men = ["Socrates", "Plato", "Aristotle"];

const mortalIdentifier = (person) => {
  const filteredSearch = men.filter((man) => {
    return man.toLowerCase() === person.toString().toLowerCase()
  });
  
  if(filteredSearch.length <= 0){
    return false;
  }else {
    return true;
  }
}

console.log(mortalIdentifier("Socrates"));

let cakes = [
  {
    name: "vanilla",
    isChocolate: false
  }, 
  {
    name: "chocolate",
    isChocolate: true
  }
];

const cakeChecker = (cakeList, isChocolate = true) => {
  cakeList.forEach((cake) => {
    isChocolate === cake.isChocolate ? console.log("Correct, this cake is " + cake.name) : console.log("Wrong, this cake is " + cake.name);
  });
}

cakeChecker(cakes, false);