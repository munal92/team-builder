import React from 'react';

const FormLists = props => {

    return (
        <div className='team-List'>
          {props.members.map(member => {
            return(
              <div className='teamMember' key={member.name}>
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.email}</p>
                </div>
            )
          })}
        </div>
    );
};

export default FormLists;