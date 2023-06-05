import "./App.css";

// Passing Props to a Component

// Child Component
function Avatar({ person, size }) {
  return (
    <img
      // Props
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      // JSX curlies
      width={100}
      height={100}
    />
  );
}
// Main component (Parent)
export default function Profile() {
  return (
    <Avatar
      // double curly brackets means an Object inside JSX curlies
      person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
      size={100}
    />
  );
}
