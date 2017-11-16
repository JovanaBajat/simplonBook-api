import express from 'express';
import Book from '../model/modelBook';

const router = express.Router();

// simplonBook

router.get('/', (req, res) => {
  Book.find({}, (err, books) => {
    if(err) res.send(err)
    res.send(books)
  });
});

// simplonBook/addBook

router.post('/addBook', (req, res) => {
  const book = new Book(req.body)

  book.save((err) => {
    if(err) res.redirect('http://localhost:3000/')
    res.redirect('http://localhost:3000/')
  });
});

// simplonBook/:id/update

router.post('/:id/update', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, err => {
    if(err) res.send(err)
    res.json({
      message : "book updated"
    });
  });
});

// simplonBook//id/delete

router.get('/:id/delete', (req,res) => {
  Book.findByIdAndRemove(req.params.id, err => {
    if(err) res.send(err)
    res.redirect('http://localhost:3000/')
  });
});

export default router;
