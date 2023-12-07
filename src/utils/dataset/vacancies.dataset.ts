export type Vacancy = {
  id: string;
  jobTitle: string;
  location: string;
  shortDescription: string;
  longDescription: string;
};

type VacancyColumn = {
  key: keyof Vacancy;
  header: string;
};

export const vacanciesColumns: VacancyColumn[] = [
  { key: 'jobTitle', header: 'Назва Вакансії' },
  { key: 'location', header: 'Локація' },
  { key: 'shortDescription', header: 'Короткий опис' },
];

export const vacancies: Vacancy[] = [
  {
    id: '1a2b3c4d5e',
    jobTitle: 'Software Developer',
    location: 'New York, NY',
    shortDescription: 'Develop and maintain software applications.',
    longDescription:
      'We are seeking a skilled Software Developer to join our team in New York, NY. In this role, you will be responsible for designing, coding, testing, and debugging software applications. You will collaborate with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    id: '2b3c4d5e6f',
    jobTitle: 'Data Scientist',
    location: 'San Francisco, CA',
    shortDescription: 'Analyze and interpret data to drive business insights.',
    longDescription:
      'Data Analytics Corp. is looking for a talented Data Scientist in San Francisco, CA. As a Data Scientist, you will work on a variety of data analysis projects, leveraging machine learning and statistical techniques to extract valuable insights from large datasets. Join our dynamic team and contribute to data-driven decision-making.',
  },
  {
    id: '3c4d5e6f7g',
    jobTitle: 'UX Designer',
    location: 'Los Angeles, CA',
    shortDescription:
      'Create intuitive and visually appealing user interfaces.',
    longDescription:
      'Design Innovations Ltd. is hiring a UX Designer in Los Angeles, CA. As a UX Designer, you will be responsible for crafting user-friendly and visually engaging interfaces. Your work will involve user research, wireframing, prototyping, and collaborating with development teams to bring your designs to life.',
  },
  {
    id: '1',
    jobTitle: 'Frontend Developer',
    location: 'San Francisco, CA',
    shortDescription: 'Create beautiful and interactive user interfaces.',
    longDescription:
      'We are looking for a talented Frontend Developer to join our team in San Francisco. You will be responsible for building responsive and visually appealing web applications using modern frontend technologies.',
  },
  {
    id: '2',
    jobTitle: 'Backend Developer',
    location: 'New York, NY',
    shortDescription: 'Develop server-side logic for applications.',
    longDescription:
      'Join our team in New York and work on building scalable and efficient backend solutions for our applications. We are seeking an experienced Backend Developer to help us achieve our goals.',
  },
  {
    id: '3',
    jobTitle: 'Data Analyst',
    location: 'Chicago, IL',
    shortDescription: 'Analyze data and generate insights.',
    longDescription:
      'Are you passionate about data analysis? Join us in Chicago as a Data Analyst, where you will work with large datasets to uncover valuable insights that drive business decisions.',
  },
  {
    id: '4',
    jobTitle: 'UI/UX Designer',
    location: 'Los Angeles, CA',
    shortDescription: 'Design intuitive and user-friendly interfaces.',
    longDescription:
      'We are looking for a creative UI/UX Designer to join our design team in Los Angeles. You will play a key role in designing beautiful and intuitive user interfaces for our digital products.',
  },
  {
    id: '5',
    jobTitle: 'Product Manager',
    location: 'Seattle, WA',
    shortDescription: 'Lead product development and strategy.',
    longDescription:
      'As a Product Manager in Seattle, you will be responsible for driving product development and strategy. Join our dynamic team and help shape the future of our products.',
  },
  {
    id: '6',
    jobTitle: 'Marketing Specialist',
    location: 'Miami, FL',
    shortDescription: 'Create and implement marketing campaigns.',
    longDescription:
      'Join our marketing team in Miami as a Marketing Specialist. You will have the opportunity to create and implement marketing campaigns that promote our products and brand.',
  },
  {
    id: '7',
    jobTitle: 'DevOps Engineer',
    location: 'Austin, TX',
    shortDescription: 'Manage and automate infrastructure.',
    longDescription:
      'Are you passionate about DevOps and automation? Join our team in Austin as a DevOps Engineer, where you will manage and automate our infrastructure to ensure high availability and scalability.',
  },
  {
    id: '8',
    jobTitle: 'Software Tester',
    location: 'Denver, CO',
    shortDescription: 'Ensure the quality of software products.',
    longDescription:
      'We are seeking a Software Tester in Denver to ensure the quality of our software products. Join our QA team and work on testing and identifying issues to deliver reliable software.',
  },
  {
    id: '9',
    jobTitle: 'Graphic Designer',
    location: 'Portland, OR',
    shortDescription: 'Create visually appealing graphics and visuals.',
    longDescription:
      'Join our design team in Portland as a Graphic Designer. You will be responsible for creating visually appealing graphics and visuals that enhance our brand and products.',
  },
  {
    id: '10',
    jobTitle: 'Content Writer',
    location: 'Boston, MA',
    shortDescription: 'Create engaging and informative content.',
    longDescription:
      'Do you have a passion for writing? Join us in Boston as a Content Writer, where you will create engaging and informative content that resonates with our audience and customers.',
  },
];
