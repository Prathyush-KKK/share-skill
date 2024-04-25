import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, Button, Select } from '@chakra-ui/react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';
import {toast} from 'react-toastify'
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


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

    
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // No user is signed in
        setCurrentUser(null);
      }
    });

    return unsubscribe; // Cleanup function to unsubscribe from auth state changes
  }, []);

  console.log(currentUser)


    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        contact: '',
        keywords: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentUserUID, setCurrentUserUID] = useState(null); // State to store current user's UID

    const cardsCollection = collection(db, 'Cards');
    

    useEffect(() => {
        if (!isOpen) {
            setFormData({
                title: '',
                description: '',
                price: '',
                location: '',
                contact: '',
                keywords: '',
                status: '',
                uid: '',
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
            // Send data to backend API endpoint
            const response = await axios.post('http://localhost:3000/api/data/Cards', {
                title: formData.title,
                description: formData.description,
                price: formData.price,
                location: formData.location,
                contact: formData.contact,
                keywords: formData.keywords,
                status: "pending",
                uid: currentUser.uid,
            });
    
            // Handle success response
            console.log(response.data.message);
            setIsSubmitted(true);
            toast.success("success")

            onClose(); // Close the modal after submission
        } catch (error) {
            // Handle error response
            console.error('Error adding document:', error);
            toast.error("error adding listing")
        }
    };

    const handleViewProfile = () => {
        console.log('View in profile');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add your Request</ModalHeader>
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
                            {/* <FormControl mb={4}>
                                <FormLabel>Image URL:</FormLabel>
                                <Textarea
                                    name="imageURL"
                                    value={formData.title}
                                    onChange={handleChange}
                                ></Textarea>
                            </FormControl> */}
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
                                <FormLabel>Contact:</FormLabel>
                                <Input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mb={4}>
                                <FormLabel>Keywords:</FormLabel>
                                <Select
                                    name="keywords"
                                    value={formData.keywords}
                                    onChange={handleChange}
                                >
                                    <option value="Education">Education</option>
                                    <option value="Medical">Medical</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Delivery">Delivery</option>
                                    <option value="Food">Food</option>
                                    <option value="Grooming">Grooming</option>
                                    <option value="Plumbing">Plumbing</option>
                                    <option value="Carpentry">Carpentry</option>
                                    <option value="Other">Other</option>
                                </Select>
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