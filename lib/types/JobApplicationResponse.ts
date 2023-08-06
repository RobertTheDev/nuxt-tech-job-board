import JobApplication from './JobApplication';

enum JobApplicationResponseStatus {
  'In-Progress',
  'Accepted',
  'Declined',
}

export default interface JobApplicationResponse {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  jobApplication: JobApplication;
  jobApplicationId: string;
  status: JobApplicationResponseStatus;
  message?: string;
}
