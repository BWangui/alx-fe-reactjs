import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails"; 
import ProfileSettings from "./ProfileSettings"; 

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Define Nested Routes Inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;