import React, { useState } from "react";
import uuid from "uuid";
import Form from "./Form";
const initialTeamList = [
  // why is it useful to have a unique id?
  {
    id: uuid(),
    name: "gabe",
    email: "gabe@lambdaschool.com",
    role: "instructor"
  },
  {
    id: uuid(),
    name: "gabe",
    email: "gabe@lambdaschool.com",
    role: "instructor"
  }
];

const initialTeamForm = {
  name: "",
  role: "",
  email: ""
};

function TeamList() {
  const [teamList, setTeamList] = useState(initialTeamList);
  const [teamForm, setTeamForm] = useState(initialTeamForm);
  const [editMember, setEditMember] = useState("");

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setTeamForm({
      name: e.target.value,
      role: teamForm.role,
      email: teamForm.email
    });
  };
  const onEmailChange = e => {
    // we have the new value for the name input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      role: teamForm.role,
      email: e.target.value
    });
  };
  const onRoleChange = e => {
    // we have the new value for the name input inside e.target.value
    setTeamForm({
      name: teamForm.name,
      role: e.target.value,
      email: teamForm.email
    });
  };
  const onFormSubmit = e => {
    // we DO need the event object
    e.preventDefault();
    if (editMember) {
        const notEditedMembers = teamList.filter((member)=> member.id !== editMember);
        const newMember = {...teamForm, id: editMember,}
        const updatedTeamList = notEditedMembers.concat(teamForm);
        setTeamList(updatedTeamList);
        setEditMember('')
    } else {
      const newMember = {
        id: uuid(),
        name: teamForm.name,
        email: teamForm.email,
        role: teamForm.role
      };
      const newTeamList = teamList.concat(newMember);
      setTeamList(newTeamList);
    }

    setTeamForm(initialTeamForm);
  };
 const editTeamMember = (id) =>{ 
    setEditMember(id)
    setTeamForm(teamList.find((member)=> member.id === id))
     console.log(TeamList)
 };
  return (
    <div>
      <Form
        // handlers that can change app state
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
        onFormSubmit={onFormSubmit}
        // data we need to hydrate the form inputs
        teamForm={teamForm}
      />
      {teamList.map(member => (
        <>
          <h5 key={member.id}>
            Name: {member.name} <br />
            Role: {member.role} <br />
            Email: {member.email} <br />
          </h5>
          <button onClick={(e)=>{
              editTeamMember(member.id)
          }} >edit member</button>
        
        </>
      ))}
    </div>
  );
}

export default TeamList;
