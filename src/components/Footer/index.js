import React from "react";

function Footer(props) {
  return (
    <footer className="py-4 bg-dark text-white-50">
      <div className="container text-center">
        <small> {props.texto} </small>
      </div>
    </footer>
  );
}

export default Footer;
