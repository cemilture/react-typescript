import { useState } from "react";
function EventActions() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setValue("");
    console.log(event, id);
  };

  return (
    <div>
      <button
        onClick={(event) => {
          handleClick(event, 4);
        }}
      >
        Sil
      </button>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default EventActions;
