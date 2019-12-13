import React, {useState} from 'react';
import './App.css';
import FormList from './components/FormList';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([
    {
      name:'',
      email:'',
      role:''

    }

  ]);

  const addMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role

    }
    setMembers([...members, newMember])
  };


  return (
    <div className="App">
     <h1>Team Members</h1>
     <Form addMember={addMember} />
     <FormList members={members} />
    </div>
  );
}

export default App;