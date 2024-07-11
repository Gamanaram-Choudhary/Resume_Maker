import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import styles from "./Body.module.css";
import SectionHeader from "./SectionHeader";
import Contact from "../Contact/Contact";

function Body() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const verifyUser = async () => {
    try {
      const res = await fetch("http://localhost:4000/verify-user", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.status) {
        setUser(data.user.name);
      }
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const colors = ["#ed8936", "#239ce2", "#48bb78", "#0bc5ea", "#a0aec0"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div>
      <div className={styles.container}>
        <SectionHeader />
        <div className={styles.toolbar}>
          <div className={styles.colors}>
            {colors.map((item) => (
              <span
                key={item}
                style={{ backgroundColor: item }}
                className={`${styles.color} ${
                  activeColor === item ? styles.active : ""
                }`}
                onClick={() => setActiveColor(item)}
              />
            ))}
          </div>
          {user ? (
            <ReactToPrint
              trigger={() => {
                return (
                  <button className="bg-sky-600 rounded hover:bg-sky-400  text-white font-bold md:text-sm active:bg-sky-600">
                    Download <ArrowDown />
                  </button>
                );
              }}
              content={() => resumeRef.current}
            />
          ) : (
            <div>
              <Link
                to="/login"
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:text-xl"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
        <div className={styles.main}>
          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
          <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Body;
