const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();

let year = d.getFullYear();
let month = months[d.getMonth()];
let day = days[d.getDay()];

const dateArray = Object.values(d);

function correctDate(dateArray) {
    return dateArray;
}
async function myDate() {
    return("Today is" + day + month + getDate() + "-th, of " + year);
}
myDate().then(
    function (value) { correctDate(value); },
    function (error) { correctDate(error); }
);
