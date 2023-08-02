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
import { Box, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import ColorPopper from './ColorPopper';
import { createNote } from '@/Services/dataservice';



function TakeNoteTwo({closeDesc}) {

    const [showIcon, setshowIcon] = React.useState(true)
    const [pinToggle, setpinToggle] = React.useState(true)

    const redirectTakeOne = () => {
        props.listenTakeNoteTwo()
    }

    const[data,setData]=React.useState({
        title:'',
        description:'',
        color: "", 
        isArchived: false 
    })
    const setTitle=(e)=>{
        setData({...data,title:e.target.value})
    }
    const setDiscription=(e)=>{
        setData({...data,description:e.target.value})
    }
    const createArchive = () => {
        setNotes((prevState) => ({ ...prevState, isArchived: true }))
    }
    const Submit=async()=>{
        console.log(data)
        let response = await createNote(data) 
        console.log(response)
    }

    return (
        <>
            {/* <Box className='p-2 ml-48 mb-8  sm:ml-10 max:sm:w-2/3  w-1/2 rounded-lg' sx={{ boxShadow: "1px 1px 5px 1px rgb(180, 176, 176)"}}  > */}
            <Box className='p-2 mb-8 mb-8   xs:ml-[0vw] xs:w-[100%] max:sm:ml-[0] max:sm:w-[100%] sm:ml-[0vw] sm:w-[90%] md:ml-[2vw] md:w-[88%] lg:ml-[7vw] lg:w-[100%]  xl:w-[54%] xl:ml-[13vw] xl:w-[30vw] 2xl:w-[20vw]   rounded-lg border-2 border-slate-400' sx={{ boxShadow: "1px 1px 5px 1px rgb(180, 176, 176)"}} >
                <div className='h-[13%] sm:h-[20%]  w-full   flex justify-between items-center'>
                    {/* Title input field */}
                    <input className='h-full w-full text-slate-600 focus:outline-none text-md' placeholder='Title' contenteditable="true" onChange={setTitle} ></input>
                    <div className='h-[5vh]   flex justify-center items-center hover:bg-slate-300 rounded-[50%]  text-slate-600' onClick={()=>setpinToggle(!pinToggle)}>
                        {pinToggle ? <PushPinOutletIcon /> : <PushPinIcon />}
                    </div>
                </div>
                <div className=' mt-2 w-full'>
                    <div className='w-full'>
                        {/* Note input field */}
                        <TextareaAutosize name="note" id="note" cols="30" rows="2" placeholder='Take a note...'
                            className='w-full text-md focus:outline-none ' onChange={setDiscription}></TextareaAutosize>
                    </div>
                    {/* Note input field icons */}
                    <div className='mt-2 h-[6vh] w-full flex justify-between'>
                        {showIcon &&
                            <div className='h-full w-full flex justify-between items-center '>
                                <div className='h-[70%] w-[50%]  flex justify-between items-center  '>
                                    <div className='h-full w-[10%]  flex justify-center items-center hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                        <AddAlertIcon className='h-[70%] w-[70%] ' />
                                    </div>
                                    <div className='h-full w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                        <PersonAddAltIcon  className='h-[70%] w-[70%] '/>
                                    </div>
                                    <div className='h-full w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                        <ColorLensIcon  className='h-[70%] w-[70%] '/>
                                    </div>
                                    <div className='h-full w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                        <ImageIcon  className='h-[70%] w-[70%] '/>
                                    </div>
                                    <div className='h-full w-[10%] flex  items-center  justify-center hover:bg-slate-300 rounded-[50%]  text-slate-700 hover:text-slate-900'>
                                        <ArchiveIcon className='h-[70%] w-[70%] ' onClick={createArchive} />
                                    </div>
                                    <div className='h-full w-[10%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%] text-slate-700 hover:text-slate-900'>
                                        <MoreVertIcon  className='h-[70%] w-[70%] '/>
                                    </div>
                                </div>
                                <div className='h-[80%] w-[15%] flex justify-center items-center rounded-sm  text-sm hover:bg-slate-200' onClick={()=>{
                                    Submit(),
                                    closeDesc(),
                                    redirectTakeOne()
                                }}>
                                    Close
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </Box>
        </>
    )
}

export default TakeNoteTwo
