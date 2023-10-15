const Page = (props) => {
  function divClicked() {
    console.log("Page clicked");
  }

  return <div onClick={divClicked}>{props.children}</div>;
};

export default Page;
