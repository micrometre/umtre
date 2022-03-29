import Image from "next/image";
import { pathData } from "../data/data";

const style = {
  pathStyles: {
    display: "flex",
  },
  pathDivStyles: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#673ab7",
    transition: "100ms ease-in background",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1030,
    padding: "2rem",
    alignItems: "center",
    marginTop: "5.3rem",
    marginBottom: "1rem",
  },
  pathLinkStyles: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
    pathTextStyles: {
    fontSize: "1.3rem",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-around",
    }
};

function NavBarPhones() {
  return (
    <>
      <div style={style.pathDivStyles}>
        {pathData.map((e, i) => {
          return (
            <div key={i} style={style.pathLinkStyles}>
              {e.pathLinks.map((e, i) => {
                return (
                  <a
                    style={style.pathTextStyles}
                    href={e.href}
                    key={i}
                    title={e.title}
                  >
                    {e.name}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default NavBarPhones;
