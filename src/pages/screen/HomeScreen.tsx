import Done from "./Done"
import Progress from "./Progress"
import Task from "./Task"


const HomeScreen = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center">
        
        <Task />
        <div className="mobile:hidden tab:hidden"><Progress /></div>
        <div className="mobile:hidden tab:hidden"><Done /></div>
    </div>
  )
}

export default HomeScreen