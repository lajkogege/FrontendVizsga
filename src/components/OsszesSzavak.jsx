import React, { useEffect, useState } from "react";
import useAdatContext from "../context/AdatContext";
import Szavak from "./Szavak";

function OsszesSzavak() {
  const { tema, szavak, getSzavak, getTema } = useAdatContext();
  const [temaLista, setTemaLista] = useState();
  const [szavakLista, setSzavakLista] = useState();

  useEffect(() => {
    getTema();
  }, [getSzavak]);

  return (
    <div className="row">
      <div class="container mt-3">
        <h2>Szavak</h2>

        <select>
          {tema.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>


        <table class="table">
          <thead>
            <tr>
              <th>AANGOL</th>
              <th>MAGYAR</th>
              <th>visszajelzés</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <Szavak />
              {szavak.map((element) => (
                <Szavak key={element.id} dat={element} />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OsszesSzavak;
