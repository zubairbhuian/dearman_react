import React from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export  const SidebarData = [
  {
    title: 'Terminals',
    path: '/terminals',
  },
  {
    title: 'Suppliers',
    path: '/suppliers',
  },
  {
    title: 'Customers',
    path: '/customers',
  },
  {
    title: 'Carriers',
    // path: '/carriers',
    iconClosed: <BsChevronDown />,
    iconOpened: <BsChevronUp />,

    subNav: [
      {
        title: 'Drivers',
        path: '/carriers/drivers',
      },
      {
        title: 'Entities',
        path: '/carriers/entities',
      },
      {
        title: 'Trailers',
        path: '/carriers/trailers',
      },
    ]
  },
  {
    title: 'Products',
    path: '/products',
  },
  {
    title: 'Destinations',
    path: '/destinations',
  },
  {
    title: 'Contacts',
    path: '/contacts',
  }
  
];