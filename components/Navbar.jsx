import Image from "next/image";
import { pathData } from "../data/data";

const pathDivStyles = {
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
  marginTop: "5.3rem",
  marginBottom: "1rem",
};
const pathLinks = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  border: "0.2rem solid teal",
};


const style = {
  pathTextStyles: {
    fontSize: "8.3rem",
  color: "#ffffff",
    display: "flex",
    alignItems: "center",
    backgroundColor: "red",
  },
  "@media screen and (min-width: 990px)": {
    pathTextStyles: {
            fontSize: '0.7rem',
            width: '100%',
    },
  },
};

function NavBarPhones() {
  return (
    <div style={pathDivStyles}>
      <div className="pathDiv">
        {pathData.map((e, i) => {
          return (
            <div key={i} className="pathLinks">
              {e.pathLinks.map((e, i) => {
                return (
                  <a
                    style={style.pathTextStyles}
                    className="pathText"
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
        @media (max-width: 990px) {
          .pathText {
          }
        }
      `}</style>
    </div>
  );
}

export default NavBarPhones;
