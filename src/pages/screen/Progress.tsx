


const Progress = () => {
  
  return (
    <div className=' w-full justify-center flex  h-[200px]  mt-4 mr-4'>
        <div className="w-[300px]">
            <div className="px-5 flex justify-between items-center h-[50px] bg-yellow-400 w-full">
            <div>Progress</div>
            </div>

            <div className=" px-5 py-4  flex items-center justify-between bg-white border-b-2">
                <div className="p-3">Brush my hair</div>
                <div className="">
                <div className="p-2 flex justify-center items-center bg-green-600 mt-2 rounded-md cursor-pointer hover:bg-green-400 duration-150">Task</div>
                <div className="p-2 flex justify-center items-center cursor-pointer bg-green-600 mt-2 rounded-md hover:bg-green-600 duration-150">done</div>
                </div>
            </div>
            <div className=" px-5 py-4  flex items-center justify-between bg-white border-b-2">
                <div className="p-3">Brush my hair</div>
                <div className="">
                <div className="p-2 flex justify-center items-center bg-green-600 mt-2 rounded-md cursor-pointer hover:bg-green-400 duration-150">Task</div>
                <div className="p-2 flex justify-center items-center cursor-pointer bg-green-600 mt-2 rounded-md hover:bg-green-600 duration-150">done</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress