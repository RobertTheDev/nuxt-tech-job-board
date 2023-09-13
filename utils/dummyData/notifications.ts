import Notification from '@/models/notification/types/Notification';

const notifications: Notification[] = [
  {
    id: '1',
    createdAt: new Date(),
    type: 'newJobPost',
    companyId: null,
    jobPostId: null,
    userId: null,
    company: null,
    jobPost: null,
    user: null,
  },
];

export default notifications;
