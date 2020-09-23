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
        <h1 className="lead">Lista de usuários</h1>
        <div className="row">
          <div className="col-md">
            {casos.map(function (item, index) {
              return (
                <div className="box">
                  <div className="card mb-4" key={index}>
                    <img className="card-img" src={item.avatar_url} />
                    <div className="item">
                      <h5> Nome de usuários: {item.login} </h5>
                      <a href={item.html_url} target="_blank">
                        Repositório GitHub
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
