import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
// import { useFirestore } from 'reactfire';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import { collection, addDoc, getFirestore } from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

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

const SimpleForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        keywords: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // const firestore = useFirestore();
    const cardsCollection = collection(db, 'Cards');

    useEffect(() => {
        // Reset the form when the modal is closed
        if (!isOpen) {
            setFormData({
                title: '',
                description: '',
                price: '',
                location: '',
                keywords: '',
            });
            setIsSubmitted(false);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create a new document in the "Cards" collection
            await addDoc(cardsCollection, {
                title: formData.title,
                description: formData.description,
                price: formData.price,
                location: formData.location,
                keywords: formData.keywords,
            });
            console.log(formData); // You can perform further actions with the form data
            setIsSubmitted(true);
            window.location.reload();
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    const handleViewProfile = () => {
        console.log('View in profile'); // Replace this with your desired action
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Submitted!</ModalHeader>
                <ModalBody>
                    {isSubmitted ? (
                        <>
                            <Button colorScheme="blue" mb={4} onClick={handleViewProfile}>
                                View in Profile
                            </Button>
                            <Button paddingLeft={4} mb={4} colorScheme="gray" onClick={onClose}>
                                Close
                            </Button>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <FormControl mb={4}>
                                <FormLabel>Title:</FormLabel>
                                <Input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Description:</FormLabel>
                                <Textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></Textarea>
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Price:</FormLabel>
                                <Input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Location:</FormLabel>
                                <Input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Keywords:</FormLabel>
                                <Input
                                    type="text"
                                    name="keywords"
                                    value={formData.keywords}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <Button colorScheme="blue" type="submit" mr={3}>
                                Submit
                            </Button>
                            <Button onClick={onClose}>Close</Button>
                        </form>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default SimpleForm;
