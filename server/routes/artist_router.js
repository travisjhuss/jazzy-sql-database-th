const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    // console.log(`In /songs GET`);
    // res.send(artistList);
    const queryText = `SELECT * FROM "artist" ORDER BY "name" ASC`; 
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
    // artistList.push(req.body);
    // res.sendStatus(201);
    const queryText = `
        INSERT INTO "artist" ("name", "birthdate")
        VALUES ($1, $2);
    `;
    pool.query(queryText, [req.body.name, req.body.birthdate])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        }); // end pool.query
});

module.exports = router;