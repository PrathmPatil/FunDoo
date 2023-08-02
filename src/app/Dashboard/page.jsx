"use client"
import React from 'react'
import Header from '@/Component/Header';
import SideBar from '@/Component/NavBar/SideBar';
import TakeNoteOne from '@/Component/TakeNoteOne';
import TakeNoteTwo from '@/Component/TakeNoteTwo';
import { Box } from '@mui/material';
import NotesRow from '@/Component/TakeNoteThree/NotesRow';
import NotesCol from '@/Component/TakeNoteThree/NotesCol';
import { getNotes } from '@/Services/dataservice';
// import { getNotes } from '../../../Services/dataservice';

import axios from 'axios';

function Dashboard() {
  const [toggles, setToggle] = React.useState(true)
  const [open, setOpen] = React.useState(false);
  const [writeNote, setwriteNote] = React.useState('Notes')
  const [tNotes, setNotes] = React.useState(true)

  const handleDrawer = () => {
    setOpen(!open);

  };
  const openDesc = () => {
    setToggle(!toggles);
  }
  const closeDesc = () => {
    setToggle(!toggles)
  }
  const [gridFlex, setgridFlex] = React.useState(true)
  const ChangeFlex = () => {
    setgridFlex(!gridFlex)
  }

  //fetch data
  const [info, setInfo] = React.useState([])
  //use for table
  // React.useEffect(()=>{async function fetchData(){
  //    try {
  //      const response =await getNotes()
  //     //  setInfo(response.data);
  //      console.log("get data "+response.data.data.data)
  //    } catch (error) {
  //      console.error('Error fetching data:', error);
  //    }
  //   }
  //   fetchData()},[])
  const getData = async () => {
    let response = await getNotes()
    let arr = response.data.data.data
    // console.log(arr)
    if (writeNote === 'Notes') {

      let newArr = arr.filter((note) => note.isArchived === false && note.isDeleted === false)
      setInfo(newArr)

    } else if (writeNote === 'Archive') {
      let newArr = arr.filter((note) => note.isArchived === true && note.isDeleted === false)
      setInfo(newArr)
    }
    else if (writeNote === 'Trash') {
      let newArr = arr.filter((note) => note.isArchived === false && note.isDeleted === true)
      setInfo(newArr)
    }
  }
  getData()
  const updatecolor = () => {
    getData()
  }

  React.useEffect(() => {
    getData()
  }, [writeNote])



  return (
    <div className='relative'  >
      <Header handleDrawer={handleDrawer} ChangeFlex={ChangeFlex} />
      <SideBar handleDrawer={handleDrawer} open={open} setwriteNote={setwriteNote} />
      <Box className='absolute top-20 h-auto right-0 flex flex-col' 
      sx={{ width: open ? ['76vw'] : ['83vw'] }}
      >
        <div className='w-full'>     
          {toggles ? <TakeNoteOne openDesc={openDesc} /> : <TakeNoteTwo closeDesc={closeDesc} />}
        </div>
        {/* notes.map((noteobj) => (<TakeNoteThree noteobj={noteobj}  updatecolor={updatecolor} />)) */}

        {/* { gridFlex ?(info.map((notes)=> <NotesCol notes={notes} updatecolor={updatecolor} />)):(info.map((notes)=><NotesRow notes={notes} updatecolor={updatecolor}/>))} */}
        {gridFlex ? <div className='border-4 border-slate-800 w-[50vw]'><NotesCol  info={info} updatecolor={updatecolor} /></div>  : <div className='grid-container '><NotesRow info={info} updatecolor={updatecolor} /></div>}
      </Box>

    </div>
  )
}

export default Dashboard