const prices = {
    "wood": 200,
    "iron": 300,
    "steel": 400,
    "diamond": 1200,
    "gold": 800,
    "S": 10,
    "M": 12,
    "L": 14,
    "XL": 17,
    "XXL": 20,
    "XXXL": 25,
    "red": 300,
    "tiger": 800,
    "rainbow": 1600,
    "golden": 1200,
    "silver": 900,
    "cooper": 600,
    "black": 700,
    "skyblue": 1000
};
const weights = {
    "wood": 30,
    "iron": 70,
    "steel": 90,
    "diamond": 50,
    "gold": 110,
    "S": 10,
    "M": 12,
    "L": 14,
    "XL": 17,
    "XXL": 20,
    "XXXL": 25,
    "red": 10,
    "tiger": 20,
    "rainbow": 30,
    "golden": 30,
    "silver": 10,
    "cooper": 15,
    "black": 10,
    "skyblue": 15
};
const quality = {
    "wood": 1,
    "iron": 1,
    "steel": 2,
    "diamond": 5,
    "gold": 4,
    "S": 1,
    "M": 1,
    "L": 1,
    "XL": 1,
    "XXL": 1,
    "XXXL": 1,
    "red": 1,
    "tiger": 3,
    "rainbow": 5,
    "golden": 4,
    "silver": 3,
    "cooper": 2,
    "black": 3,
    "skyblue": 4
}
const kuntiks = [
    {
        "id": 1,
        "material": "wood",
        "size": "XL",
        "color": "red",
        "popular": 10
    },
    {
        "id": 2,
        "material": "gold",
        "size": "M",
        "color": "skyblue",
        "popular": 7
    },
    {
        "id": 3,
        "material": "wood",
        "size": "XL",
        "color": "silver",
        "popular": 11
    },
    {
        "id": 4,
        "material": "cooper",
        "size": "XL",
        "color": "tiger",
        "popular": 14
    },
    {
        "id": 5,
        "material": "diamond",
        "size": "XXL",
        "color": "tiger",
        "popular": 45
    },
    {
        "id": 6,
        "material": "steel",
        "size": "XXXL",
        "color": "rainbow",
        "popular": 7
    },
    {
        "id": 7,
        "material": "wood",
        "size": "XL",
        "color": "golden",
        "popular": 5
    },
    {
        "id": 8,
        "material": "cooper",
        "size": "S",
        "color": "silver",
        "popular": 23
    },
    {
        "id": 9,
        "material": "gold",
        "size": "M",
        "color": "black",
        "popular": 1
    }
];

var idCounter = 3
var tasks = [
    {
        "id": 0,
        "taskText": "Hello guys!",
        "isDone": true
    },
    {
        "id": 1,
        "taskText": "To do this!",
        "isDone": false
    },
    {
        "id": 2,
        "taskText": "Do something",
        "isDone": false
    }
]
var login = [
    {
        "login": "123",
        "password": "123"
    },
]
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/login', (req, res) => {
    const user = login.find(user => user.login === req.body.login && user.password === req.body.password);
    if (user) {
        res.status(200).send()
    } else {
        res.status(401).send()
    }
});
app.get('/tasks', (req, res) => {
    const isDoneQueryParam = req.query.isDone;

    let filteredTasks = tasks;
    if (isDoneQueryParam !== undefined) {
        const isDone = isDoneQueryParam.toLowerCase() === 'true';
        filteredTasks = tasks.filter(task => task.isDone === isDone);
    }
    if (isDoneQueryParam !== undefined) {
        const isDone = isDoneQueryParam.toLowerCase() === 'false';
        filteredTasks = tasks.filter(task => task.isDone === isDone);
    }
    res.json(filteredTasks);
});
app.post('/tasks', (req, res) => {
    const task = req.body;
    task.id = idCounter;
    idCounter += 1;
    tasks.push(task);
    res.status(200).send();
});
app.delete('/tasks/:id', (req, res) => {
    const idToRemove = parseInt(req.params.id);
    tasks = tasks.filter(obj => obj.id !== idToRemove);
    res.status(200).send();
});
app.patch('/tasks/:id', (req, res) => {
    const idToChange = parseInt(req.params.id);
    const index = tasks.findIndex(function(obj) {
        return obj.id === idToChange;
    });
    const obj = req.body
    obj.isDone = !obj.isDone
    // если объект с заданным ID найден, обновляем его
    if (index !== -1) {
        tasks[index] = obj;
    }
    res.status(200).send();
});

app.get('/quality', (req, res) => {
    res.json(quality);
});
app.get('/prices', (req, res) => {
    res.json(prices);
});
app.get('/weights', (req, res) => {
    res.json(weights);
});
app.get('/kuntiks', (req, res) => {
    res.json(kuntiks);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
