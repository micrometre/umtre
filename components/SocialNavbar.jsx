import Image from "next/image";
import Link from "next/link";
import { socialdata } from "../data/data";

function NavBarPhones() {
  const socialIconStyles = {
    fontSize: "2.0em",
    color: "#ffffff",
    borderRadius: "1rem",
    top: "10px",
    right: "20px",
  };
  return (
    <>
      {socialdata.map((e, i) => {
        return (
          <div className="socialdiv" key={i}>
            {e.socialLinks.map((e, i) => {
              return (
                <a
                  style={socialIconStyles}
                  href={e.href}
                  key={i}
                  title={e.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icons" key={i}>
                    <e.icons className={socialIconStyles} />
                  </span>
                </a>
              );
            })}
          </div>
        );
      })}
      <style jsx>{`
        .socialdiv {
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: teal;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          padding: 0rem;
          padding-top: 0.1rem;
          margin-bottom: 0rem;
        }
        socialdiv::-webkit-justify-content {
          background: #1e1e24;
        }
        @media (max-width: 990px) {
          .socialdiv {
            font-size: 0.9rem;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default NavBarPhones;
