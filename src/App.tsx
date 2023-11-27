import "./App.css";
import EventActions from "./components/EventActions";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import ReducerExample from "./components/ReducerExample";
import Request from "./components/Request";

function App() {
  const instructor = {
    firstName: "Can",
    lastName: "Boz",
    age: 30,
  };

  const instructorList = [
    {
      firstName: "Can",
      lastName: "Boz",
      age: 30,
    },
    {
      firstName: "Cemil",
      lastName: "Türe",
      age: 30,
    },
    {
      firstName: "Şahin",
      lastName: "Kaya",
      age: 35,
    },
  ];

  return (
    <>
      <Home name={"Can Boz"} courseNumber={15} isBest={false} />
      <Instructor instructor={instructor} />
      <InstructorList instructorList={instructorList} />
      <Request status={"loading"} />
      <EventActions />
      <LoginCheck />
      <ReducerExample />
    </>
  );
}

export default App;
