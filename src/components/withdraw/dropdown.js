import React, { useState } from "react";
import styled from "styled-components";
import assets from "./coinlist";

const Main = styled("div")`
`;

const DropDownContainer = styled("div")`
  width: 100%;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  font-size: 16px;
  color: #FFFFFF;
  height: 45px;
  display: flex;
  padding: 0px 15px;
  align-items: center;
  border-radius: 5px;
  text-transform: uppercase;
`;

const DropDownListContainer = styled("div")`
  position: relative;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #121212;
  border: 1px solid rgba(255,255,255,0.15);
  box-sizing: border-box;
  color: #FFFFFF;
  font-size: 16;
  margin-top: 5px;
  max-height: 250px;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  padding: 20px 0px;
`;

const ListItem = styled("li")`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
`;

const options = assets;

export default function MAbarbs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
            <div className="asc">
                {/* <img src={selectedOption  || "https://ncx.cx/images/btc.svg"} alt="ncx"/> */}
                <p>{selectedOption  || "Select Token"}</p>
            </div>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem className="vsdc" onClick={onOptionClicked(option.image && option.name)} key={Math.random()}>
                    <img className="wefcx" src={option.image} alt="ncx"/>   
                    <p className="bergbv">{option.name} <span>{option.desc}</span></p>            
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}