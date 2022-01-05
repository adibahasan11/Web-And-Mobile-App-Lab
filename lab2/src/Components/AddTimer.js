import { useState } from "react";
import { useContext } from "react";
import { TimerContext } from "./TimerContext";

function AddTimer() {
  const [timers, setTimers] = useContext(TimerContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTimers((previousMovies) => [
      ...previousMovies,
      { name: name, description: description },
    ]);
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input type = "text" value = { name } onChange={ handleName } />
      <input type = "text" value ={ description } onChange={ handleDescription } />
      <button type = "submit" >Add</button>
    </form>
  );
}

export default AddTimer;
