import { TGetData } from "./PropsTypes";

function home(props: TGetData) {
  return (
    <div>
      {props.name} React TypeScript eğitimine hoş geldiniz. Kurs sayısı :{" "}
      {props.courseNumber}{" "}
      {props.isBest ? (
        <p>En iyi react eğitimi bu eğitim</p>
      ) : (
        <p>Başka bir eğitim</p>
      )}
    </div>
  );
}

export default home;
