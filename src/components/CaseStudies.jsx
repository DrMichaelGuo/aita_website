import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CaseStudies.css';
import caseStudy1 from '../assets/case-study-1.png';
import caseStudy2 from '../assets/case-study-2.png';
import caseStudy3 from '../assets/case-study-3.png';

// ...existing code...

function CaseStudies() {
  return (
    <section className="case-studies-section" id="case-studies">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <div className="case-studies-grid">
          <CaseStudyCard 
            image={caseStudy1}
            title="Case Study 1" 
            description="Description of the first case study and its impact."
          />
          <CaseStudyCard 
            image={caseStudy2}
            title="Case Study 2" 
            description="Description of the second case study and its impact."
          />
          <CaseStudyCard 
            image={caseStudy3}
            title="Case Study 3" 
            description="Description of the third case study and its impact."
          />
        </div>
      </div>
    </section>
  );
}

// CaseStudyCard component that displays the image
const CaseStudyCard = ({ image, title, description }) => {
  return (
    <motion.div 
      className="case-study-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="case-study-image">
        <img src={image} alt={title} />
      </div>
      <div className="case-study-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
