import "./App.css";
import { getImageUrl } from "./utils";

// Passing Props to a Component

// Child Component
function Avatar({ person, size }) {
  return (
    <img
      // Props, JSX curlies
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
// Main component (Parent)
export default function Profile() {
  return (
    <div>
      {/* double curly brackets means an Object inside JSX curlies */}
      <Avatar
        size={100}
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      />
      <Avatar size={80} person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} />
      <Avatar size={50} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
    </div>
  );
}
