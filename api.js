import {kuntiks, prices, weights} from "./db";

const pricesList = new Promise(function (resolve){
    resolve(prices)
})
const weightList = new Promise(function (resolve){
    resolve(weights)
})
const kuntiksList = new Promise(function (resolve){
    resolve(kuntiks)
})
const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/prices') {
        res.setHeader('Content-Type', 'application/json');
        res.end(prices);
    } else {
        res.statusCode = 404;
        res.end();
    }
});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
