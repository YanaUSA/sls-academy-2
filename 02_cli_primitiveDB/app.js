import inquirer from "inquirer";

function createNewUser() {
  inquirer
    .prompt([
      {
        name: "greeting",
        message: "Enter the user's name. To cancel press ENTER: ",
        type: "input",
      },
    ])
    .then(function (answer) {
      console.log(answer.greeting);
    });
}

createNewUser();
