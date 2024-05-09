#! usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const response = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please Enter the amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter Valid Number";
        }
        else if (input > 60) {
            return "Seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = response.userInput;
// let val = response.UserInput
// console.log(val);
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timediff = differenceInSeconds(intervalTime, currentTime);
        if (timediff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const minute = Math.floor((timediff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timediff % 60);
        console.log(`${minute.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }), 1000);
}
;
startTime(input);
// const date = new Date();
// console.log(date);
// console.log("intTime" + intervalTime);
