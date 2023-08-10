const express = require('express');
const admin = require('firebase-admin');

const app = express();
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://internship-flow-radicalx-app.web.app'
});

const db = admin.firestore();

app.use(express.json());

app.post('/', (req, res) => {
  const payload = req.body;
  console.log('Received payload:', payload); // Add this line for logging
  
  // Save the payload to Firebase
  const collectionRef = db.collection('payloads');
  collectionRef.add(payload)
    .then(() => {
      res.send('Payload saved successfully');
    })
    .catch((error) => {
      console.error('Error saving payload:', error); // Add this line for logging
      res.status(500).send('Error saving payload');
    });
});
