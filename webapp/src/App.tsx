import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const[activites,setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities')
    .then(respone=>{
      setActivities(respone.data)
    })
  },[])


  return (
    <div>
          <Header as='h2' icon='users' content='Activities'/>
          <List>
            {activites.map((activity:any)=>(
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))}
          </List>
    </div>
  )
}

export default App
