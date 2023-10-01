import React, { useState } from "react";
import styled from "@emotion/styled";

// Styled component for the header container
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; /* Header background color */
  color: #fff; /* Text color */
  padding: 10px 20px; /* Add padding as needed */
`;

// Styled component for the title
const Title = styled.div`
  flex: 1; /* Take up available space, pushing buttons to the right */
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: bold;
`;

// Styled component for the buttons container
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px; /* Add spacing between buttons */
`;

// Styled component for the buttons
const Button = styled.button`
  background-color: #007bff; /* Button background color */
  color: #fff; /* Button text color */
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const trackOptions = ["Track 1", "Track 2", "Judges"];

  const handleDropdownChange = (event) => {
    setSelectedIndex(event.target.value);
    console.log(event.target.value);
  };

  return (
    <HeaderContainer>
      <Title>DevFest 2024</Title>
      <ButtonsContainer>
        <Button> Schedule </Button>
        <div>
          <Button>Index {selectedIndex}</Button>
          <select value={selectedIndex} onChange={handleDropdownChange}>
            {trackOptions.map((option, index) => (
              <option key={index} value={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
