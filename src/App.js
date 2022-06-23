//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//import details from './details.json';
//import Nav from './Nav';


function App() {
 
  let [userId, setName] = useState();
  let [body, setEmail] = useState();
  let [title, setMobile] = useState();
  let [id, setid] = useState();
  let [users, setuser] = useState([]);

  function api() {
    let data = { userId, body, title, id };
    //console.log(name);
    //console.log(data);
    console.log(JSON.stringify(data));
   
    try {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/JSON',
          'Content-Type': 'application/JSON',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((datas) => {
          console.log(datas);
           return  setuser([datas])
        }).catch();
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div className="App">
      <h1>Post API</h1>
      <input
        type="text"
        value={userId}
        name="userId"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        name="body"
        value={body}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="tel"
        name="title"
        value={title}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="tel"
        name="id"
        value={id}
        onChange={(e) => {
          setid(e.target.value);
        }}
      />
      <button onClick={api}> click</button>
      <br/>

      <div>

     {/*  <ol>
          {users.map((valu, i) => (
            <li key={valu.id}>{valu.price}</li>
          ))}
        </ol> */}


          {users.map((valu, i) => (
            <li key={valu.id}>{valu.title}</li>
          ))}
        

      </div>
    </div>
  )
}

export default App