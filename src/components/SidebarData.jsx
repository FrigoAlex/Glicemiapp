import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import axios from 'axios';
import {headersData} from './configs'
const iftipo = () => {
  const tipo2=[{
    title: 'Pacientes',
    path: '/',
    icon: <FaIcons.FaUserCircle className=' fa-6x' />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    
  },
  {
    title: 'Registrar paciente',
    path: '/p_reg',
    icon: <FaIcons.FaUserPlus className=' fa-6x ' />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
   
  },
  {
    title: 'Cerrar sesion',
    path: '/login',
    icon: <FaIcons.FaDoorClosed  className=' fa-6x ' />,
    foo: async()=>{
      await axios.get(`${import.meta.env.VITE_APP_URI}/logout`,headersData);
    }
  }];
  const tipo1=[{
    title: 'Paciente',
    path: '/',
    icon: <FaIcons.FaUserCircle className=' fa-6x' />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    
  },
  {
    title: 'Cerrar sesion',
    path: '/login',
    foo: async()=>{
      await axios.get(`${import.meta.env.VITE_APP_URI}/logout`,headersData);
    },
    icon: <FaIcons.FaDoorClosed className=' fa-6x ' />
  }];
  const tipo0=[{
    title: 'Cerrar sesion',
    path: '/login',
    foo: async()=>{
      await axios.get(`${import.meta.env.VITE_APP_URI}/logout`,headersData);
    },
    icon: <FaIcons.FaDoorClosed className=' fa-6x ' />
  }];
  
 if(localStorage.getItem('tipo')== 1)return(tipo1)
 if(localStorage.getItem('tipo')== 2)return(tipo2)
 else return(tipo0)


  }
export const SidebarData =  iftipo();