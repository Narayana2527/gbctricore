import React, { useState, useEffect } from 'react';

const CoachingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // 1. Check if the user has already seen this modal in the current session
//     const hasSeenModal = sessionStorage.getItem('hasSeenCoachingModal');

//     if (!hasSeenModal) {
//       // 2. Set a 2-second delay so the website content loads first
//       const timer = setTimeout(() => {
//         setIsOpen(true);
        
//         // 3. Save to sessionStorage so it doesn't pop up again during this visit
//         sessionStorage.setItem('hasSeenCoachingModal', 'true');
//       }, 2000);

//       // Cleanup function to prevent memory leaks if user leaves page before 2s
//       return () => clearTimeout(timer);
//     }
//   }, []);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); // 1.5 second delay for a smooth entrance

    return () => clearTimeout(timer);  
    },[])
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
        <h2>New Batch Starting Soon!</h2>
        <p>Select a Course opt for you.</p>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <button type="submit" style={styles.submitBtn}>Claim Discount</button>
        </form>
      </div>
    </div>
  );
};

// Basic Styling
const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modal: { background: 'white', padding: '2rem', borderRadius: '8px', position: 'relative', maxWidth: '400px', textAlign: 'center' },
  closeBtn: { position: 'absolute', top: '10px', right: '10px', border: 'none', fontSize: '20px', cursor: 'pointer', background: 'none' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc' },
  submitBtn: { padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default CoachingModal;