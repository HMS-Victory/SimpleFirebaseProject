import './App.css';
import React, {useState, useEffect} from 'react';
import {db} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore';

function App() {
  const [users, setUsers]=useState([]);
  const usersCollectionRef=collection(db, "users");
  const [formData, setFormData]=useState({
    name: '',
    age: 0
  });
  async function createUser(){
    await addDoc(usersCollectionRef, formData);
  }

  useEffect(()=>{
    const getUsers=async ()=>{
      const data=await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({
        ...doc.data(), id: doc.id
      })));
    }

    getUsers();
  }, [users, usersCollectionRef]);

  function onChangeInput(event){
    const {id, value}=event.target;
    setFormData({
      ...formData,
      [id]: value
    });
    console.log(formData);
  }
  return (
    <div className="App">
      <input id="name" onChange={onChangeInput} type="text" placeholder="Name..."></input>
      <input id="age" onChange={onChangeInput} type="number" placeholder="Age"></input>
      <button onClick={createUser}>Create User</button>
      {
        users.map((user)=>{
          return(
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={async ()=>{
              await updateDoc(doc(db, "users", user.id),{age: user.age+1});
            }}>Increase Age</button>
            <button onClick={async()=>{
              await deleteDoc(doc(db, "users", user.id));
            }}>Delete User</button>
          </div>);
        })
      }
    </div>
  );
}

export default App;
