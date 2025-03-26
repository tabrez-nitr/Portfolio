import { motion } from "framer-motion";


const Home = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
     id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        color: "white",
        zIndex: "1",
        marginTop: "10%",
        padding: "0px 20% 25% 20%",
      }}
    >
      <motion.h2 variants={itemVariants}>Software Developer</motion.h2>

      <motion.h2
        variants={itemVariants}
        style={{ fontSize: "80px" }}
      >
        Hello I'm
      </motion.h2>

      <motion.h2
        variants={itemVariants}
        style={{ fontSize: "80px", color: "#31D978" }}
      >
        Sams Tabrez
      </motion.h2>

      <motion.p
        variants={itemVariants}
        style={{ width: "70%" }}
      >
        I build sleek, performant web experiences and tackle complex problems through code.
        Passionate about full-stack development, competitive programming, and constant growth.
      </motion.p>

      <motion.div
        variants={itemVariants}
        style={{ display: "flex", gap: "40px", marginTop: "5%" }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            border: "1px solid #31D978",
            padding: "12px 35px",
            borderRadius: "30px",
            color: "#31D978",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          About Me
        </motion.button>

        <motion.div
          style={{ display: "flex", gap: "17px", marginTop: "1.5%" }}
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/tabrez-nitr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24"
              fill="none"
              stroke="#31D978"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1-5-2-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.77 5.07 5.07 0 0 0-.09-3.77s-1.18-.37-3.91 1.48a13.38 13.38 0 0 0-7 0C4.18 1.13 3 1.5 3 1.5a5.07 5.07 0 0 0-.09 3.77A5.44 5.44 0 0 0 1.5 9c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22"/>
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/tabrez-sams-2410a7204/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24"
              fill="none"
              stroke="#31D978"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v8h-4v-8a2 2 0 0 0-4 0v8h-4v-8a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://x.com/tabrez__sams"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24"
              fill="none"
              stroke="#31D978"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4.01c-.77.35-1.6.59-2.47.69a4.15 4.15 0 0 0 1.82-2.29 8.24 8.24 0 0 1-2.61 1c-.74-.79-1.8-1.29-2.97-1.29a4.15 4.15 0 0 0-4.15 4.15c0 .33.04.65.11.96A11.76 11.76 0 0 1 2 3.41a4.14 4.14 0 0 0 1.28 5.52c-.58-.02-1.12-.18-1.6-.44v.04a4.15 4.15 0 0 0 3.32 4.06c-.29.08-.6.12-.92.12a4.26 4.26 0 0 1-.78-.07 4.15 4.15 0 0 0 3.88 2.88 8.33 8.33 0 0 1-5.14 1.77c-.33 0-.66-.02-.98-.06a11.75 11.75 0 0 0 6.34 1.86c7.6 0 11.76-6.3 11.76-11.76 0-.18 0-.36-.01-.54a8.46 8.46 0 0 0 2.08-2.16"/>
            </svg>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/tabrez__sams/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              fill="none"
              stroke="#31D978"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37a4 4 0 1 1-4.63-4.63 4 4 0 0 1 4.63 4.63z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </motion.a>

        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;