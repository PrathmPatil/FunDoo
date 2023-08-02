"use client"
import React from 'react';
import PushPinOutletIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLensOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/material';
import { Deleting } from '@/Services/dataservice';
import { updateArchive } from '@/Services/dataservice';

    

function NotesCol({ info, updatecolor}) {
    const [ptoggle, setpToggle] = React.useState(true);
 const[showIcon,setshowIcon]=React.useState(true)
     const updateArchive1 = async () => {
    let archive = { noteIdList: [info.id], isArchived: true }
    let response = await updateArchive(archive);
    console.log(response)
  }
//   const Delete1 = async () => {
//     let deletenote = { noteIdList: [noteobj.id], isDeleted: true }
//     let response = await Deleting(deletenote);
//     console.log(response)
//   }
 
    return (
        <div className='h-24 flex flex-col'>
            {info.map((notes)=>
            <Box className='mb-8  h-32 xs:ml-[0vw] xs:w-[100%] max:sm:ml-[0] max:sm:w-[100%] sm:ml-[0vw] sm:w-[90%] md:ml-[2vw] md:w-[88%] lg:ml-[7vw] lg:w-[70%]  xl:w-[54%] xl:ml-[13vw] xl 2xl   rounded-lg border-2 border-slate-400' sx={{ boxShadow: "1px 1px 5px 1px rgb(180, 176, 176)"}} >
            {/* <Box className='  border-2 border-slate-300 rounded-lg' sx={{width:1/2,marginLeft:24}} > */}
              
                <div className='relative p-2 w-full' >
                   {showIcon && <CheckCircleIcon className='absolute -top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 fill-slate-500' /> } 
                    <div className='h-[15%] sm:h-[20%]  w-full   flex justify-between items-center'>
                        {/* Title input field */}
                        <div
                            className='h-full w-[95%] text-slate-600 focus:outline-none'
                            // contentEditable='true'
                        >{notes.title}</div>
                        <div className='h-[5vh] w-[6%]  flex justify-center items-center hover:bg-slate-300 rounded-[50%]' onClick={()=> setpToggle(!ptoggle)}>
                            {showIcon && (ptoggle ? <PushPinOutletIcon /> : <PushPinIcon />) } 
                        </div>
                    </div>
                    <div className='mt-2 w-full h-auto'>
                        <div className='w-full'>
                            {/* Note input field */}
                            <div
                                name='note'
                                id='note'
                                rows='2'
                              // contentEditable='true'
                                className='flex-1 w-full focus:outline-none p-2 border-none min-h-[0] resize-none'
                            > {notes.descrition}</div>
                        </div>
                        {/* Note input field icons */}
                        <div className='mt-2 h-[5vh] w-full flex justify-between'>
                            {showIcon && <div className='h-full w-full flex justify-between items-center '>
                              <Box className='h-full   flex justify-between items-center' sx={{width:['65%']}}>
                                <div className='h-full w-[10%]  flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                    <AddAlertIcon />
                                </div>
                                <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                    <PersonAddAltIcon />
                                </div>
                                <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                    <ColorLensIcon action="edit" Noteid={notes.id} updatecolor={updatecolor} />
                                </div>
                                <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                    <ImageIcon />
                                </div>
                                <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                    <ArchiveIcon  onClick={updateArchive1}/>
                                </div>
                                <div className='h-full w-[10%] flex  items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                                    <MoreVertIcon />
                                </div>
                            </Box>
                             
                            </div>  }                        
                        </div>
                    </div>
                </div>
            </Box>
              )}
             
        </div>
    );
}

export default NotesCol;
