import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokenPrice } from "./redux/tokenprice.slice/tokenpriceslice";
import { useEffect, useState } from "react";
import CustomSelected from "./components/CustomSelected";
function App() {
  const dispatch = useDispatch();
  const { status, tokenPricesArray } = useSelector(
    (state) => state.tokenPrices
  );
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedSecondCurrency, setSelectedSecondCurrency] = useState("ATOM");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenSecond, setIsDropdownOpenSecond] = useState(false);
  const [range, setRange] = useState();
  const [otputRange, setOtputRange] = useState('0.00');
  const toggleSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownOpenSecond) {
      setIsDropdownOpenSecond(false);
    }
  };

  const toggleSelectSecond = () => {
    setIsDropdownOpenSecond(!isDropdownOpenSecond);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };
  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false);
  };
  const handleSelectSecond = (currency) => {
    setSelectedSecondCurrency(currency);
    setIsDropdownOpenSecond(false);
  };
  const swapCurrencies = () => {
    setSelectedCurrency(selectedSecondCurrency);
    setSelectedSecondCurrency(selectedCurrency);
  };
  useEffect(() => {
    dispatch(fetchTokenPrice());
  }, [dispatch]);
  useEffect(() => {
    if(range){
    let valueFirstCurrency = 0;
    let valueSecondCurrency = 0;
    const uniqueCurrencies = Array.from(
      new Set(tokenPricesArray.map((value) => value.currency))
    );
    uniqueCurrencies.forEach((currency) => {
      const token = tokenPricesArray.find(
        (value) => value.currency === currency
      );
      if (selectedCurrency === currency) {
        valueFirstCurrency = token.price;
      }
      if (selectedSecondCurrency === currency) {
        valueSecondCurrency = token.price;
      }
    });
    if (valueFirstCurrency && valueSecondCurrency) {
      setOtputRange((range * (valueFirstCurrency / valueSecondCurrency)).toFixed(2));
    }}
    else{
      setOtputRange('0.00')
    }
  }, [range, selectedCurrency, selectedSecondCurrency, tokenPricesArray]);
  if (status !== "done") {
    return <p>Loading...</p>;
  }
  return (
    <div className="exchange">
      <div className="input-container">
        <label htmlFor="input-amount">Amount to send</label>
        <div className="container-amount">
          <CustomSelected
            toggleSelect={toggleSelect}
            isDropdownOpen={isDropdownOpen}
            selectedCurrency={selectedCurrency}
            handleSelect={handleSelect}
          ></CustomSelected>
          <input
            id="input-amount"
            type="text"
            value={range}
            onChange={(event) => setRange(event.target.value)}
            placeholder="Enter amount"
          />
        </div>
      </div>
      <img
        className="icon-swap"
        src="/swap.png"
        alt="Swap Icon"
        onClick={swapCurrencies}
      />
      <div className="output-container">
        <label htmlFor="otput-amount">Amount to receive</label>
        <div className="container-amount">
          <CustomSelected
            toggleSelect={toggleSelectSecond}
            isDropdownOpen={isDropdownOpenSecond}
            selectedCurrency={selectedSecondCurrency}
            handleSelect={handleSelectSecond}
          ></CustomSelected>
          <input
            id="otput-amount"
            value={otputRange}
            type="text"
            readOnly
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
