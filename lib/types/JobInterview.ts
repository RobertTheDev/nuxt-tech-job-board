import JobPost from './JobPost';

export default interface JobInterview {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  interviewDate: Date;
  jobPostId: string;
  jobPost: JobPost;
}
