import React, {useState} from "react";
import Button from '@mui/material/Button';
import assetsData from './data';
import Svg from "../Svg";

function AssetsTable()
{
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
        assetsData.filter((item) => {
          return item.name.match(searchInput);
      });
    }

    return(
        <div className="assets">
            <div className="search_bar">
                <label>
                    <img src={Svg.search} alt="ncx" />
                    <input
                        type="text"
                        placeholder="Search here"
                        onChange={handleChange}
                        value={searchInput}
                    />
                </label>
            </div>
            <table id="token_table">
                <thead>
                    <tr>
                        <th>Token</th>
                        <th>Equity</th>
                        <th>Cash Balance</th>
                        <th>Unsettled PNL</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {assetsData.map((item) => (
                    <tr>
                        <td className="wer">
                            <img src={item.image} alt="ncx" />
                            <h3>{item.name}</h3>
                        </td>
                        <td>
                            <p>{item.equity}</p>
                            <span>{item.equity_in_usd}</span>
                        </td>
                        <td>
                            <p>{item.cash_balance}</p>
                        </td>
                        <td>
                            <p>{item.unsettled_pnl}</p>
                        </td>
                        <td>
                            <Button href="#" className="wit">Withdraw</Button>
                            <Button href="#" className="dpst">Deposit</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default AssetsTable;