import { useSelector } from "react-redux";
export default function CustomSelected({toggleSelect, selectedCurrency, isDropdownOpen, handleSelect}) {
  const { tokenPricesArray } = useSelector((state) => state.tokenPrices);
  return(  <div className="custom-select">
      <div className="selected" style={{backgroundColor: isDropdownOpen ? 'rgb(52, 52, 52)' : 'transparent'}} onClick={toggleSelect}>
        <img
          src={`/currencies/${selectedCurrency}.svg`}
          alt={selectedCurrency}
        />{" "}
        {selectedCurrency}
      </div>
      {isDropdownOpen && (
        <ul className="dropdown">
          {Array.from(
            new Set(tokenPricesArray.map((value) => value.currency))
          ).map((currency, index) => (
            <li key={index} onClick={() => handleSelect(currency)}>
              <img src={`/currencies/${currency}.svg`} alt={currency} />
             <p>{currency}</p>
            </li>
          ))}
        </ul>
      )}
    </div>)
}
