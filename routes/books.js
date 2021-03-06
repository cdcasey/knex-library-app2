const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
    knex('books')
        .select('*')
        .then((books) => {
            res.status(200).render('books', { books })
        })
        .catch((err) => {
            next(err)
        });
});

router.get('/create', (req, res, next) => {
    res.status(200).render('bookscreate')
        .catch((err) => {
            next(err);
        });
});

router.delete('/:id', (req, res) => {
  knex('books')
    .where('id', req.params.id)
    .del()
    .then(function (book){
      res.redirect('/books')
    })
});

module.exports = router;
