"use client"
import { Box } from '@mui/material';
import BrushIcon from '@mui/icons-material/BrushOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlined';
import ImageIcon from '@mui/icons-material/ImageOutlined';



function TakeNoteOne({ openDesc }) {
    const redirectTakeTwo = () => {
        props.listenTakeNoteOne()
    }
    return (
        <div className='p-2 mb-8 ml-12 right-0  xs:ml-[0vw] xs:w-[100vw] max:sm:ml-[0] max:sm:w-[100vw] sm:ml-[0vw] sm:w-[90vw] md:ml-[2vw] md:w-[88vw] lg:ml-[7vw] lg:w-[70vw]  xl:w-[54vw] xl:ml-[13vw] xl 2xl   rounded-lg border-4 border-slate-900' sx={{ boxShadow: "1px 1px 5px 1px rgb(180, 176, 176)" }} >
            <div className='h-[20vh] w-[40vw] border-4 border-slate-800'>
                <div className=' h-full w-full   flex justify-between items-center px-2' >
                    <input className=' h-full w-[80%] text-slate-600' placeholder='Take a Note....' contenteditable="true" onClick={() => { openDesc(), redirectTakeTwo() }}></input>
                    <div className=' h-full w-[28%] flex justify-between items-center '>
                        <div className='h-full w-[25%]  flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-500 hover:text-slate-800'>
                            <CheckBoxIcon />
                        </div>
                        <div className='h-full  w-[25%]  flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-500 hover:text-slate-800'>
                            <BrushIcon />
                        </div>
                        <div className='h-full  w-[25%] flex  items-center  justify-center  hover:bg-slate-300 rounded-[50%]  text-slate-500 hover:text-slate-800'>
                            <ImageIcon />
                        </div>
                    </div>
                </div>
            </div>
</div>
            )
}

            export default TakeNoteOne
