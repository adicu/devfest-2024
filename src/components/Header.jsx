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
    /* justify-content: auto; */
    /* overflow: wrap; */
  }

  /* background-color: orange; */
`;

const NextPageMessage = styled.div`
  color: gray;

  font-size: 0.8rem;

  z-index: 1;

  @media (max-width: ${process.env.mobileWidth}) {
    display: none;
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
  display: flex;
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

  width: 200px;
  z-index: 5;
  text-align: center;

  @media (max-width: ${process.env.mobileWidth}) {
    font-size: 1.1rem;
  }
`;

const ButtonNext = styled.button`
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
  display: inline-block;
  font-size: 1.5rem;

  width: 9rem;
  text-align: center;

  :active {
    background-color: #eee;
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
  const [selectedOption, setSelectedOption] = useState("About");
  // const trackOptions = ["About", "Tracks", "Sponsors", "Schedule", "Workshops"];
  const trackOptions = ["About", "Tracks"];

  const pages = Pages(
    props.data,
    props.updatePage,
    props.pageDictionary,
    false
  );

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setDropdownOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const changeDropdown = () => {
    // if (!isDropdownOpen) {
    // setDropdownOpen(true);
    // }
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

  function goLeft() {
    let desktopPage = Math.floor((props.currentPage + 1) / 2);
    desktopPage -= 1;
    let mobilePage = 2 * desktopPage;

    if (mobilePage > 1) {
      props.updatePage(mobilePage);
    }
  }

  function goRight() {
    let desktopPage = Math.floor((props.currentPage + 1) / 2);
    desktopPage += 1;
    let mobilePage = 2 * desktopPage - 1;

    if (mobilePage < pages.length) {
      props.updatePage(mobilePage);
    }
  }

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
      {/* <div className="mobile-hidden">
        <ButtonNext onClick={goLeft}>Previous</ButtonNext>
        <ButtonNext onClick={goRight}>Next</ButtonNext>
        <NextPageMessage>
          (Or click on the right page to advance)
        </NextPageMessage>
      </div> */}
      <ButtonsContainer ref={wrapperRef}>
        {/* <Button> Schedule </Button> */}

        <Button onClick={changeDropdown}>
          {selectedOption} <Arrow>{isDropdownOpen ? "▼" : "►"}</Arrow>
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
