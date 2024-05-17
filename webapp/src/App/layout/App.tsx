import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activites, setActivities] = useState<Activity[]>([]);
  const [SelectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((respone) => {
        setActivities(respone.data);
      });
  }, []);

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activites.find((x) => x.id === id));
  }

  function handleCancelActivity() {
    setSelectedActivity(undefined);
  }

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activites}
          selectedActivity={SelectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelActivity}
        />
      </Container>
    </>
  );
}

export default App;
