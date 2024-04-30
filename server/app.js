const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');

const admin = require("firebase-admin");

const serviceAccount = require("./key.json");



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shareskill-866a0-default-rtdb.asia-southeast1.firebasedatabase.app"
});
app.use(cors());
const db = admin.firestore();

// Endpoint to get the current user's data
app.get('/api/current-user', async (req, res) => {
    // Check if there is a user authenticated in the request
    if (!req.user) {
        return res.status(401).send('User not authenticated');
    }

    // Get the UID of the authenticated user
    const uid = req.user.uid;

    try {
        // Fetch the user document from Firestore using the UID
        const userDoc = await db.collection('users').doc(uid).get();

        if (!userDoc.exists) {
            return res.status(404).send('No such user');
        }

        // Return the user data
        res.json(userDoc.data());
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching user');
    }
});
// Endpoint to fetch all data from a collection
app.get('/api/data/', async (req, res) => {
    const collectionName = req.params.collectionName;
    const collectionRef = db.collection("Cards");

    try {
        const snapshot = await collectionRef.get();
        const data = snapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

// Endpoint to delete a card
app.delete('/api/cards/:cardId', async (req, res) => {
    const cardId = req.params.cardId;

    try {
        // Check if the card exists
        const cardDoc = await db.collection('Cards').doc(cardId).get();
        if (!cardDoc.exists) {
            return res.status(404).send('Card not found');
        }

        // Delete the card
        await db.collection('Cards').doc(cardId).delete();
        res.json({ message: `Card with ID ${cardId} deleted successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting card');
    }
});


app.post('/api/data/', async (req, res) => {
    const collectionName = req.params.collectionName;
    const data = req.body;

    try {
        const newDocRef = await db.collection("Cards").add(data);
        res.json({ message: `Document added with ID: ${newDocRef.id}` });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding data');
    }
});

app.put('/api/data/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        await db.collection('Cards').doc(id).update(data);
        res.json({ message: 'Card data updated' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating card data');
    }
});

app.get('/api/user/:uid', async (req, res) => {
    const uid = req.params.uid;

    try {
        const userDoc = await db.collection('users').doc(uid).get();

        if (!userDoc.exists) {
            return res.status(404).send('No such user');
        }

        res.json(userDoc.data());
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching user');
    }
});

// Endpoint to update user data
app.put('/api/user/:uid', async (req, res) => {
    const uid = req.params.uid;
    const data = req.body;

    try {
        await db.collection('users').doc(uid).update(data);
        res.json({ message: 'User data updated' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating user data');
    }
});

// Endpoint to accept a job
app.post('/api/jobs', async (req, res) => {
    const data = req.body;

  try {
    const newDocRef = await db.collection('jobs').add(data);
    res.json({ message: `Job added with ID: ${newDocRef.id}` });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding job');
  }
});

app.put('/api/complete/:docId', async (req, res) => {
    const docId = req.params.docId;
    const uid = req.body.uid;

    try {
        const docRef = db.collection('Cards').doc(docId);
        const doc = await docRef.get();

        if (!doc.exists) {
            return res.status(404).send('Document not found');
        }

        const cardData = doc.data();

        // Check if 'complete' or 'complete2' key exists
        if (cardData.hasOwnProperty('complete') && cardData.hasOwnProperty('complete2')) {
            // Both keys already exist, change status to 'complete'
            await docRef.update({ status: 'complete' });
            res.json({ message: 'Status updated to complete' });
        } else {
            // Add uid to 'complete' or 'complete2' key
            const updateData = cardData.hasOwnProperty('complete') ? { complete2: uid } : { complete: uid };
            await docRef.update(updateData);
            res.json({ message: 'Uid added to completion list' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error completing card');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

