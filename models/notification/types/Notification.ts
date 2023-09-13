import Company from '@/models/company/types/Company';
import JobPost from '@/models/jobPost/types/JobPost';
import User from '@/models/user/types/User';

export default interface Notification {
  id: string;
  createdAt: Date;
  type: string;
  companyId: string | null;
  jobPostId: string | null;
  userId: string | null;
  company: Company | null;
  jobPost: JobPost | null;
  user: User | null;
}
