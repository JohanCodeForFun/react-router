import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to homepage</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Profile;