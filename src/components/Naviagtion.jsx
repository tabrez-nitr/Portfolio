import { useState } from "react";
import { Link, NavLink } from "react-router-dom";




const Navigation = () => {


//    const scrollToSection = (index) => {
//       const sectionIds = ['home', 'skills', 'projects', 'about', 'contact'];
//       const section = document.getElementById(sectionIds[index - 1]);
//       if (section) {
//           section.scrollIntoView({ behavior: 'smooth' });
//       }
//   }

   //  const [selected , setSelected] = useState(1);
   //   const handelClick =(index) => {
   //    setSelected(index);
   //    scrollToSection(index);
   //   }
    return ( 
        <div className="nav-main-container" style={{  
            display:'flex',
            justifyContent:'center'
        }}>
       <nav className="flex navigation-bar" style={{
        color:'white',
        display:'flex',
        justifyContent:'space-between',
        width:'60%',
        border:'1px solid black',
        padding:'14px 23px',
        zIndex:'999',
        position:'sticky',
        marginTop:'40px',
        borderRadius:'16px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)', 
        background: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid rgba(255, 255, 255, 0.15)', 
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',  
        transition: 'all 0.3s ease-in-out'
        
       }}>
         <h2 style={{
            fontSize:'20px',
            padding:'none',
            
         }} 
          >tabrez<span style={{
            color :'#31D978',
            fontSize:'22px',
            padding:'none'
         }}>.</span></h2>

         <div className="flex" 
         style={{
            display:'flex',
            gap:'20px',
            
         }}>
         {/* <h2 
                      onClick={()=>handelClick(1)}
         className={selected == 1 ? 'nav-link selected' : "nav-link"}>Home</h2>
         <h2          onClick={()=>handelClick(2)}
         className={selected == 2 ? 'nav-link selected' : "nav-link"}>Skills</h2>
         <h2          onClick={()=>handelClick(3)}
         className={selected == 3 ? 'nav-link selected' : "nav-link"}>Projects</h2>
         <h2          onClick={()=>handelClick(4)}
         className={selected == 4 ? 'nav-link selected' : "nav-link"}>About</h2>
         <h2          onClick={()=>handelClick(5)}
         className={selected == 5 ? 'nav-link selected' : "nav-link"}>Contact me</h2>
          */}


          <NavLink to={''}  className={
            ({isActive})=> isActive ? 'nav-link selected':'nav-link'
            }>
            Home
          </NavLink>
          <NavLink to={'/skills'}  className={
            ({isActive})=> isActive ? 'nav-link selected':'nav-link'
            }>
            Skills
          </NavLink>
          <NavLink to={'/projects'} className={
            ({isActive})=> isActive ? 'nav-link selected':'nav-link'
            }> 
          Projects 
          </NavLink>
          <NavLink to={'/about'}   className={
            ({isActive})=> isActive ? 'nav-link selected':'nav-link'
            }>
            About
          </NavLink>
          <NavLink to={'/contact'}  className={
            ({isActive})=> isActive ? 'nav-link selected':'nav-link'
            }>
            Contact me
          </NavLink>
          
          </div>
       </nav>
        
       

       </div>
     );
}
 
export default Navigation;