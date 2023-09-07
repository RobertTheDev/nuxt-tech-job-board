import JobPost from '../../jobPost/types/JobPost';
import User from '../../user/types/User';

export default interface SavedJobPost {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  jobPostId: string;
  jobPost: JobPost;
  userId: string;
  user: User;
}
