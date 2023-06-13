const today = new Date();

function formatDate(date){
  return new Intl.DateTimeFormat(
    "en-US",
    {weekday: "long"}
  ).format(date);
}

export default function TodoList() {
  const name = ["Lamarr", "Gregorio"];
    return (
      <>
        <h1>Todo List for {formatDate(today)}</h1>
        
        <h1>{name[0]}'s Todo List</h1>
        <img style={{ border: "2px dotted red" }}
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Lamarr" 
          className="photo" />
        <ul>
          <li>Invent</li>
          <li>Rehearse</li>
          <li>Improve</li>
        </ul>

        <h1>{name[1]}'s Todo List</h1>
      </>
    );
  }