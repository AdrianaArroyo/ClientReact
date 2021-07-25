import React from "react";


export const Footer = () => {
  return (
    <>
    <footer className="footer-b text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Ganbatte Studio</h5>
            <p>
              Somos una editorial dedicada a la produccion, publicacion y promocion de mangas,
              siendo el destino #1 para el manga en America Latina y el hogar de algunas de las 
              marcas de anime más prestigiosas que impulsan la industria. 
              Ganbatte Studio ha pasado de ser una empresa de localización a un editor y productor de cultura pop líder en el mercado‎.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contactos</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="text-white">Linkedln</a>
              </li>
              <li>
                <a href="https://github.com/AdrianaArroyo" target="_blank" rel="noreferrer" className="text-white">Github</a>
              </li>
              <li>
               <p>(+506) 71368060</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" styles="background-color: rgba(0, 0, 0, 0.2);">
        © 2021 Copyright:
        <a className="text-white" href="/"> GanbatteStudio.com</a>
      </div>
    </footer>
  </>
  );
}