const timeUnits = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];
const labelOnListChecker = (label) => timeUnits.includes(label);
const isValueValid = (value) => Number.isInteger(value);

const minToSec = 60;
const hourToSec = minToSec * 60
const dayToSec = hourToSec * 24

const isLabelValid = (value, label) => {
  switch(label){
    case "days":
    case "hours":
    case "minutes":
    case "seconds":
      return (value > 1 || value === 0) ? true : false
    case "day":
    case "hour":
    case "minute":
    case "second":
      return (value === 1) ? true : false
    default:
      return false;
  }
}

const toSecConversion = (value, label) => {
  switch(label){
    case "second":
    case "seconds":
      return value;
    case "minute":
    case "minutes":
      return minToSec * value;
    case "hour":
    case "hours":
      return hourToSec * value;
    case "day":
    case "days":
      return dayToSec * value;
    default:
      return false;
  }
}

const toLargerUnitConversion = (sec) => {
  let value = 0;
  
  if (sec % dayToSec === 0){
    value = sec / dayToSec;
    return (value === 1) ? [value, "day"] : [value, "days"];
  }else if (sec % hourToSec === 0){
    value = sec / hourToSec;
    return (value === 1) ? [value, "hour"] : [value, "hours"];
  }else if(sec % minToSec === 0){
    value = sec / minToSec;
    return (value === 1) ? [value, "minute"] : [value, "minutes"];
  }else {
    value = sec;
    return (value === 1) ? [value, "second"] : [value, "seconds"];
  }
}

const timeAdder = (value1, label1, value2, label2) => {
  if (!isValueValid(value1)) return false;
  if (!isValueValid(value2)) return false;
  
  if (!labelOnListChecker(label1)) return false;
  if (!labelOnListChecker(label2)) return false;
  
  if (!isLabelValid(value1, label1)) return false;
  if (!isLabelValid(value2, label2)) return false;
 
  
  const val1 = toSecConversion(value1, label1);
  const val2 = toSecConversion(value2, label2);
  
  const val3 = val1 + val2;
  
  return toLargerUnitConversion(val3);
}

//Valid Input
console.log(timeAdder(1,"minute",3,"minutes"));
console.log(timeAdder(5,"days",25,"hours"));
console.log(timeAdder(1,"minute",240,"seconds"));
console.log(timeAdder( 27, "hours",    0, "days"));

//Invalid Input
console.log(timeAdder(5,"hour",5,"minutes"));
console.log(timeAdder(false,false,5,"minutes"));
console.log(timeAdder({},"days",5,"minutes"));

//Extra Credit
console.log(timeAdder(20,"hours",4,"hours"));
console.log(timeAdder(20,"hours",5,"hours"));


















