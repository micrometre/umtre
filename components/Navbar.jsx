import Image from "next/image";
import Link from "next/link";
import { pathData } from "../data/data";

function NavBarPhones() {
  const socialIconStyles = {
    fontSize: "2.7rem",
    color: "white",
    borderRadius: "4rem",
    top: "10px",
    right: "20px",
  };
  return (
    <>
      <div className="pathDiv">
        {pathData.map((e, i) => {
          return (
            <div key={i}>
              {e.pathLinks.map((e, i) => {
                return (
                  <a href={e.href} key={i} title={e.title}>
                    {e.name}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .pathDiv {
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: #6c757d;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          padding: 0rem;
          margin-top: 7.9rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 990px) {
          .pathDiv {
            font-size: 0.9rem;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default NavBarPhones;
