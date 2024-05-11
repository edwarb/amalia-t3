import { css } from "@emotion/css";
import Image from "next/image";

const HEADER = [
  "Booking",
  "Home",
  "Tentang Kami",
  "Artikel",
  "Vaksinasi & Imunisasi",
  "MCU",
  "Promosi",
  "Galeri",
  "Hubungi Kami",
];

function Header() {
  return (
    <section className={styles.wrapper}>
      <nav>
        <div style={{ width: 150 }}>
          <Image
            src={"/img/amec-new.png"}
            alt="Icon"
            width={150}
            height={150}
          />
        </div>
      </nav>

      <nav className={styles.navlink}>
        <ul className={styles.flex}>
          {HEADER.map((val) => (
            <li key={val}>
              <a href={"#"}>{val}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Header;

const styles = {
  wrapper: css({
    paddingLeft: 24,
    paddingRight: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: `4rem`,
    boxShadow: "0px -15px 20px",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",

    ["@media screen and (max-width: 770px)"]: {
      display: "flex",
      padding: 0,
      position: "relative",
      flexDirection: "column",
    },
  }),
  navlink: css({
    display: "flex",
    ["@media screen and (max-width: 770px)"]: {
      display: "none",
      padding: 0,
      position: "relative",
      flexDirection: "column",
    },
  }),
  flex: css({
    display: "flex",
    gap: 24,
  }),
};
