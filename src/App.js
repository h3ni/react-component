import React from "react";
import Adresse from "./profile/adresse";
import FullName from "./profile/fullName";
import ProfilePhoto from "./profile/profilePhoto";

const App = () => {
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Adresse />
    </div>
  );
};

export default App;
