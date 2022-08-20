import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const SideBar = [
    {
        title: 'Home',
        path: "/",
        icon: <InfoIcon/>,
        className: ".header-text"
    },
    {
        title: 'Education',
        path: "/education",
        icon: <SchoolIcon/>,
        className: ".header-text"
    },
    {
        title: 'Contact',
        path: "/contact",
        icon: <ContactPageIcon/>,
        className: ".header-text"
    }
]