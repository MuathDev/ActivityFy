import { useEffect, useState } from 'react'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {
  const[activites,setActivities] = useState<Activity[]>([]);

  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(respone=>{
      setActivities(respone.data)
    })
  },[])


  return (
    <div>
          <Header as='h2' icon='users' content='Activities'/>
          <List>
            {activites.map(activity=>(
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))}
          </List>
    </div>
  )
}

export default App
