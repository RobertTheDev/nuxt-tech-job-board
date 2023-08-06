import JobPost from './JobPost';
import User from './User';

export default interface SavedJobPost {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  jobPostId: string;
  jobPost: JobPost;
  userId: string;
  user: User;
}
