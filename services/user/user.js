const express = require('express')
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json());
const port = 3002
const heroes = [
  {
      id: 1,
      type: 'spider-dog',
      displayName: 'Cooper',
      powers: [1, 4],
      img: 'cooper.jpg',
      busy: false
  },
  {
      id: 2,
      type: 'flying-dogs',
      displayName: 'Jack & Buddy',
      powers: [2, 5],
      img: 'jack_buddy.jpg',
      busy: false
  },
  {
      id: 3,
      type: 'dark-light-side',
      displayName: 'Max & Charlie',
      powers: [3, 2],
      img: 'max_charlie.jpg',
      busy: false
  },
  {
      id: 4,
      type: 'captain-dog',
      displayName: 'Rocky',
      powers: [1, 5],
      img: 'rocky.jpg',
      busy: false
  }
];

app.get('/api/heroes', (req, res) => {
  console.log('Returning heroes list');
  res.send(heroes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})