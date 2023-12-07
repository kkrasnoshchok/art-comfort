import { StaticImageData } from 'next/image';

import coolingSystem from '@/assets/Projects_1.jpg';
import hvacRetrofitting from '@/assets/Projects_2.jpg';
import industrialEnhancement from '@/assets/Projects_3.jpg';
import smartThermostat from '@/assets/Projects_4.jpg';
import emergencyRepair from '@/assets/Projects_5.jpg';

type Project = {
  title: string;
  year: string;
  details: string;
  longDetails: string;
  url: StaticImageData;
};

export const projects: Project[] = [
  {
    title: 'Residential Cooling System Installation',
    year: '2022',
    details:
      'Installed energy-efficient cooling systems for residential buildings, ensuring comfortable living environments during hot summers.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Commercial HVAC Retrofitting',
    year: '2023',
    details:
      'Upgraded the HVAC systems of multiple commercial buildings, resulting in reduced energy consumption and lower operating costs.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: hvacRetrofitting,
  },
  {
    title: 'Industrial Ventilation Enhancement',
    year: '2021',
    details:
      'Implemented advanced ventilation solutions for industrial facilities, improving air quality and worker safety.',

    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: industrialEnhancement,
  },
  {
    title: 'Smart Thermostat Integration',
    year: '2023',
    details:
      'Integrated smart thermostat technology into various properties, enabling remote temperature control and energy optimization.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: smartThermostat,
  },
  {
    title: 'Emergency HVAC Repair',
    year: '2022',
    details:
      'Provided emergency repair services for HVAC systems, minimizing downtime and restoring indoor comfort quickly.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: emergencyRepair,
  },
  {
    title: 'Energy-Efficient Lighting Installation',
    year: '2022',
    details:
      'Implemented energy-efficient lighting solutions for residential and commercial spaces, reducing electricity consumption.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Solar Panel Installation',
    year: '2021',
    details:
      'Installed solar panels on rooftops, harnessing renewable energy and promoting sustainability in power consumption.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Building Automation System Upgrade',
    year: '2023',
    details:
      'Upgraded building automation systems for improved control over heating, cooling, lighting, and security.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Geothermal HVAC System Implementation',
    year: '2022',
    details:
      'Implemented geothermal HVAC systems, utilizing the earth’s natural heat to provide efficient heating and cooling.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Energy Audit and Efficiency Consulting',
    year: '2021',
    details:
      'Conducted energy audits for various properties, providing recommendations for energy efficiency improvements.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Air Purification System Installation',
    year: '2023',
    details:
      'Installed advanced air purification systems to enhance indoor air quality and promote a healthier living environment.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Renewable Energy Integration',
    year: '2022',
    details:
      'Integrated renewable energy sources, such as wind and solar, into building systems for sustainable power generation.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'HVAC System Customization',
    year: '2021',
    details:
      'Customized HVAC systems based on client requirements, optimizing performance and energy efficiency.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Thermal Insulation Upgrade',
    year: '2023',
    details:
      'Upgraded thermal insulation in buildings, reducing heat loss and improving overall energy efficiency.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Smart Building Automation',
    year: '2022',
    details:
      'Implemented smart building automation solutions for centralized control and monitoring of various building systems.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'Energy-Efficient Appliance Installation',
    year: '2021',
    details:
      'Installed energy-efficient appliances to reduce electricity consumption and promote sustainability.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
  {
    title: 'HVAC System Maintenance Contracts',
    year: '2023',
    details:
      'Established HVAC system maintenance contracts, ensuring regular upkeep and optimal performance for clients.',
    longDetails:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor euismod, euismod tortor nec, ultrices nulla. Quisque mattis scelerisque sem, nec facilisis arcu efficitur ac. Vivamus bibendum euismod augue, at volutpat justo. Nulla facilisi. Nulla facilisi. Sed in urna eget sapien consectetur pharetra. Ut nec nisl mi. Integer volutpat justo vel urna gravida ultrices. Duis vestibulum hendrerit sodales. Fusce venenatis, quam ut bibendum volutpat, lectus urna congue ligula, sit amet blandit elit velit a justo.',
    url: coolingSystem,
  },
];
