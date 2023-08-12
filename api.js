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

const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/api/prices') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(prices));
    }
    else if (req.url === '/api/weights') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(weights));
    }
    else if (req.url === '/api/kuntiks') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(kuntiks));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
