import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = `https://api.github.com/users`;
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

export default function App() {
  const [casos, setCasos] = useState([]);
  useEffect(() => {
    buscaDados().then((dados) => setCasos(dados));
  }, []);
  return (
    <div className="container">
      <div className="App">
        <h1>Lista de usuários</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Usuário </th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {casos.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{item.login}</td>
                  <td>{item.html_url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
