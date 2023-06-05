import "./App.css";
import Avatar from "./Avatar";

// PASSING PROPS TO A COMPONENT

// Child Component
function Clouds() {
  return (
    <>
      <div className="">
        <div className="clouds cloud1"></div>
        <div className="clouds cloud2"></div>
        <div className="clouds cloud3"></div>
      </div>
    </>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Main component (Parent)
export default function Profile() {
  return (
    <div>
      {/* double curly brackets means an Object inside JSX curlies */}
      <Card>
        <Avatar
          size={100}
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        />
      </Card>
      <Card>
        <Avatar
          size={80}
          person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }}
        />
      </Card>
      <Card>
        <Avatar
          size={50}
          person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        />
      </Card>
      <Clouds />
    </div>
  );
}
