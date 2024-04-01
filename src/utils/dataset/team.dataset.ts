export type TeamMember = {
  role: string;
  name?: string;
  phone: string | string[];
  email: string;
};

export const team: TeamMember[] = [
  {
    role: 'Керівник проєктів',
    name: 'Ковальчук Наталя Олександрівна',
    phone: '+380732792891',
    email: 'kovalchuk@art-comfort.com',
  },
  {
    role: 'Інженер-проєктувальник',
    name: 'Євстифеєв Андрій Олегович',
    phone: '+380509746146',
    email: 'evstifeev@art-comfort.com',
  },
  {
    role: 'Керівник проектів',
    name: 'Сотченко Олександр Валерійович',
    phone: '+380987141266',
    email: 'o.sotchenko@art-comfort.com',
  },
  {
    role: 'Начальник виробничого відділу',
    name: 'Служавий Микола Петрович',
    phone: '+380732792893',
    email: 'nikolas@art-comfort.com',
  },
  {
    role: 'Інженер з автоматизованих систем керування виробництвом',
    name: 'Страутман Антон Юрійович',
    phone: '+380663711189',
    email: 'anton.strautman@art-comfort.com',
  },
  {
    role: 'Менеджер з постачання та логістики',
    name: 'Кучеренко Артур Олександрович',
    phone: '+380639586190',
    email: 'artur@art-comfort.com',
  },
  {
    role: 'Менеджер з персоналу',
    name: 'Ялтухова Тетяна Василівна',
    phone: '+380963090322',
    email: 'hr@art-comfort.com',
  },
  {
    role: 'Бухгалтерія',
    phone: ['+380732792892', '+380732792894'],
    email: 'chernouz@art-comfort.com',
  },
];
