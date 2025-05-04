import React from "react";

const UsersPage = () => {
  const profiles = ["Red", "Blue", "Gray", "Yellow"];

  return (
    <div>
      <h1>Brvu</h1>
      <h2>Who's watching?</h2>
      <div>
        {profiles.map((profile, index) => (
          <button key={index}>{profile}</button>
        ))}
      </div>
      <button>Manage Profiles</button>
    </div>
  );
};

export default UsersPage;
