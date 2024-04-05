const express = require("express");
const config = require("./config");

const app = express();

const usersTable = [
    {"name": "Karol", "email": "36782@student.anstar.edu.pl", "password": "123qwer"},
    {"name": "Geralt", "email": "thewitcher@gmail.com", "password": "plotka"},
    {"name": "Gomez", "email": "gomez.staryoboz@onet.pl", "password": "innos"},
    {"name": "Mietek", "email": "random.user@o2.pl", "password": "dajcosnastart1"},
    {"name": "Andre", "email": "palladyn.khorinis@interia.pl", "password": "walkazamiasto1"},
    {"name": "Rupert", "email": "kupiec.rupert@gmail.pl", "password": "rup123ert2"},
    {"name": "Tymczasowy", "email": "tymczasowe@gmail.com", "password": "tymczasowe123"},

];

const chart = {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
    }, {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
    }, {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
    }, {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
    }, {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
    }]
};

app.get('/', (request, response) => {
    response.send('Startowa strona :D')
});

app.get('/api/users', (request, response) => {
    response.send(usersTable)
});

app.get('/api/users/:id', (request, response) => {
    const userID = request.params.id;

    if(userID >= 0 && userID < usersTable.length) {
        response.send(usersTable[userID]);
    } else {
        response.send(`Nie ma takiego użytkownika z takim ID -> ${userID}`)
    }
});

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/continents', (request, response) => {
    response.render(__dirname + '/index.html', {
        subject: 'Technologie webowe w aplikacjach internetu rzeczy',
        randomText: 'Siemanko, witajcie w mojej kuchni',
        chart: JSON.stringify(chart)
    });
});


app.listen(config.port, function() {
    console.log(`Server is running at port ${config.port}`);
})