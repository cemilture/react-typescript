import { TInstructor } from "./PropsTypes";
function Instructor(props: TInstructor) {
  return (
    <div>
      {props.instructor.firstName} {props.instructor.lastName}{" "}
      {props.instructor.age}
    </div>
  );
}

export default Instructor;
