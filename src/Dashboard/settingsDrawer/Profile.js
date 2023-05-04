import React from 'react'
import { Drawer,Typography,Box,Button,IconButton } from '@mui/material'
import { useState } from 'react'
//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Profile = () => {
  const img ="/img/profile.png"
    const [IsDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <Button 
    size='medium'
    edge='start'
    color='inherit'
    onClick={()=> setIsDrawerOpen(true)}
    
    >
        Profile</Button>
    <Drawer 
    anchor='left'
    open={IsDrawerOpen}
    onClose={()=> setIsDrawerOpen(false)} 
    >
        <Box p={2} width='500px' textAlign='center' role='presentation'  >
                 
            <div className='bg-slate-200 rounded-md p-4 flex flex-col items-center '  >
                  <div>
                    <img src={img} alt='avatar' className='h-32 rounded-full ' />
                  </div>
                <div id='title' className='font-bold tracking-tight text-2xl pb-2'>Rajah Seno</div>
                
                <div className='grid gap-5 grid-cols-2'>
                  <button className=' p-1 rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold'>
                    Message </button>
                  <button className='p-1 rounded-md shadow-md bg-yellow-400 hover:bg-yellow-500 text-white font-semibold'>
                    Resume </button>
                  </div>
                    <div className='bg-white rounded-md mt-3 p-4flex flex-col items-center'>

                      <IconButton color='primary'>
                        <FacebookIcon />
                      </IconButton>
                      <IconButton color='primary'>
                        <TwitterIcon />
                      </IconButton>
                      <IconButton color='secondary'>
                        <InstagramIcon />
                      </IconButton>
                    </div>
             

                
                
            </div>
        </Box>
    </Drawer>
    </>
    
  )
}

export default Profile