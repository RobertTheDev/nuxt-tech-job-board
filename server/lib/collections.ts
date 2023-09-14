import mongoClient from '../db/mongoClient';

export const candidatesCollection = mongoClient.collection('candidates');

export const companiesCollection = mongoClient.collection('companies');

export const companyFollowersCollection =
  mongoClient.collection('companyFollowers');

export const companyOwnersCollection = mongoClient.collection('companyOwners');

export const jobApplicationsCollection =
  mongoClient.collection('jobApplications');

export const jobInterviewsCollection = mongoClient.collection('jobInterviews');

export const jobOffersCollection = mongoClient.collection('jobOffers');

export const jobPostsCollection = mongoClient.collection('jobPosts');

export const notificationsCollection = mongoClient.collection('notifications');

export const savedJobPostsCollection = mongoClient.collection('savedJobPosts');

export const usersCollection = mongoClient.collection('users');
