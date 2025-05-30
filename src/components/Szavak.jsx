import React, { useEffect, useState } from "react";
import useAdatContext from "../context/AdatContext";

function Szavak(key, adat) {
  const [magyar, setMagyar] = useState("");
  const [allapot, setAllapt] = useState(false);
  return (
    <div>
      <div class="container mt-3">
        <h2>Szavak</h2>
        <tr>
          <td>{adat.angol}</td>
        </tr>
        <tr>
          <td>
            <div class="form-group">
              <input
                type="text"
                className="myInput"
                id="magyar"
                onChange={(event) => {
                  setMagyar(event.target.value);
                }}
              />
            </div>
          </td>
        </tr>
        <tr>
            {magyar == adat.magyar?setAllapt==true:setAllapt==false}
          <td>{allapot ? "✔" : "X"}</td>
        </tr>
      </div>
    </div>
  );
}

export default Szavak;
