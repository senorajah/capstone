import React from 'react'
import EmpAppbar from './EmpAppbar';
import backgroundImage from '../../Images/bg2.jpg';
import { useState } from 'react';
import Joblist from '../../JobList/JobList';


const EHome = (props) =>{

  

  const [post ,setPost] = useState([
    {title:'BACK-END DEVELOPER', company:'BEsagunsa Inc.', jobType:'Remote', time:'12 hours ago', location:'CDO',desc:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ', id:1},
    {title:'FRONT-END DEVELOPER', company:'BEsagunsa Inc.', jobType:'Remote', time:'12 hours ago',location:'CDO',desc:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ', id:2},
    {title:'FULLSTACK DEVELOPER', company:'BEsagunsa Inc.',  jobType:'Remote', time:'12 hours ago',location:'Bukidnon',desc:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ', id:3},
    {title:'ENCODER', company:'BEsagunsa Inc.',  jobType:'Remote', time:'12 hours ago',location:'Iligan', desc:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ', id:4},
  ]);

  const handelDelete = (id) =>{
    const newPost = post.filter(posts => posts.id !== id);
    setPost(newPost);
  }

  return(
    <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`,display : props.hide }}>
    <EmpAppbar /> 
    <div className="bg-[#F7FAFF66] h-screen relative flex inset-0 pt-20 px-2">
    <div >

    <div className='justify-center text-center  w-full esm:px-0 px-5'>
      <Joblist post={post} /> 
    </div>

    
    </div>
    </div>
    </div>
  )
}

export default EHome;