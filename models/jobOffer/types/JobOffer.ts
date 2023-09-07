import JobPost from '../../jobPost/types/JobPost';

export default interface JobOffer {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  jobPostId: string;
  jobPost: JobPost;
  userId: string;
  user: string;
}
