import React from "react";
import HermineGrangerImage from "/Users/carole/Dropbox/Gomycode/React/jsx/Checkpoint/mysecondapp/src/assets/HermineGranger.jpeg";

const ProfilePhoto = () => (
  <div style={{ margin: "100px" }}>
    <img
      src={HermineGrangerImage}
      alt="harry potter"
      style={{ width: "400px" }}
    />
  </div>
);

export default ProfilePhoto;
