import React from 'react';

const technologies = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express', icon: 'devicon-express-original colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
];

const TechStack = () => {
  return (
    <section className="py-5 bg-white border-top border-bottom">
      <div className="container">
        <div className="text-center mb-4">
          <p className="text-muted text-uppercase fw-bold ls-1 small">Tecnologías que dominamos</p>
        </div>
        <div className="row justify-content-center align-items-center g-4 text-center">
          {technologies.map((tech, index) => (
            <div className="col-6 col-md-3 col-lg-auto px-4" key={index}>
              <div className="d-flex flex-column align-items-center grayscale-hover transition-all">
                <i className={`${tech.icon} display-4 mb-2`}></i>
                <span className="small fw-semibold text-muted">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
