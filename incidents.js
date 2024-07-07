// Incident
class Incident {
    constructor() {
        this.true_data = new IncidentData();
    }
};

// Incident data
class IncidentData {
    constructor() {
        this.incident_start = getRandomDate(2018, 2024 + 1);
        this.incident_end = this.incident_start;
        this.entity = "";
        this.location = "";
        this.victims = [];
    }
};


// Misc
function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}


function getRandomDate(min_year, max_year) {
    let year = getRandomInt(min_year, max_year);
    let month = getRandomInt(0, 12);
    let day = getRandomInt(1, daysInMonth(year, month));
    let hour = getRandomInt(0, 24);
    let minute = getRandomInt(0, 60);
    return new Date(year, month, day, hour, minute, 0, 0);
}