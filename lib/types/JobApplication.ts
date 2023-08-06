import JobApplicationResponse from './JobApplicationResponse';
import JobPost from './JobPost';
import User from './User';

export default interface JobApplication {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  jobPost: JobPost;
  jobPostId: string;
  responses?: JobApplicationResponse[];
  user: User;
  userId: string;
}
