import TicTacToe from'../assets/TicTacToe.png'
import QuizApp from '../assets/QuizApp.png'
import CurrencyConvertor from '../assets/CurrencyConvertor.png'
import PasswordGenerator from '../assets/PasswordGenrator.png'
import { motion } from "framer-motion";



const Projects = () => {
    return ( 
    <div id="projects" style={{
        padding:'0px 200px 200px 200px'
    }}>
      <motion.h2 style={{
        fontSize:'60px',
        marginBottom:'40px',
}}  
initial={{ opacity: 0, x: -50 }} 
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
viewport={{ once: true }}  >Projects<span style={{color:'#31D978'}}>.</span></motion.h2>

      <div className="project-conatiner">
        <div className="card">
            <div style={{display:'flex', justifyContent:'center', overflow:'hidden', position:'relative'}} className='imageProjectContainer'>
            <img src={TicTacToe} alt=""  className='projectImage'/></div>
            <h2 style={{fontSize:'30px', marginBottom:'20px'}}>Tic Tac Toe</h2>
            <a href="https://tic-tac-toe-v2-azure.vercel.app/ " target='_blank' className='projectbtn'>Visit</a>
        </div>

        <div className="card">
            <div style={{display:'flex', justifyContent:'center', overflow:'hidden', position:'relative'}} className='imageProjectContainer'>
            <img src={QuizApp} alt=""  className='projectImage'/></div>
            <h2 style={{fontSize:'30px', marginBottom:'20px'}}>Quiz App</h2>
            <a href="https://webwiz-task-1-quiz-app.vercel.app/" target='_blank' className='projectbtn'>Visit</a>
        </div>

        <div className="card">
            <div style={{display:'flex', justifyContent:'center', overflow:'hidden', position:'relative'}} className='imageProjectContainer'>
            <img src={CurrencyConvertor} alt=""  className='projectImage'/></div>
            <h2 style={{fontSize:'30px', marginBottom:'20px'}}>Currency Convertor</h2>
            <a href="https://currency-convertor-iota-eight.vercel.app/" target='_blank' className='projectbtn'>Visit</a>
        </div>

        <div className="card">
            <div style={{display:'flex', justifyContent:'center', overflow:'hidden', position:'relative'}} className='imageProjectContainer'>
            <img src={PasswordGenerator} alt=""  className='projectImage'/></div>
            <h2 style={{fontSize:'30px', marginBottom:'20px'}}>Password Generator</h2>
            <a href="https://password-genrator-tau.vercel.app/" target='_blank' className='projectbtn'>Visit</a>
        </div>
        </div>
    </div>
     );
}
 
export default Projects;