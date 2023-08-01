import mongoClient from '../db/mongoClient';

export const applicationsCollection = mongoClient.collection('applications');

export const companiesCollection = mongoClient.collection('companies');

export const companyFollowersCollection =
  mongoClient.collection('company-followers');

export const companyOwnersCollection = mongoClient.collection('companyOwners');

export const jobInterviewsCollection = mongoClient.collection('jobInterviews');

export const jobOffersCollection = mongoClient.collection('jobOffers');

export const jobPostsCollection = mongoClient.collection('jobPosts');

export const notificationsCollection = mongoClient.collection('notifications');

export const savedJobPostsCollection = mongoClient.collection('savedJobPosts');

export const usersCollection = mongoClient.collection('users');
