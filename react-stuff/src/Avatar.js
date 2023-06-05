import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
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
