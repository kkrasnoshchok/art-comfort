import { Question } from '@/components/quiz/types';

export const questions: Question[] = [
  {
    id: 1,
    question: 'What type of air conditioning or service do you need?',
    options: [
      { value: 'home', label: 'Air conditioning for your home' },
      { value: 'business', label: 'Air conditioning for your business' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 2,
    condition: (answers) => answers[1]?.value === 'home',
    question: 'How many rooms do you want to air condition?',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: 'more-than-4', label: 'More than 4', input: 'number' },
    ],
  },
  {
    id: 3,
    condition: (answers) => answers[1]?.value === 'home',
    question: 'What is the area to be air-conditioned?',
    options: [
      { value: '0-20', label: 'Do 20 m²' },
      { value: '21-41', label: '21-41 m²' },
      { value: '41-70', label: '41-70 m²' },
      { value: '71-100', label: '71-100 m²' },
      { value: 'more-than-100', label: 'More than 100 m²', input: 'number' },
    ],
  },
  {
    id: 4,
    condition: (answers) => answers[1]?.value === 'business',
    question: 'Where do you want to install an air conditioner?',
    options: [
      { value: 'commercial', label: 'Commercial and retail premises' },
      { value: 'office', label: 'Office premises' },
      { value: 'public', label: 'Public building' },
      { value: 'industrial', label: 'Industrial building' },
      { value: 'other', label: 'Other', input: 'text' },
    ],
  },
  {
    id: 5,
    condition: (answers) => answers[1]?.value === 'home',
    question: 'Where do you want to install an air conditioner?',
    options: [
      { value: 'flat', label: 'Flat' },
      { value: 'single-family', label: 'Single-family house' },
      { value: 'semi-detached', label: 'Semi-detached or terraced house' },
      { value: 'other', label: 'Other', input: 'text' },
    ],
  },
  {
    id: 6,
    condition: (answers) => answers[1]?.value === 'home',
    question: 'What kind of air conditioning do you want to install?',
    options: [
      { value: 'wall', label: 'Wall air conditioning' },
      { value: 'ceiling', label: 'Ceiling air conditioning (cassette)' },
      { value: 'ducted', label: 'Ducted air conditioning' },
      { value: 'recommended', label: 'System recommended by the Contractor' },
      { value: 'other', label: 'Other', input: 'text' },
    ],
  },
  {
    id: 7,
    condition: (answers) =>
      answers[1]?.value === 'home' || answers[1]?.value === 'business',
    question: 'If you wish, you can provide more details:',
    options: [{ value: 'details', label: 'Details', input: 'text' }],
  },
  {
    id: 8,
    condition: (answers) => answers[1]?.value !== 'other',
    question: 'When do you plan to make your purchase?',
    options: [
      { value: 'immediately', label: 'Possibly immediately' },
      { value: 'within-a-month', label: 'Within a month' },
    ],
  },
  {
    id: 9,
    condition: (answers) => answers[1]?.value !== 'other',
    question: 'What locality are the offers to be made?',
    options: [{ value: 'location', label: 'Location', input: 'text' }],
  },
  {
    id: 10,
    question: 'Please provide us with your contacts',
    options: [
      { value: 'email', label: 'Email', input: 'text' },
      { value: 'phone', label: 'Phone', input: 'text' },
    ],
  },
];
