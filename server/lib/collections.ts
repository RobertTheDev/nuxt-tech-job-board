import mongoClient from '../db/mongoClient';

export const usersCollection = mongoClient.collection('users');
