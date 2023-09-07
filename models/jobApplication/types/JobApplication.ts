import JobApplicationResponse from './JobApplicationResponse';
import JobPost from '../../jobPost/types/JobPost';
import User from '../../user/types/User';

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
