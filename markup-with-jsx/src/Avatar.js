export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio";
  return (
    <>
      <img 
        className="avatar" 
        src={avatar} 
        alt={description} 
      />
      <ul style={{
        backgroundColor: "black",
        color: "pink"
      }}>
        <li>Improve</li>
        <li>Prepare</li>
        <li>Work</li>
      </ul>
    </>
  );
}
