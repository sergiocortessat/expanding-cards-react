import React, { ReactNode } from "react";
import "./style.css";
const StickyNavbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const scrollHandler = () => {
    if (navRef.current) {
      // if(window.scrollY > 100) {
      if (window.scrollY > navRef.current.offsetHeight + 150) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  console.log(navRef);
  return (
    <>
      <nav className={`nav ${isActive ? "active" : ""}`} ref={navRef}>
        <div className="container">
          <h1 className="logo">
            <a href="../../../public/index.html">My website</a>
          </h1>
          <ul>
            <li>
              <a href={"#"} className="current">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <h1>Welcome to my website</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            aspernatur explicabo inventore amet odit veritatis, fugit corporis
            ipsum modi similique soluta dolor eum, quia ipsa facilis recusandae
            rerum eligendi minima!
          </p>
        </div>
      </div>

      <section className="container content">
        <h2>Content One</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          impedit consectetur commodi, dolorem sint, cupiditate nam maxime iste
          quisquam autem quae voluptatum dicta debitis, beatae illum molestias
          amet ipsam voluptatibus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate ex consequatur, iste temporibus inventore
          quos veritatis cum odio veniam excepturi dolores quibusdam porro illum
          minus voluptas repellat omnis voluptates. Quidem! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Numquam sit quo eos magni
          placeat possimus distinctio rem iure. Accusamus labore explicabo dicta
          quibusdam quisquam molestiae corporis, ipsam harum ad velit. lorem
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          expedita numquam, veniam quos molestiae ea iste magnam sed! Soluta
          quisquam obcaecati maiores animi reprehenderit aliquid alias facilis
          perferendis totam enim!
        </p>

        <h3>Content Two</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex
          consequatur, iste temporibus inventore quos veritatis cum odio veniam
          excepturi dolores quibusdam porro illum minus voluptas repellat omnis
          voluptates. Quidem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Numquam sit quo eos magni placeat possimus distinctio rem iure.
          Accusamus labore explicabo dicta quibusdam quisquam molestiae
          corporis, ipsam harum ad velit. lorem Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Recusandae expedita numquam, veniam
          quos molestiae ea iste magnam sed! Soluta quisquam obcaecati maiores
          animi reprehenderit aliquid alias facilis perferendis totam enim!
        </p>
      </section>
    </>
  );
};

export default StickyNavbar;
