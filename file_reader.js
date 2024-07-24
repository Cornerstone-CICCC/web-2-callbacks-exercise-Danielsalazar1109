const fs = require("fs");

function readHobbies(data1, data2, data3) {
  fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
    if (err) {
      return console.error("Error reading hobbies.txt:", err);
    }
    const hobbies = data4.split('\n').map(hobby => hobby.trim()).filter(hobby => hobby.length > 0);
    const hobbiesText = hobbies.length > 1 
      ? hobbies.slice(0, -1).join(', ') + ' and ' + hobbies[hobbies.length - 1] 
      : hobbies[0];

    console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${hobbiesText}`);
  });
}

function readAge(data1, data2) {
  fs.readFile("./age.txt", "utf-8", (err, data3) => {
    if (err) {
      return console.error("Error reading age.txt:", err);
    }
    readHobbies(data1, data2, data3);
  });
}

function readLastName(data1) {
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    if (err) {
      return console.error("Error reading lastname.txt:", err);
    }
    readAge(data1, data2);
  });
}

function readFirstName() {
  fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
    if (err) {
      return console.error("Error reading firstname.txt:", err);
    }
    readLastName(data1);
  });
}

readFirstName();
