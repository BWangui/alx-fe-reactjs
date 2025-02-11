const UserProfile = (props) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center", margin: "20px auto"}}>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;