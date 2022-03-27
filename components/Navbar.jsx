import Link from "next/link";
import Image from "next/image";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  top: "0px",
  position: "fixed",
  overflow: "hidden",
  width: "100%",
  background: "yellow",
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
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
      <main style={pageStyles}>
        <ul style={listStyles}>
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                  {link.text}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </main>
  );
};

export default IndexPage;
