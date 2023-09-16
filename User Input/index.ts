import inquirer, { Answers, QuestionCollection } from "inquirer";

const questions: QuestionCollection = [{
    name: 'num1',
    type: 'number',
    message: 'Enter number 1'
},
{
    name: 'num2',
    type: 'input',
    message: 'Enter number 2'
}, {
    name: 'Operations',
    type: 'list',
    message: 'What do you want to do?',
    choices: ["*", "+", "-", "/"]
}]
var answers: Promise<Answers> = inquirer.prompt(questions)
answers.then((answers: Answers) => {
    switch (answers.Operations) {
        case "*":
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`)
            break;
        case "+":
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)
            break;
        case "-":
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`)
            break;
        case "/":
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)
            break;

        default:
            break;
    }
    // console.log("Answers", answers)
})
answers.catch((err) => {
    console.log("err", err)
})

// console.log("This is the age")