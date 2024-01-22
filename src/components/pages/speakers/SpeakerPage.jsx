const SpeakerPage = (props) => {
  const speakers = props.speakers; // Array of up to 3 speakers/event information

  function goToEvent(eventName) {
    console.log("Event name " + eventName);
  }

  return (
    <div>
      {speakers.map((speaker, speakerIndex) => (
        <div key={speakerIndex}>
          <h2>{speaker["Speaker name"]}</h2>
          <h4>{speaker["Company/Affiliation"]}</h4>
          <br />
          <a href={speaker["Linkedin/Website"]}>LinkedIn/Website</a>
          <br />
          <button onClick={() => goToEvent(speaker["Event name"])}>
            Go to event
          </button>
          <br />
          <p>{speaker["Bio"]}</p>
        </div>
      ))}
    </div>
  );
};

export default SpeakerPage;
