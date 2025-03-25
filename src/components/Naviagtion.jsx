

const Navigation = () => {
    return ( 
        <div style={{
            
            display:'flex',
            justifyContent:'center'
        }}>
       <nav className="flex" style={{
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
            
         }}>tabrez<span style={{
            color :'#31D978',
            fontSize:'22px',
            padding:'none'
         }}>.</span></h2>

         <div className="flex" 
         style={{
            display:'flex',
            gap:'20px',
            
         }}>
         <h2 className="nav-link">Home</h2>
         <h2 className="nav-link">Skills</h2>
         <h2 className="nav-link">Projects</h2>
         <h2 className="nav-link">About</h2>
         <h2 className="nav-link">Cotact me</h2>
         </div>
       </nav>
       </div>
     );
}
 
export default Navigation;