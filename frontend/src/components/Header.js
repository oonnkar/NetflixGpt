import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 z-10 flex w-[92%] items-center justify-between bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.75)_70%,transparent_100%)] px-[4%] py-[18px]">
      <img
        alt="Netflix"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg"
        className="h-[42px] w-auto"
      />
    </header>
  );
};

export default Header;
