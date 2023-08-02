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

function NotesRow({ info, updatecolor }) {
  const [ptoggle, setpToggle] = React.useState(true);
  const [showIcon, setshowIcon] = React.useState(true);

  const updateArchive1 = async () => {
    let archive = { noteIdList: [info.id], isArchived: true };
    let response = await updateArchive(archive);
    console.log(response);
  };

  return (
    // <div className='grid-container grid-flow-row auto-cols-4 auto-rows-auto border-4 border-yellow-600'>
    //   {info.map((notes) => (
    //     <div
    //       key={notes.id}
    //       className='grid-item border-2 border-slate-300 rounded-lg border-4 border-red-500 '
    //       style={{ width: '20vw', marginLeft: 0 }} // Use 'style' instead of 'sx'
    //     >

    <div className='gap-4 ' 
    style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
    {info.map((notes) => (
      <div key={notes.id} className='grid-item min-h-28 border-2 border-green-300 rounded-lg'>
         
          <div className='relative p-2 w-full'>
            {showIcon && (
              <CheckCircleIcon className='absolute -top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 fill-slate-500' />
            )}
            <div className='h-[15%] sm:h-[20%] w-full flex justify-between items-center'>
              {/* Title input field */}
              <div className='h-full w-[95%] text-slate-600 focus:outline-none'>
                {notes?.title}
              </div>
              <div className='h-[5vh] w-[6%] flex justify-center items-center hover:bg-slate-300 rounded-[50%]' onClick={() => setpToggle(!ptoggle)}>
                {showIcon && (ptoggle ? <PushPinOutletIcon /> : <PushPinIcon />)}
              </div>
            </div>
            <div className='mt-2 w-full h-auto border-2 border-slate-400'>
              <div className='w-full'>
                {/* Note input field */}
                <div
                  name='note'
                  id='note'
                  rows='2'
                  className='flex-1 w-full focus:outline-none p-2 border-none min-h-[0] resize-none'
                >
                  {notes?.description}
                </div>
              </div>
              {/* Note input field icons */}
              <div className='mt-2 h-[5vh] w-full flex justify-between'>
                {showIcon && (
                  <div className='h-full w-full flex justify-between items-center'>
                    <div className='h-full w-[16%] flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                      <AddAlertIcon className='h-4 w-4 ' />
                    </div>
                    <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                      <PersonAddAltIcon className='h-4 w-4' />
                    </div>
                    <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                      {/* 'action' and 'Noteid' should be passed as props */}
                      <ColorLensIcon className='h-4 w-4' action="edit" Noteid={notes.id} updatecolor={updatecolor} />
                    </div>
                    <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                      <ImageIcon className='h-4 w-4' />
                    </div>
                    <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                      <ArchiveIcon className='h-4 w-4' onClick={updateArchive1} />
                    </div>
                    <div className='h-full w-[16%] flex items-center flex justify-center items-center hover:bg-slate-300 rounded-[50%] text-slate-600 hover:text-slate-900'>
                      <MoreVertIcon className='h-4 w-4' />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesRow;
