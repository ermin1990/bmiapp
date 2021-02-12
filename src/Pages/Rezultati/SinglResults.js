import React from "react";

function SinglResults({ user }) {
  return (
    <div>
      <h1>Korisnici</h1>
      <h2>{user.imeiprezime}</h2>
      <h2>{user.godina} Godina</h2>
      <hr />
      <br />
    </div>
  );
}

export default SinglResults;
