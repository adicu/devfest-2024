import React, { useState } from "react";
import styled from "@emotion/styled";

// import DevFestSVG from "../../public/images/titles/devfest-24.svg";

// Styled component for the header container
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const TitleImageDiv = styled.div`
  height: 4.5rem;
  /* margin-left: 2rem; */
  /* margin-right: 2rem; */
  /* margin-top: 1rem; */
  height: 100%;
  float: left;
  display: flex;

  cursor: pointer;

  @media (max-width: ${process.env.mobileWidth}) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    float: center;
  }
`;

const TitleImage = styled.img`
  height: 4.5rem;
  @media (max-width: ${process.env.mobileWidth}) {
    height: 2.5rem;
  }
`;

// Styled component for the buttons container
const ButtonsContainer = styled.div`
  /* margin-right: 2rem; */
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
  font-size: 1.5rem;
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
  font-size: 1.5rem;
`;

const Header = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("About");
  const trackOptions = ["About", "Tracks"];

  const changeDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    props.updatePage(props.pageDictionary[option]);
    changeDropdown();
  };

  const goHome = () => {
    props.updatePage(props.pageDictionary["Home"]);
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <HeaderContainer>
      <TitleImageDiv onClick={goHome}>
        <TitleImage
          onDragStart={preventDragHandler}
          src="/images/titles/devfest.svg"
        />
        <TitleImage
          onDragStart={preventDragHandler}
          src="/images/titles/24.svg"
        />
      </TitleImageDiv>
      <ButtonsContainer>
        {/* <Button> Schedule </Button> */}

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
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
