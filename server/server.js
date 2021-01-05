const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const pool = require('./modules/pool');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// bring in routers
let artistRouter = require('./routes/artist_router');
app.use('/artist', artistRouter);

let songRouter = require('./routes/song_router');
app.use('/song', songRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

// TODO - Replace static content with a database tables
// const artistList = [ 
//     {
//         name: 'Ella Fitzgerald',
//         birthdate: '04-25-1917'
//     },
//     {
//         name: 'Dave Brubeck',
//         birthdate: '12-06-1920'
//     },       
//     {
//         name: 'Miles Davis',
//         birthdate: '05-26-1926'
//     },
//     {
//         name: 'Esperanza Spalding',
//         birthdate: '10-18-1984'
//     },
// ]
// const songList = [
//     {
//         title: 'Take Five',
//         length: '5:24',
//         released: '1959-09-29'
//     },
//     {
//         title: 'So What',
//         length: '9:22',
//         released: '1959-08-17'
//     },
//     {
//         title: 'Black Gold',
//         length: '5:17',
//         released: '2012-02-01'
//     }
// ];

// app.get('/artist', (req, res) => {
//     // console.log(`In /songs GET`);
//     // res.send(artistList);
//     const queryText = `SELECT * FROM "artist" ORDER BY "name" ASC`; 
//     pool.query(queryText)
//         .then((result) => {
//             //console.log(result.rows);
//             res.send(result.rows);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     }); // end pool.query
// });

// app.post('/artist', (req, res) => {
//     // artistList.push(req.body);
//     // res.sendStatus(201);
//     const queryText = `
//         INSERT INTO "artist" ("name", "birthdate")
//         VALUES ($1, $2);
//     `;
//     pool.query(queryText, [req.body.name, req.body.birthdate])
//         .then((result) => {
//             res.sendStatus(201);
//         }).catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         }); // end pool.query
// });

// app.get('/song', (req, res) => {
//     // console.log(`In /songs GET`);
//     // res.send(songList);
//     const queryText = `SELECT * FROM "song" ORDER BY "title" ASC`; 
//     pool.query(queryText)
//         .then((result) => {
//             //console.log(result.rows);
//             res.send(result.rows);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     }); // end pool.query
// });

// app.post('/song', (req, res) => {
//     // songList.push(req.body);
//     // res.sendStatus(201);
//     const queryText = `
//         INSERT INTO "song" ("title", "length", "released")
//         VALUES ($1, $2, $3);
//     `;
//     pool.query(queryText, [req.body.title, req.body.length, req.body.released])
//         .then((result) => {
//             res.sendStatus(201);
//         }).catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         }); // end pool.query
// });


