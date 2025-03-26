import { motion } from "framer-motion";

const About = () => {
    return ( 
        <div id="about" style={{
            padding:'0 20% 40% 20%'
        }}>
            <motion.h2 initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ color: 'white', fontSize: '60px', marginBottom:'40px'}}>About<span style={{color:'#31D978'}}>.</span></motion.h2>


            
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }} className="about-paragraph">
                Hi, I'm <span style={{ color: '#31D978', fontWeight: 'bold' }}>Tabrez</span>, 
                a BTech Biotechnology student at <span style={{ color: '#31D978', fontWeight: 'bold' }}>NIT Rourkela</span>, 
                passionate about <span style={{ color: '#31D978' }}>full-stack development</span> and 
                <span style={{ color: '#31D978' }}> competitive programming</span>. 
                I specialize in building interactive web applications using 
                <span style={{ color: '#31D978' }}> React, Tailwind CSS</span>, and JavaScript, 
                while also exploring <span style={{ color: '#31D978' }}>machine learning</span>. 
                I actively participate in coding challenges on platforms like Codeforces and LeetCode 
                to sharpen my problem-solving skills. When I'm not coding, I enjoy playing the 
                <span style={{ color: '#31D978' }}> ukulele</span> and diving into 
                <span style={{ color: '#31D978' }}> fiction books</span>. 
                I'm eager to contribute to <span style={{ color: '#31D978' }}>open-source projects</span>  
                and collaborate with fellow developers to build impactful applications. 
            </p>

            <a 
                href="#projects" 
                style={{ 
                    display: 'inline-block', 
                    padding: '10px 30px', 
                    border:'1px solid #31D978',
                    color: '#31D978', 
                    textDecoration: 'none', 
                    borderRadius: '5px', 
                    fontSize: '15px', 
                    transition: '0.3s',
                    opacity:'0.7'
                }}
                
            >
                Check Out My Projects 
            </a>
        </div>
     );
}
 
export default About;