import SpeakerPage from "./SpeakerPage";

const testingData = [
  {
    "Speaker name": "Alice Smith",
    "Company/Affiliation": "Data Dynamics Corp.",
    Bio: "Alice Smith is a data science expert with a passion for solving complex problems. She has extensive experience in developing data-driven solutions for various industries.",
    "Linkedin/Website": "https://www.linkedin.com/in/alicesmith",
    "Event Name": "Data Summit 2024",
  },
  {
    "Speaker name": "Bob Johnson",
    "Company/Affiliation": "InnovateTech Labs",
    Bio: "Bob Johnson is a technology evangelist with a focus on emerging trends in the tech industry. His innovative ideas have contributed to the success of several cutting-edge projects.",
    "Linkedin/Website": "https://www.linkedin.com/in/bobjohnson",
    "Event Name": "Tech Expo 2024",
  },
  {
    "Speaker name": "Eva Rodriguez",
    "Company/Affiliation": "GreenTech Solutions",
    Bio: "Eva Rodriguez is an environmental scientist turned tech entrepreneur. She is dedicated to developing sustainable and eco-friendly technology solutions for a better future.",
    "Linkedin/Website": "https://www.linkedin.com/in/evarodriguez",
    "Event Name": "Sustainable Tech Conference",
  },
  {
    "Speaker name": "David Lee",
    "Company/Affiliation": "Quantum Innovations",
    Bio: "David Lee is a quantum computing enthusiast who has made significant contributions to the field. His research focuses on harnessing the power of quantum mechanics for advanced computing applications.",
    "Linkedin/Website": "https://www.linkedin.com/in/davidlee",
    "Event Name": "Quantum Tech Symposium",
  },
  {
    "Speaker name": "Grace Chen",
    "Company/Affiliation": "HealthTech Solutions",
    Bio: "Grace Chen is a healthcare technology expert committed to improving patient outcomes through innovative digital solutions. Her work has positively impacted the healthcare industry.",
    "Linkedin/Website": "https://www.linkedin.com/in/gracechen",
    "Event Name": "HealthTech Summit 2024",
  },
  {
    "Speaker name": "Mark Taylor",
    "Company/Affiliation": "CyberGuard Systems",
    Bio: "Mark Taylor is a cybersecurity expert with a proven track record in securing digital landscapes. His insights into the evolving cyber threats landscape are highly valued in the industry.",
    "Linkedin/Website": "https://www.linkedin.com/in/marktaylor",
    "Event Name": "Cybersecurity Forum",
  },
  {
    "Speaker name": "Sophie Davis",
    "Company/Affiliation": "Future Trends Institute",
    Bio: "Sophie Davis is a futurist and technology trend analyst. Her research delves into the potential impact of emerging technologies on society, businesses, and everyday life.",
    "Linkedin/Website": "https://www.linkedin.com/in/sophiedavis",
    "Event Name": "Future Tech Symposium",
  },
  {
    "Speaker name": "Michael Reynolds",
    "Company/Affiliation": "AeroSpace Innovations",
    Bio: "Michael Reynolds is an aerospace engineer and innovator. His work in developing cutting-edge aerospace technologies has contributed to advancements in space exploration.",
    "Linkedin/Website": "https://www.linkedin.com/in/michaelreynolds",
    "Event Name": "AeroSpace Tech Summit",
  },
  {
    "Speaker name": "Linda Martinez",
    "Company/Affiliation": "Robotics Dynamics",
    Bio: "Linda Martinez is a robotics engineer specializing in humanoid robotics. Her expertise lies in creating robots that can mimic human movements and interactions.",
    "Linkedin/Website": "https://www.linkedin.com/in/lindamartinez",
    "Event Name": "Robotics Innovation Expo",
  },
];

function splitArray(array, chunkSize) {
  const resultArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }
  return resultArray;
}

export function getSpeakerPages(data) {
  if (data === undefined) {
    return [];
  }

  const events = data.schedule;

  let speakers = [];
  let judges = [];
  let seen = new Set();

  for (let i = 0; i < events.length; i++) {
    const speakerName = events[i]["Speaker name"];

    if (speakerName == "" || speakerName == "NA") {
      continue;
    }
    if (events[i]["Headshot"] == "") {
      continue;
    }
    if (events[i]["Bio"] == "") {
      continue;
    }
    if (seen.has(speakerName)) {
      continue;
    }

    if (events[i]["Event name/title"] == "Judging & Submission Presentations") {
      judges.push(events[i]);
    } else {
      speakers.push(events[i]);
    }
    seen.add(speakerName);
  }

  if (process.env.testing) {
    speakers = speakers.concat(testingData);
  }

  const splitJudges = splitArray(judges, 3);
  const splitArrays = splitArray(speakers, 3);

  let result = [];

  for (let i = 0; i < splitJudges.length; i++) {
    result.push(
      <SpeakerPage judges={true} key={i} speakers={splitJudges[i]} />
    );
  }

  // for (let i = 0; i < splitArrays.length; i++) {
  //   result.push(
  //     <SpeakerPage judges={false} key={i} speakers={splitArrays[i]} />
  //   );
  // }

  return result;
}
