/* eslint-disable sonarjs/no-duplicate-string */
const jobs = [
  {
    id: '1',
    createdAt: new Date('2023-05-20T12:24:56'),
    updatedAt: null,
    deadlineDate: new Date('2023-09-20T12:34:56'),
    totalApplicants: 44,
    description:
      'L3Harris Technollogies is a Trusted Disruptor for the global aerospace and defense industry. With customers’ mission-critical needs always in mind, our 46,000 employees deliver end-to-end technology solutions connecting the space, air, land, sea and cyber domains.',
    salary: {
      currency: 'GBP',
      min: 80000,
      max: 100000,
      rate: 'daily',
    },
    reviews: {
      totalRating: 20,
      totalReviews: 5,
    },
    locationType: 'Remote',
    title: 'Software Developer',
    contractType: 'Full-time',
    skills: ['Python', 'Django', 'Flask'],
    location: {
      address: '34 London Street',
      town: 'Southamption',
      region: 'Hampshire',
      country: 'United Kingdo',
    },
    company: {
      id: '3',
      createdAt: new Date('2023-03-03T12:34:56'),
      updatedAt: new Date('2023-05-21T12:34:26'),
      location: null,
      owner: null,
      name: 'L3Harris Technologies',
      coverImage: {
        createdAt: new Date('2023-05-21T12:34:36'),
        updatedAt: new Date('2023-05-21T12:34:46'),
        url: 'https://images.unsplash.com/photo-1,531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: ' Venture UpmCover Image',
      },
      logo: {
        createdAt: new Date('2023-05-21T12:33:56'),
        updatedAt: new Date('2023-05-21T12:34:56'),
        url: 'https://media.licdn.com/dms/image/C4D0BAQEB2mPDbj_TDA/company-logo_100_100/0/1625156630923?e=1692835200&v=beta&t=KkY0cxvZAFrGBQFj7q8-L0EIl9PfGcpB-C0Z7xOcOCs',
        alt: 'L3Harris Technologies Logo',
      },
      description:
        'L3Harris Technologies is a Trusted Disruptor for global aerospace and defense industry. With customers’ mission-critical needs always in mind, our 46,000 employees deliver end-to-end technology solutions connecting the space, air, land, sea and cyber domains.',
      category: 'Defense & Space',
      totalEmployees: 10000,
      totalJobs: 24,
    },
  },

  {
    id: '3',
    createdAt: new Date('2023-05-21T12:34:56'),
    updatedAt: null,
    deadlineDate: new Date('2023-09-23T12:34:56'),
    totalApplicants: 20,
    description:
      'L3Harris Technologies is a Trusted Disruptor for global aerospace and defense industry. With customers’ mission-critical needs always in mind, our 46,000 employees deliver end-to-end technology solutions connecting the space, air, land, sea and cyber domains.',
    salary: {
      currency: 'GBP',
      min: 50000,
      max: 70000,
      rate: 'yearly',
    },
    reviews: {
      totalRating: 12,
      totalReviews: 3,
    },
    title: 'UX/UI Designer',
    contractType: 'Full-time',
    skills: ['Adobe XD', 'Sketch', 'Wireframing'],
    location: {
      address: '123 Design Avenue',
      town: 'Manchester',
      region: 'Greater Manchester',
      country: 'United Kingdon',
    },
    company: {
      id: '3',
      name: 'ClearSky Logic',
      coverImage: {
        createdAt: new Date('2023-05-21T12:34:56'),
        updatedAt: new Date('2023-05-21T12:34:56'),
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: ' Venture UpCmover Image',
      },
      logo: {
        createdAt: new Date('2023-05-21T12:34:56'),
        updatedAt: new Date('2023-05-21T12:34:56'),
        url: 'https://media.licdn.com/dms/image/D4E0BAQHP03imuSjuJw/company-logo_100_100/0/1683288811448?e=1692835200&v=beta&t=k9abdw6iJKVEdLjUNTd8odfoM1ZHU4y86ZggGvutDQ8',
        alt: 'DesignCo Logo',
      },
      description: `Our Vision
        Deliver innovation & capabilities, empowering businesses to scale globally

        Our mission is to become known as the most business outcome focused software delivery partner entirely based in the UK.`,
      category: 'Design',
      totalEmployees: 100,
      totalJobs: 16,
    },
  },

  {
    id: '4',
    createdAt: new Date('2023-05-21T12:34:56'),
    updatedAt: null,
    deadlineDate: new Date('2023-09-21T12:34:56'),
    totalApplicants: 25,
    description:
      'L3Harris Technologies is  Trusted Disruptor for the global aerospace and defense industry. With customers’ mission-critical needs always in mind, our 46,000 employees deliver end-to-end technology solutions connecting the space, air, land, sea and cyber domains.',
    salary: {
      currency: 'GBP',
      min: 60000,
      max: 80000,
      rate: 'yearly',
    },
    reviews: {
      totalRating: 18,
      totalReviews: 5,
    },
    title: 'DevOps Engineer',
    contractType: 'Full-time',
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    location: {
      address: '567 Tech Street',
      town: 'Birmingham',
      region: 'West Midlands',
      country: 'United Kingdom',
    },
    company: {
      name: 'L3Harris Technologies',
      coverImage: {
        createdAt: new Date('2023-05-21T12:34:56'),
        updatedAt: new Date('2023-05-21T12:34:56'),
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        alt: ' Venture UpCover Image',
      },
      logo: {
        createdAt: new Date('2023-05-21T12:34:56'),
        updatedAt: new Date('2023-05-21T12:34:56'),
        url: 'https://media.licdn.com/dms/image/C4D0BAQEB2mPDbj_TDA/company-logo_100_100/0/1625156630923?e=1692835200&v=beta&t=KkY0cxvZAFrGBQFj7q8-L0EIl9PfGcpB-C0Z7xOcOCs',
        alt: 'L3Harris Technologies Logo',
      },
      description:
        'L3Harris Technologies is a Trusted Disruptor for the global aerospace and defense industry. With customers’ mission-critical needs always in mind, our 46,000 employees deliver end-to-end technology solutions connecting the space, air, land, sea and cyber domains.',
      category: 'Defense & Space',
      totalEmployees: 10000,
      totalJobs: 5,
    },
  },
  {
    id: '5',
    createdAt: new Date('2023-05-21T12:34:56'),
    updatedAt: null,
    description:
      'L3Harris Technologies is a Trusted Disruptor for the global aerospace and defense industry. With customers’ mission-critical needs always in mind, our 46,000 employees deliver end-to-end technology solutions connecting the space, air, land, sea and cyber domains.',
    deadlineDate: new Date('2023-09-21T12:34:56'),
    totalApplicants: 15,
    salary: {
      currency: 'GBP',
      min: 45000,
      max: 60000,
      rate: 'yearly',
    },
    reviews: {
      totalRating: 10,
      totalReviews: 2,
    },
    title: 'Front-end Developer',
    contractType: 'Full-time',
    skills: ['HTML', 'CSS', 'JavaScript'],
    location: {
      address: '789 Web Avenue',
      town: 'Edinburgh',
      region: 'Scotland',
      country: 'United Kingdom',
    },
    company: {
      name: 'Venture Up',
      coverImage: {
        createdAt: new Date('2023-05-21T12:34:56'),
        updatedAt: new Date('2023-05-21T12:34:56'),
        url: 'src/assets/companyLogos/phylum.png',
        alt: ' Venture UpCover Image',
      },
      logo: {
        createdAt: new Date('2023-05-21T12:34:56'),
        updatedAt: new Date('2023-05-21T12:34:56'),
        url: 'https://media.licdn.com/dms/image/D560BAQFZv10VuymqoQ/company-logo_100_100/0/1665000475413?e=1692835200&v=beta&t=fq_AQtxspwXs7TY161PbrJsl-wBHu3BI0qHKIZ626f4',
        alt: 'Venture Up  Logo',
      },
      description:
        'Venture Up is more than just another tech recruiter. By matching exceptional tech talent with ambitious technology ventures, we power your growth. Whether you’re looking to step up your career or build up your tech, design or product team, Venture Up’s expertise in technology recruitment will create the connections you need to grow your business.',
      category: 'Technology',
      totalEmployees: 50,
      totalJobs: 44,
    },
  },
];

export default jobs;
