import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "ENTER FIRST NUMBER", type: "number", name: "firstnumber" },
    { message: "ENTER SECOND NUMBER", type: "number", name: "secondnumber" },
    {
        message: "select one of the opretors to perform action",
        type: "list",
        name: "opretor",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statement
(answer.opretor === "addition");
{
    console.log(+answer.firstnumber + answer.secondnumber);
}
