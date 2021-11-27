import React, {MouseEvent} from "react";
import "./style.css";

const RotatingNavigation = () => {
  const [show, setShow] = React.useState(true);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow((prev) => !prev);
    console.log(show);
  }

  return (
    <>
      <div className={`container ${show ? 'show-nav' : '' }`}>
        <div className="circle-container">
          <div className="circle">
            <button type="button" id="close" onClick={handleClick}>
              <i className="fas fa-times"></i>
            </button>
            <button id="open" onClick={handleClick}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className="content">
          <h1>Amazing article</h1>
          <small>Florin pop</small>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            voluptas, esse necessitatibus reiciendis a ex, et numquam incidunt
            consequuntur, tempore suscipit voluptatum repellat ad rem commodi
            voluptates officia nemo facere vero consequatur nam dignissimos
            modi. Necessitatibus eaque numquam quis consequatur recusandae eos
            laudantium, quasi eius vel tempora harum ab inventore. Deleniti
            animi qui fugit, rerum placeat minima iusto illum temporibus
            doloribus in, nihil unde, reprehenderit ipsam libero. Recusandae
            quisquam consequatur sint est illo sit ad deserunt, vero magni sunt
            iure rerum voluptas! Assumenda expedita repudiandae, eius officiis
            molestiae aut voluptatibus repellendus debitis libero corporis
            obcaecati commodi. Sunt autem vel illum!
          </p>
          <h3>My dog</h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <i className="fas fa-home">Home</i>
          </li>
          <li>
            <i className="fas fa-user-alt">About</i>
          </li>
          <li>
            <i className="fas fa-envelope">Contact</i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RotatingNavigation;
