import * as React from 'react';
import Box from '@mui/material/Box';
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io'
import cardImage from '../../Images/bg2.jpg'

import EmpAppbar from './EmpAppbar';
import UserContext from '../../api/context/context';
import backgroundImage from '../../Images/bg2.jpg'
import Applicants from './applicantPage/Applicants';
import Create from './Create';
import EHome from './EHome';

export default function Employer(props  ) {
  const {page} = React.useContext(UserContext);

    return (
      <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <EmpAppbar/>
    
      <div className="bg-[#F7FAFF66] h-screen relative flex inset-0 pt-20 px-2">
      <div>
 <> <EHome  hide = {page.active === 'Home' ? null : "none"}/> 
  <Applicants hide = {page.active === 'Bookmarks' ? null : "none"}/> 
  <Create hide = {page.active === 'Activity log' ? null : "none"}/> 
  {console.log(page)}

  </>
  

      
      </div>
      </div>
      </div>
      );
}