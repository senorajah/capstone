import * as React from 'react';
import Box from '@mui/material/Box';
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io'

export default function Employer() {
    return (
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            zIndex: 999,
            width: "100%",
            height: "100%",
            padding: "20px",
            flexDirection: "row"
          }}
        >

           <Box sx={{display: "flex", flexDirection: "column", width:"30%"}}>

                <h1 style={{fontWeight: "bolder", fontSize: "30px", margin: "12px", color:"#FFD700"}}>
                    HANAPP</h1>

                <Box sx={{width: 380, height: 160,  
                    backgroundColor: "#979797",  margin: "10px", justifyContent:"center",
                    borderRadius: "10px", display: "flex", flexDirection:"column"}}>
                        
                        <h1 style={{ fontSize: "35px", margin: "12px", color:"#FFD700", marginLeft: "10%", }}>
                        &#x20B1;123,456,789</h1>


                    <h1 style={{ fontSize: "25px", margin: "12px", color:"white", marginLeft: "20%"}}>
                    BALANCE</h1>
                        
                    </Box>

                <Box sx={{ width: 380, height: 160,
                     backgroundColor: "#979797", margin: "10px", justifyContent:"center",
                     borderRadius: "10px", display: "flex", flexDirection:"column"}}>
                        
                    <FaUserCircle size={50} color="#FFD700" style={{ marginLeft: "20%", marginTop: "10px" }} />

                    <h1 style={{ fontSize: "25px", margin: "12px", color:"white", marginLeft: "20%"}}>
                    EMPLOYEES</h1>
                       
                    </Box>

                <Box sx={{ width: 380, height: 160,
                     backgroundColor: "#979797", margin: "10px", justifyContent:"center",
                     borderRadius: "10px", display: "flex", flexDirection:"column"}}>
                        
                    <FaCalendarAlt size={50} color="#FFD700" style={{ marginLeft: "20%", marginTop: "10px" }} />

                    <h1 style={{ fontSize: "25px", margin: "12px", color:"white", marginLeft: "20%"}}>
                    CALENDAR</h1>
                       
                    </Box>
                    
            
           </Box>

           <Box sx={{display: "flex", flexDirection: "column", width:"70%", marginLeft: "50px"}}>


                <h1 style={{fontWeight: "bolder", fontSize: "40px", alignSelf:"center", margin: "5px", color:"#FFD700"}}>
                        EMPLOYER</h1>

                <Box sx={{width: "98%", height: "90%",
                            backgroundColor: "#979797", margin: "10px",
                            borderRadius: "10px", display:"flex", flexDirection: "row", padding: "20px", alignContent:"center",}}>
                  
                    

                    <Box sx={{display: "flex", flexDirection:"column", width:"30%", height: "100%", marginLeft: "7px", marginRight:"30px"}}>

                        <h1 style={{ fontSize: "20px", margin: "5px", color:"#FFD700", marginBottom: "20px"}}>
                            RECENT EMAILS</h1>

                        <Box sx={{marginBottom: "20px", width:"100%",height:"40%", backgroundColor: "#C2C2C2", borderRadius: "5px", padding: "10px"}}>
                        <AiOutlineMail size={25} color="white"  />
                        </Box>

                        <Box sx={{width:"100%",height:"40%", backgroundColor: "#C2C2C2", borderRadius: "5px",padding: "10px"}}>
                        <AiOutlineMail size={25} color="white"  />

                        </Box>


                    </Box>

                    <Box sx={{display: "flex", flexDirection:"column",  width:"30%", height: "100%", marginRight:"30px"}}>

                        <Box sx={{marginBottom: "20px", marginTop:"55px", width:"100%",height:"40%", backgroundColor: "#C2C2C2", borderRadius: "5px",padding: "10px"}}>
                        <AiOutlineMail size={25} color="white"  />

                        </Box>

                        <Box sx={{width:"100%",height:"40%", backgroundColor: "#C2C2C2", borderRadius: "5px",padding: "10px"}}>
                        <AiOutlineMail size={25} color="white"  />

                        </Box>

                    </Box>

                    <Box sx={{display: "flex", flexDirection:"column", width:"30%", height: "100%", }}>

                        <Box sx={{marginBottom: "20px", marginTop:"55px", width:"100%",height:"40%", backgroundColor: "#C2C2C2", borderRadius: "5px",padding: "10px"}}>
                        <AiOutlineMail size={25} color="white"  />

                        </Box>

                        <Box sx={{width:"100%",height:"40%",  borderRadius: "5px",padding: "10px", display: "flex", justifyContent: "center", alignItems:"center" ,marginRight: ""}}>

                        <IoMdAdd size={50} color="white" style={{ marginLeft: "20%", marginTop: "10px", margin: "auto" }} />

                        </Box>

                    </Box>

                </Box>

           </Box>

        </Box>
      );
}