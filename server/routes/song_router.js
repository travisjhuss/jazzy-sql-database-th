const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    // console.log(`In /songs GET`);
    // res.send(songList);
    const queryText = `SELECT * FROM "song" ORDER BY "title" ASC`; 
    pool.query(queryText)
        .then((result) => {
            //console.log(result.rows);
            res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    }); // end pool.query
});

router.post('/', (req, res) => {
    // songList.push(req.body);
    // res.sendStatus(201);
    const queryText = `
        INSERT INTO "song" ("title", "length", "released")
        VALUES ($1, $2, $3);
    `;
    pool.query(queryText, [req.body.title, req.body.length, req.body.released])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        }); // end pool.query
});

module.exports = router;