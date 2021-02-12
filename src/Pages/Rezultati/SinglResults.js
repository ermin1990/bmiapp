import React from "react";

function SinglResults({ list }) {
  return (
    <div>
      <h1>Korisnici</h1>
      <h2>{list.imeiprezime}</h2>
      <h2>{list.godina} Godina</h2>
      <hr />
      <br />
    </div>
  );
}

export default SinglResults;
