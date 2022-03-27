import Link from "next/link";
import Image from "next/image";
import { FaTwitter,  FaEnvelope } from 'react-icons/fa';
// data
const links = [
  {
    title: "Follow us on twitter",
    text: "Follow us on twitter",
    url: "https://twitter.com/elmbridgepaint1",
    subtitle: "Twitter Icon",
    icons: FaTwitter
  }
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
        background: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <main
        style={{
          padding: 0,
        display: "flex",
        }}
      >
        <ul
        >
          {links.map((link) => (
            <li
              key={link.url}
            >
              <span>
                <a
                  href={`${link.url}`}
                >
                  {link.text}
                </a>
                <link.icons  />

              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default IndexPage;
