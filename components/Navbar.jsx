import Image from "next/image";
import { pathData } from "../data/data";

function NavBarPhones() {
  return (
    <div className="pathContainer">
      <div className="pathDiv">
          {pathData.map((e, i) => {
            return (
              <div key={i} className="pathLinks">
                {e.pathLinks.map((e, i) => {
                  return (
                    <a
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
        .pathDiv {
          display: flex;
          justify-content: space-around;
          background-color: #673ab7;
          transition: 100ms ease-in background;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          padding: 0rem;
          margin-top: 2.3rem;
          margin-bottom: 1rem;
        }
        .pathLinks {
          width: 100%;
          display: flex;
          justify-content: space-around;
          border: 0.2rem solid teal;
        }
        .pathText {
          font-size: 1.3rem;
          color: #ffffff;
        }
        @media (max-width: 990px) {
          .pathText {
            font-size: 0.7rem;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default NavBarPhones;
