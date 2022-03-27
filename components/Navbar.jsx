import Link from "next/link";
import Image from "next/image";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  top: "0px",
  position: "fixed",
  overflow: "hidden",
  width: "100%",
  background: "#563d7c",
  display: "flex",
};
const listStyles = {
  marginBottom: 1,
  paddingLeft: 0,
  overflow: "hidden",
  display: "block",
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  margin: 30,
};

const linkStyle = {
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: 16,
};

// data
const links = [
  {
    text: "MicrometreUK",
    url: "/",
    description: "Brand Logo.",
    color: "#563d7c",
  },
  {
    text: "MicrometreUK Github repositories",
    url: "https://github.com/micrometreuk",
    description: "projects/repos hosted on github",
    color: "#1099A8",
  },
  {
    text: "Find us on Facebook",
    url: "https://www.facebook.com/micro.metre.9",
    description: "projects comminity group",
    color: "#BC027F",
  },
];

// markup
const IndexPage = () => {
  return (
    <div
      style={{
        border: "0.2rem solid teal",
        padding: 0,
        top: "0px",
        position: "fixed",
        overflow: "hidden",
        width: "100%",
        background: "#563d7c",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <main
        style={{
          padding: 0,
        display: "flex",
        }}
      >
        <ul
          style={{
        display: "flex",
            padding: 0,
            border: "0.1rem solid teal",
          }}
        >
          {links.map((link) => (
            <li
              key={link.url}
              style={{
                padding: 0,
                backgroundColor: "#ffffff",
                border: "0.2rem solid teal",
              }}
            >
              <span>
                <a
                  style={{
                    padding: 0,
                    border: "0.2rem solid teal",
                  }}
                  href={`${link.url}`}
                >
                  {link.text}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default IndexPage;
