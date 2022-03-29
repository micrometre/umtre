import Image from "next/image";
import { pathData } from "../data/data";

const style = {
  pathDivStyles: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#673ab7",
    transition: "100ms ease-in background",
    padding: "1rem",
    alignItems: "center",
    marginTop: "1.3rem",
    marginBottom: "1rem",
  },
  pathLinkStyles: {
    display: "flex",
    justifyContent: "space-around",
  },

  pathHrefStyles: {
    display: "flex",
  },
  pathTextStyles: {
    fontSize: "2.3rem",
    color: "#ffffff",
  },
};

function NavBarPhones() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1030,
          margin: "1rem",
          border: "0.3rem solid teal",
          padding: "0.3rem",
        }}
        className="container"
      >
        <div style={style.pathDivStyles}>
          {pathData.map((e, i) => {
            return (
              <div key={i} style={style.pathLinkStyles}>
                {e.pathLinks.map((e, i) => {
                  return (
                    <a
                      className="path-href"
                      style={style.pathHrefStyles}
                      href={e.href}
                      key={i}
                      title={e.title}
                    >
                      <h1 className="path-text">{e.name}</h1>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .path-text {
          min-height: 10vh;
          line-height: 1.5;
          font-size: 5.5rem;
          color: #0070f3;
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .container {
            width: 100%;
          }

          .path-text {
            min-height: 100vh;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default NavBarPhones;
