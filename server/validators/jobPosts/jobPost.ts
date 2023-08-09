const jobPost = [
  {
    _id: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    title: '',
    description: '',
    deadlineDate: new Date(),
    published: false,
    companyId: '',
    applicants: 0,
    skills: [],
    contract: {
      type: '',
      level: '',
      salary: {
        rate: '',
        min: 0,
        max: 0,
      },
    },
    location: {
      type: '',
      address: {
        fullName: '',
        streetAddress: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      },
    },
  },
];

export default jobPost;
