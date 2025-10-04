import { showProjectBanner, helloWorld } from "../getStart/gettingStarted.js";
import { checkEligibility, showLoopDemo} from "../basicTS/basicTypeScript.js";
import { calculateBonus, greetEmployee, taskSummary, generateTaskReport} from "../funcArr/functionsArrays.js"

//Run Module-1
showProjectBanner();
helloWorld();

//Run Module-2
checkEligibility();
showLoopDemo;

//Run Module-3
console.log("\n -----Functions Demo-----");
console.log("Bonus:",calculateBonus(50000,4));
console.log(greetEmployee("Alex","QA Lead"));
taskSummary();
console.log(generateTaskReport("Alex", "All tasks executed successfully."));
