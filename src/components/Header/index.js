import React from "react";

import Logo from '../../assets/logot.svg';

export function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center" >
          <a href="/">
            <img src={Logo} alt="Logo" width={120} />
          </a>

          <button className="btn btn-sm" >
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
}