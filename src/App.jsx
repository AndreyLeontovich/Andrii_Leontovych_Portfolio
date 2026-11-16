import './App.css'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { HomeBlock } from './components/homeBlock/HomeBlock'
import { MyInfo } from './components/myInfo/MyInfo'
import { Projects } from './components/projects/Projects'
import { TechSkills } from './components/techSkills/TechSkills'


function App() {
  return(
    <>
      <div className='main_size_container'>
        <Header/>
      </div>
        <HomeBlock/>

      <div className='main_size_container'>
        <MyInfo />

        <section id="SKILLS">
          <TechSkills />
        </section>

        <section id="PROJECTS">
          <Projects />
        </section>

        <section id="CONTACTS">
          <Contact />
        </section>

        <Footer/>


      </div>
    


    




    </>
    
    
  )
}
  

export default App
