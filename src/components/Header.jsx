import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Pages from "./Pages";

// import DevFestSVG from "../../public/images/titles/devfest-24.svg";

// Styled component for the header container
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  user-select: none;
  @media (max-width: ${process.env.mobileWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleImageDiv = styled.div`
  height: 100%;
  float: left;
  display: flex;

  cursor: pointer;

  @media (max-width: ${process.env.mobileWidth}) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1rem;
    float: center;
  }
`;

const TitleImage = styled.img`
  height: 4.5rem;
  @media (max-width: ${process.env.mobileWidth}) {
    height: 3rem;
  }
`;

const ButtonsContainer = styled.div`
  /* display: flex; */
  gap: 0px;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #888;
  border-left: 1px solid #888;
  border-right: 1px solid #888;
  border-bottom: 1px solid #888;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;

  width: 350px;
  max-width: 100%;
  z-index: 5;
  text-align: center;

  @media (max-width: ${process.env.mobileWidth}) {
    font-size: 1.1rem;
    width: 200px;
  }
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
  z-index: 10000;
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

  @media (max-width: ${process.env.mobileWidth}) {
    font-size: 1.1rem;
  }
`;

const Header = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let trackOptions = [];

  if (props.mobile) {
    const uniqueValues = [...new Set(Object.values(props.pageTitles))];
    trackOptions = uniqueValues;
  } else {
    const uniqueValues = [
      ...new Set(Object.values(props.pageDictionaryDesktop)),
    ];
    trackOptions = uniqueValues;
  }

  const pages = Pages(
    props.data,
    props.updatePage,
    props.pageDictionary,
    false
  );

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdownOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const changeDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const getPageName = (option) => {
    if (props.mobile) {
      return option;
    } else {
      const parts = option.split("/");
      return parts[0];
    }
  };

  const handleDropdownChange = (option) => {
    props.updatePage(props.pageDictionary[getPageName(option)]);
    changeDropdown();
  };

  const goHome = () => {
    props.updatePage(props.pageDictionary["About"]);
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

      <ButtonsContainer ref={wrapperRef}>
        <Button onClick={changeDropdown}>
          {props.mobile
            ? props.pageTitles[props.currentPage]
            : props.pageDictionaryDesktop[props.currentPage]}
          <Arrow>{isDropdownOpen ? "▼" : "►"}</Arrow>
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
