import mongoClient from '../db/mongoClient';

export const applicationsCollection = mongoClient.collection('applications');

export const companiesCollection = mongoClient.collection('companies');

export const jobPostsCollection = mongoClient.collection('jobPosts');

export const savedJobsCollection = mongoClient.collection('savedJobs');

export const usersCollection = mongoClient.collection('users');
