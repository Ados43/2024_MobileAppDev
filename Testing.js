// 1 Done

const { default: test } = require("node:test")

function getCircleArea(r) {
    return Math.PI * (r * r)
  }

randInt1 = Math.round(Math.random() * 50)
// console.log("RandInt1 " + randInt1);
// console.log("Q1: " + getCircleArea(randInt1));

// 2 Done

function greeting(name, time) {
    if(time >= 9 && time <= 12){
      return `Good Morning, ${name}!`
    } else if (time >= 13 && time <= 17) {
        return `Good Afternoon, ${name}!`
    }
  }

randInt2 = Math.round(Math.random() * 20)
// console.log("RandInt2: " + randInt2);
// console.log(greeting("aidan", randInt2));

// 3 Done

function checkValue(val) {
    if(val === null || val === undefined) {
        return "Your value is a nullish value:";
    } else if (!val) {
        return "Your input is a falsy value";
    } else { 
        return "Your value is a truthy value";
    }
  }

val = 0;
// console.log(checkValue(val))

// 4 ??

function wordLengths(sentence) {
    let array = sentence.split(" ");
    let lengthArray = [];
    console.log(array);
    for(i=0;i<array.length;i++) {
      lengthArray[i] = array[i].length;
    }
    return lengthArray;
}
// console.log(wordLengths("This is the way of the family"));

// 5 Done

function capitalizeSentence(sentence) {
    var str = sentence.split(" ");
    
    for(i=0;i<str.length;i++) {
      if(str[i] !== "") {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
      }
    }
    return str.join(" ");
  }

  const sentence = "hello my world";
//   console.log(capitalizeSentence(sentence));

// 6 

function rotateArray(array, numRotations) {
    for(i=0;i<numRotations;i++) {
        array.reverse();
    }
    return array;
  }
  
let array1 = [1,2,3,4,5]
// console.log(rotateArray(array1, 5))

// 7 Done

function animalClassify(type, weight) {
    let newAnimal = {}
    if(weight < 5) {
      newAnimal = {type: type, size: "small"}
    } else if(weight >= 5 && weight < 100) {
      newAnimal = {type: type, size: "big"}
    } else if(weight >= 100) {
      newAnimal = {type: type, size: "huge"}
    };
    return newAnimal;
}

// console.log(animalClassify("cat", 4))


// 8 

function describePerson(person) {
    let str = "";
    if(person.gender == "m") {
        person.pronoun = "he";
        person.gender = "man";
    } else if (person.gender == "f") {
        person.pronoun = "she";
        person.gender = "woman";
    }

    if(person.hobby != null) {
        str = `${person.name} is a ${person.age}-year-old ${person.gender}. ${person.pronoun} likes ${person.hobby}`
    } else {
        str = `${person.name} is a ${person.age}-year-old ${person.gender}. ${person.pronoun} doesn't have a hobby`
    }
    return str
}

let personObj = {name: "Aidan", age: "30", gender: "m"};
// console.log(describePerson(personObj));

// 9

function analyzeMarks(marks) {
    const marksArray = Object.values(marks);
    const lowestMark = Math.min(...marksArray)
    const highestMark = Math.max(...marksArray)
    let sum = 0;
    for (let i = 0; i < marksArray.length; i++) {
      sum += marksArray[i];
    }
    if (sum === 0) {
        return {}
    } else {
        averageMark = sum / marksArray.length;

    console.log(averageMark);
    const roundedAverageMark = Math.round(averageMark * 100) / 100;
  
    return [lowestMark, highestMark, roundedAverageMark];
    }
}

let marksObj = { Math: 90, English: 85, Science: 92 };
// console.log(analyzeMarks(marksObj))

// 10

function check(arr, target) {
    for (i=0;i<arr.length;i++) {
      for(j=0;j<arr.length;j++) {
        console.log(i,j);
        console.log(arr[i]+arr[j]);
        if(arr[i] + arr[j] == target && arr[i] !== arr[j]) {
          return [i, j]
        }
      }
    }
  }

// let testArray = [3, 2, 4];
// console.log(check(testArray, 6));

function doubleDivisibleByThree(numbers) {
  let newArray2 = [];
  for(i=0;i<numbers.length;i++){
    console.log("Init Number: " + numbers[i]);
    if(numbers[i] % 3 === 0) {
      console.log("Divisible by 3: " + numbers[i]);
      newArray2.push(numbers[i] * 3);
    }
  }
  return newArray2;
}

let numbersArray = [10, 2, 3, -2, -3, -9, -11];
doubleDivisibleByThree(numbersArray);