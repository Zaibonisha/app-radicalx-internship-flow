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
  
  // Save the payload to Firebase
  const collectionRef = db.collection('payloads');
  collectionRef.add(payload)
    .then(() => {
      res.send('Payload saved successfully');
    })
    .catch((error) => {
      res.status(500).send('Error saving payload');
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
