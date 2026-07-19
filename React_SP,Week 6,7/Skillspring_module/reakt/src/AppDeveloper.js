import React , useState from 'react';
import Developer from './Developer';

const AppDeveloper = () => {
  const [developers, setDevelopers] = useState([
    { id: 1, name: 'John Doe', position: 'Frontend Developer' },
    { id: 2, name: 'Jane Smith', position: 'Backend Developer' },
    { id: 3, name: 'Bob Johnson', position: 'Full Stack Developer' }
  ]);

  return (
    <div>
      <h1>Developer List</h1>
      {developers.map(developer => (
        <Developer key={developer.id} developer={developer} />
      ))}
    </div>
  );
};

export default AppDeveloper;