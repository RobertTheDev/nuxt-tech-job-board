import JobPost from '../../jobPost/types/JobPost';
import User from '../../user/types/User';
import JobApplicationResponse from './JobApplicationResponse';

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
