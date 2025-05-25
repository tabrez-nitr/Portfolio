import { useState } from "react";

const Navigation = () => {
   const scrollToSection = (index) => {
      const sectionIds = ['home', 'skills', 'projects', 'about', 'contact'];
      const section = document.getElementById(sectionIds[index - 1]);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  }

  const [selected, setSelected] = useState(1);
  const handleClick = (index) => {
    setSelected(index);
    scrollToSection(index);
  }

  return (
    <div className="nav-main-container" style={{ display: 'flex', justifyContent: 'center' }}>
      <nav className="flex navigation-bar" style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        width: '60%',
        padding: '14px 23px',
        zIndex: '999',
        position: 'sticky',
        marginTop: '40px',
        borderRadius: '16px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.3s ease-in-out'
      }}>
        <h2 style={{ fontSize: '20px' }}>
          tabrez<span style={{ color: '#31D978', fontSize: '22px' }}>.</span>
        </h2>

        <div className="flex" style={{ display: 'flex', gap: '20px' }}>
          {['Home', 'Skills', 'Projects', 'About', 'Contact me'].map((text, i) => (
            <h2
              key={i}
              onClick={() => handleClick(i + 1)}
              className={selected === i + 1 ? 'nav-link selected' : 'nav-link'}
            >
              {text}
            </h2>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;