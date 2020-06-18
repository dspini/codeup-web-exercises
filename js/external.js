//exercise 1.
alert("Welcome to my Website!");

//exercise 2.
let userInput = prompt("what is your favorite color?");
    alert("Great, " + userInput + " is my favorite color too.")

//exercise 3.
let mermaidDays = parseInt(prompt("how many days did you rent Little Mermaid for?"));
let bearDays = parseInt(prompt("how many days did you rent Brother Bear for?"));
let herculesDays = parseInt(prompt("how many days did you rent Hercules for?"));
let charges = 3*mermaidDays + 3*bearDays + 3*herculesDays;
alert("you owe $" + charges + "in movie rental fee ($3 per day per movie)");


const googleRate = 400;
const amazonRate = 380;
const facebookRate = 350;
let googleHours = prompt("how many hours did you work for Google?");
let amazonHours = prompt("how many hours did you work for Amazon?");
let facebookHours = prompt("how many hours did you work for Facebook?");
let totalpay = googleRate*googleHours + amazonRate*amazonHours + facebookRate*facebookHours;
alert("You made $" + totalpay + " this week.");


let isClassOpen = confirm("is the class full?");
let isScheduleOpen = confirm("is your schedule open?");
alert("You may register: " + (isClassOpen && isScheduleOpen));


let numberItems = parseInt(prompt("How many item did you buy?"));
let offerExpired = confirm(prompt("Is offer expired?"));
let premiumMember = confirm(prompt("Are you a premium member?"));
alert("Offer Applied: " + (offerExpired && (numberItems > 2 || premiumMember)));









