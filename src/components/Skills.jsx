import { motion } from "framer-motion";
import htmlLogo from '../assets/htmlLogo.svg';
import Git from '../assets/Git.svg';
import GitHub from '../assets/GitHub.svg';
import Java from '../assets/Java.svg';
import JavaScript from '../assets/JavaScript.svg';
import jQuery from '../assets/jQuery.svg';
import ReactLogo from "../assets/ReactLogo.svg";
import Tailwind from '../assets/Tailwind.svg';

const Skills = () => {

    return (
        <div id="skills" style={{ padding: '0px 200px 200px 200px' }}>
            
            {/* Motion only for Skills. */}
            <motion.h2 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ color: 'white', fontSize: '60px' }}
            >
                Skills<span style={{ color: '#31D978' }}>.</span>
            </motion.h2>

            <div className="logo-container">
                <img src={ReactLogo} alt="React" className="skillLogo"/>
                <img src={Tailwind} alt="Tailwind" className="skillLogo"/>
                <img src={JavaScript} alt="JavaScript" className="skillLogo"/>
                <img src={htmlLogo} alt="HTML" className="skillLogo"/>
                <img src={jQuery} alt="jQuery" className="skillLogo"/>
                <img src={Git} alt="Git" className="skillLogo"/>
                <img src={GitHub} alt="GitHub" className="skillLogo"/>
                <img src={Java} alt="Java" className="skillLogo"/>
            </div>
        </div>
    );
}
 
export default Skills;