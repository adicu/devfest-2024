import React, { useState } from "react";
import styled from "@emotion/styled";

// import DevFestSVG from "../../public/images/titles/devfest-24.svg";

// Styled component for the header container
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; /* Header background color */
  color: #000; /* Text color */
  padding: 7px 20px; /* Add padding as needed */

  /* background-color: purple; */
`;

const TitleImage = styled.img`
  height: 4rem;
  float: left;
  object-fit: cover;
`;

// Styled component for the buttons container
const ButtonsContainer = styled.div`
  display: flex;
  gap: 0px;
  align-items: center;
  position: relative;
`;

// Styled component for the buttons
const Button = styled.button`
  background-color: #fff; /* Button background color */
  color: #000; /* Button text color */
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #888;
  border-left: 1px solid #888;
  border-right: 1px solid #888;
  display: flex;
  justify-content: space-between;
`;

const Arrow = styled.span`
  margin-left: 5px;
  display: inline-block;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: ${(props) => (props.isDropdownOpen ? "block" : "none")};
  z-index: 1;
`;

const OptionButton = styled.button`
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #888;
  width: 100%;
`;

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Index");
  const trackOptions = ["Index", "Track 1", "Track 2", "Judges"];

  const changeDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    changeDropdown();
  };

  //Use this instead if you want dropdown options to take up as much space as index button
  /*<ButtonsContainer>
        <Button> Schedule </Button>
      </ButtonsContainer>
  */
  return (
    <HeaderContainer>
      {/* <Title>DEVFEST 24</Title> */}
      <TitleImage src="/images/titles/devfest-24.svg" />
      <ButtonsContainer>
        <Button> Schedule </Button>
        <div>
          <Button onClick={changeDropdown}>
            {selectedOption} <Arrow>{isDropdownOpen ? "▼" : "▶"}</Arrow>
          </Button>
          {isDropdownOpen && (
            <OptionsContainer isDropdownOpen={isDropdownOpen}>
              {trackOptions.map((option, index) => (
                <OptionButton
                  key={index}
                  onClick={() => handleDropdownChange(option)}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionsContainer>
          )}
        </div>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
