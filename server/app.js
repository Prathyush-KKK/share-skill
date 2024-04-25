const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');

const admin = require("firebase-admin");

const serviceAccount = require("./key.json");
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

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shareskill-866a0-default-rtdb.asia-southeast1.firebasedatabase.app"
});
app.use(cors());

// Endpoint to fetch all data from a collection
app.get('/api/data/:collectionName', async (req, res) => {
    const collectionName = req.params.collectionName;
    const collectionRef = db.collection(collectionName);

    try {
        const snapshot = await collectionRef.get(); 
        const data = snapshot.docs.map(doc => {
            const docData = doc.data();
            return { id: doc.id, ...docData };
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



app.post('/api/data/:collectionName', async (req, res) => {
    const collectionName = req.params.collectionName;
    const data = req.body;

    try {
        const newDocRef = await db.collection(collectionName).add(data);
        res.json({ message: `Document added with ID: ${newDocRef.id}` });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding data');
    }
});

app.post('/api/signup', async (req, res) => {
    const { email, password, name } = req.body;  // Assuming required fields

    try {
        const userRecord = await admin.auth().createUser({
            email,
            emailVerified: false, // Set to false unless you require email verification
            password
        });

        const userData = {
            uid: userRecord.uid,
            name,
            email
        };

        const userRef = db.collection('users').doc(userRecord.uid);
        await userRef.set(userData);

        res.json({ message: 'Signup successful!', uid: userRecord.uid });
    } catch (error) {
        console.error(error);
        res.status(400).send('Signup failed');  // Generic error for now
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
        const user = await admin.auth().getUser(userCredential.user.uid);

        res.json({ message: 'Login successful!', uid: user.uid });
    } catch (error) {
        console.error(error);
        res.status(401).send('Login failed');
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


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})