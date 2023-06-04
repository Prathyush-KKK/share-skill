import React, { useState, useEffect } from 'react';
import Card from '../ui/Cards';
import { Flex, Spacer, Wrap, WrapItem } from '@chakra-ui/react';

import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6VRfKh4Ct4lXO60oWxRf46d2bI2dIHpg",
  authDomain: "shareskill-866a0.firebaseapp.com",
  databaseURL: "https://shareskill-866a0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shareskill-866a0",
  storageBucket: "shareskill-866a0.appspot.com",
  messagingSenderId: "767154175076",
  appId: "1:767154175076:web:216f9a2bb7dd7240ad7371"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



const CardList = () => {
  const [chakraCards, setChakraCards] = useState([]);

  useEffect(() => {
    const fetchChakraCards = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'Cards'));
        const cards = snapshot.docs.map((doc) => {
          // console.log(doc.data()); // Print the document data
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            description: data.description,
            price: data.price,
          };
        });
        setChakraCards(cards);
        // console.log(chakraCards);
      } catch (error) {
        console.error('Error fetching chakra cards:', error);
      }
    };

    fetchChakraCards();
  }, []);

  return (
    <>
      <Flex justify="center">
        <Wrap spacing="4" justify="center">
          {/* <Card />
          <Card />
          <Card /> */}
          {/* <Card /> */}
          {chakraCards.map(card => (
            console.log(card.title),
            <Card title={card.title} description={card.description} price={card.price} />
          ))}

        </Wrap>
      </Flex>
    </>
  );


};

export default CardList;