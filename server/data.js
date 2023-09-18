const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Sample data (replace with your actual data fetching logic)
const officerAdviceData = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    slot1: 'Slot A',
    slot2: 'Slot B',
    slot3: 'Slot C',
    slot4: 'Slot D',
    sendLink: 'Link 1',
    start: 'Start 1',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    slot1: 'Slot E',
    slot2: 'Slot F',
    slot3: 'Slot G',
    slot4: 'Slot H',
    sendLink: 'Link 2',
    start: 'Start 2',
  }
 
];


app.get('/officer_advice', (req, res) => {
  res.json(officerAdviceData);
});

app.listen(3005, () => {
  console.log('Data Server is running on port 3005');
});
