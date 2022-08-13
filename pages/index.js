import Main from '/components/home/Main'
import About from '/components/home/About'
import Milestones from '/components/home/Milestones'
import Galary from '/components/home/Galary'
import Team from '/components/home/Team'
import Contact from '/components/home/Contact'

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
     <div className='h-screen snap-center'><Main></Main></div>
     <div className='h-screen snap-center'><About></About></div>
     <div className='h-screen snap-center'><Milestones></Milestones></div>
     <div className='h-screen snap-center'><Galary></Galary></div>
     <div className='h-screen snap-center'><Team></Team></div>
     <div className='h-screen snap-center'><Contact></Contact></div>
    </div>
  )
}







