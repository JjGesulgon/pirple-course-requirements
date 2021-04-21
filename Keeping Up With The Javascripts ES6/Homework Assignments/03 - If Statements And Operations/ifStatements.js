let men = [
  {
    name: "Socrates",
    isMortal: true,
  },
  {
    name: "Plato",
    isMortal: true,
  },
  {
    name: "Aristotle",
    isMortal: true,
  }
];

let menAreMortal = true;

if(menAreMortal){
  console.log("All Men Are Mortal");
  
  if(men[0].name === "Socrates" && men[0].isMortal){
      console.log("Socrates is a Man");
      console.log("Therefore, socrates is mortal");
  }else {
    console.log("Socrates is not a man");
  }
}


let cake = ["vanilla", "chocolate"];

if (cake[0] === "vanilla" || cake[1] === "chocolate"){
  console.log("This cake is either vanilla or chocolate.");
  if(cake[0] != "chocolate"){
    console.log("This cake is not chocolate");
    console.log("Therefore, this cake is vanilla");
  }
}