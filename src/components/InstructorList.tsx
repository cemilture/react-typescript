type TinstructorList = {
  instructorList: {
    firstName: string;
    lastName: string;
    age: number;
  }[];
};

function InstructorList(props: TinstructorList) {
  return (
    <div>
      {props.instructorList.map((item) => {
        return (
          <h3 key={item.firstName}>
            {item.firstName} {item.lastName} {item.age}
          </h3>
        );
      })}
    </div>
  );
}

export default InstructorList;
