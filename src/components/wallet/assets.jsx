import React, {useState} from "react";
import Button from '@mui/material/Button';
import assetsData from '../withdraw/coinlist';
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

    const [showNumber, setShowNumber] = useState(false);

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
                <div className="qwefv">
                    <Button className="active" href="#">All</Button>
                    <p className="zero" onClick={() => setShowNumber(!showNumber)}>Hide Zero Balance</p>
                </div>
            </div>
            <table id="token_table">
                <thead>
                    <tr>
                        <th>Token</th>
                        <th>Balance</th>
                        <th>USD Value</th>
                        <th>In Order</th>
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
                            {!showNumber && <p>{item.equity}</p>}{showNumber && <p>********</p>}
                        </td>
                        <td>
                            {!showNumber && <p>{item.cash_balance}</p>}{showNumber && <p>********</p>}
                        </td>
                        <td>
                            {!showNumber && <p>{item.unsettled_pnl}</p>}{showNumber && <p>********</p>}
                        </td>
                        <td className="ascdfwe">
                            <div className="dewr">
                                <Button href="/withdraw" className="wit">Withdraw</Button>
                                <Button href="/deposit" className="dpst">Deposit</Button>
                            </div>
                            <div className="mobiel_dop">
                                <img src={Svg.editdropdown} alt="ncx"/>
                                <div className="sdfvdbb">
                                    <Button href="/deposit" className="wit">Deposit</Button>
                                    <Button href="/withdraw" className="wit">Withdraw</Button>
                                    <Button href="#" className="wit">Trade</Button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default AssetsTable;