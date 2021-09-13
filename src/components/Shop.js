import React from "react";

function Shop({ children }) {
  return (
    <div className="shop">
      <header className="shopHeader">
        <h2>Welcome to our phoney Shop!</h2>
        <p>
          Please see our range of ducks
          <abbr title="We do not own these ducks and they are not for sale. Don't sue me Big Duck 🙂">
            *
          </abbr>
        </p>
      </header>
      <div className="shopItemCont">{children}</div>
    </div>
  );
}

export default Shop;
