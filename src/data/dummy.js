import React from 'react';
import { BsInbox, BsCalendar3, BsCalendar4, BsKanban } from 'react-icons/bs';


import flagDE from '../data/de.png';
import flagEN from '../data/en.png';
import flagES from '../data/es.png';
import flagFR from '../data/fr.png';
import flagIT from '../data/it.png';
import flagPT from '../data/pt.png';



const date = new Date();
let dd = date.getDate();
if(dd < 10) dd = '0' + dd;

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Inbox',
        toast: true,
        icon: <BsInbox />,
      },
      {
        name: 'Today',
        toast: false,
        icon: <BsCalendar4 />,
        text: `${dd}`,
      },
      {
        name: 'Kanban',
        toast: true,
        icon: <BsKanban />,
      },
      {
        name: 'Upcoming',
        toast: true,
        icon: <BsCalendar3 />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'Blue',
    color: '#1A97F5',
  },
  {
    name: 'Green',
    color: '#03C9D7',
  },
  {
    name: 'Purple',
    color: '#7352FF',
  },
  {
    name: 'Red',
    color: '#FF5C8E',
  },
  {
    name: 'Indigo',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'Orange',
  },
];

export const Languages = [
  {
    name: 'Deutsch',
    id: 'de',
    img: `${flagDE}`
  },
  {
    name: 'English',
    id: 'en',
    img: `${flagEN}`
  },
  {
    name: 'Español',
    id: 'es',
    img: `${flagES}`
  },
  {
    name: 'Français',
    id: 'fr',
    img: `${flagFR}`
  },
  {
    name: 'Italiano',
    id: 'it',
    img: `${flagIT}`
  },
  {
    name: 'Português',
    id: 'pt',
    img: `${flagPT}`
  }
]


export const colorBlindOptions = [
  {
    name: 'Black / White',
    fgcolor: 'white',
    bgcolor: 'black'
  },
  {
    name: 'Black / Yellow',
    fgcolor: 'yellow',
    bgcolor: 'black'
  },
  {
    name: 'Blue / Yellow',
    fgcolor: 'yellow',
    bgcolor: 'blue'
  }

]

