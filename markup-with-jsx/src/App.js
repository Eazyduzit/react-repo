import "./App.css";
import Bio from "./Bio.js";

export default function TodoList() {
  return (
    <>
      <Bio />
      <h1>Lamarr's Todos</h1>
      <img style={{ border: "2px dotted red" }}
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Lamarr" 
        className="photo" />
      <ul>
        <li>Invent</li>
        <li>Rehearse</li>
        <li>Improve</li>
      </ul>
    </>
  );
}
