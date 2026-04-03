import Link from "next/link";
import NavLink from "../NavLink/NavLink";

const MainHeader = () => {
  return (
    <>
      <header id="main-header">
        <div id="logo">
          <NavLink href="/">NextNews</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink href="/news"> News</NavLink>
            </li>
            <li>
              <NavLink href="/archive"> Archive</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
