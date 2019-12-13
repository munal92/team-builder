import React, { useState } from 'react';

const MemberForm = ({addMember}) => {
    const [teamMember, setTeamMember] = useState({
        name:'',
        email:'',
        role:''
    });

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
    };

    const formSubmit = e => {
        e.preventDefault();
        addMember(teamMember);
        setTeamMember({
            name:'',
            email:'',
            role:''
        });
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            name='name'
            placeholder='Enter Full Name'
            onChange={handleChanges}
            value={teamMember.name}
            />

            <label htmlFor='email'>Email Address</label>
            <input
            id='email'
            type='email'
            name='email'
            placeholder='Enter email here'
            onChange={handleChanges}
            value={teamMember.email}
            />

            <label htmlFor='role'>Role Title</label>
            <select 
            id='role'
            type='text'
            name='role'
            placeholder='Choose Role'
            onChange={handleChanges}
            value={teamMember.role}>

                <option value='Select Role'>Select Role</option>
                <option value='Full Stack Developer'>Full Stack Developer</option>
                <option value='Front End Developer'>Front End Developer</option>
                <option value='Back End Developer'>Back End Developer</option>
                <option value='Software Engineer'>Software Engineer</option>
                <option value='Data Scientist'>Data Scientist</option>
            </select>
            <button type='submit'>Add Team Member</button>
        </form>
    )

}

export default MemberForm;