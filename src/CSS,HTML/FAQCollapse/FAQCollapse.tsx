import React from "react";
import "./style.css";
const FAQCollapse = () => {
  const [isActive, setIsActive] = React.useState("0");

  const [textBoxess, setTextBoxess] = React.useState([
    {
      title: "Why shouldn't we trust atoms in this",
      text: "They make up everything",
      active: false,
    },
    {
      title: " What do you call someone with no body and no nose?",
      text: "Nobody knows.",
      active: false,
    },
    {
      title: "What's the object-oriented way to become wealthy?",
      text: "Inheritance.",
      active: false,
    },
    {
      title: "How many tickles does it take to tickle an octopus?",
      text: "Ten-tickles!",
      active: false,
    },
    {
      title: "What is: 1 + 1?",
      text: "Depends on who are you asking.",
      active: false,
    },
  ]);

  // const textBoxes = [
  //   {
  //     title: "Why shouldn't we trust atoms in this",
  //     text: "They make up everything",
  //     active: true,
  //   },
  //   {
  //     title: " What do you call someone with no body and no nose?",
  //     text: "Nobody knows.",
  //     active: false,
  //   },
  //   {
  //     title: "What's the object-oriented way to become wealthy?",
  //     text: "Inheritance.",
  //     active: false,
  //   },
  //   {
  //     title: "How many tickles does it take to tickle an octopus?",
  //     text: "Ten-tickles!",
  //     active: false,
  //   },
  //   {
  //     title: "What is: 1 + 1?",
  //     text: "Depends on who are you asking.",
  //     active: false,
  //   },
  // ];

  const oldHandleExpandClick = (id:string) => {
    if (isActive === id) {
      setIsActive("");
    } else {
      setIsActive(id);
    }
  }


  const handleExpandClick = (id: string) => {
    if (isActive === id) {
      // textBoxes[Number(id)].active = !textBoxes[Number(id)].active;
      setIsActive("");

      setTextBoxess((prev: any) => {
        return [
          ...prev.map((textBox: any, index: number) => {
            if (index === Number(id)) {
              textBox.active = false;
              return textBox;
            } else {
              textBox.active = false;
              return textBox;
            }
          }),
        ];
      });
    } else {
      setIsActive(id);
      setTextBoxess((prev: any) => {
        return [
          ...prev.map((textBox: any, index: number) => {
            if (index === Number(id)) {
              textBox.active = true;
              return textBox;
            } else {
              textBox.active = false;
              return textBox;
            }
          }),
        ];
      });
    }
  };

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {textBoxess.map((textBox, index) => (
          <div className={`faq ${textBox.active ? "active" : ""}`}>
            <h3 className="faq-title">{textBox.title}</h3>
            <p className="faq-text">{textBox.text}</p>

            <button
              className="faq-toggle"
              type="button"
              onClick={() => handleExpandClick(String(index))}
            >
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}

        {/* <div className={`faq ${isActive === '1' ? "active" : ''}`}>
          <h3 className="faq-title">Why shouldn't we trust atoms in this</h3>
          <p className="faq-text">They make up everything</p>

          <button id="0" className="faq-toggle" type="button" onClick={(e) => oldHandleExpandClick(e.currentTarget.id)}>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div  className={`faq ${isActive === '2' ? "active" : ''}`}>
          <h3 className="faq-title">
            {" "}
            What do you call someone with no body and no nose?
          </h3>
          <p className="faq-text"> Nobody knows.</p>

          <button id='2' className="faq-toggle" type="button" onClick={(e) => handleExpandClick(e.currentTarget.id)}>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div  className={`faq ${isActive === '3' ? "active" : ''}`}>
          <h3 className="faq-title">
            {" "}
            What's the object-oriented way to become wealthy?
          </h3>
          <p className="faq-text"> Inheritance.</p>

          <button id='3' className="faq-toggle" type="button" onClick={(e) => handleExpandClick(e.currentTarget.id)}>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={`faq ${isActive === '4' ? "active" : ''}`}>
          <h3 className="faq-title">
            {" "}
            How many tickles does it take to tickle an octopus?
          </h3>
          <p className="faq-text">Ten-tickles!</p>

          <button  id='4'className="faq-toggle" type="button" onClick={(e) => handleExpandClick(e.currentTarget.id)}>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div  className={`faq ${isActive === '5' ? "active" : ''}`}>
          <h3 className="faq-title"> What is: 1 + 1?</h3>
          <p className="faq-text"> Depends on who are you asking.</p>

          <button id='5' className="faq-toggle" type="button" onClick={(e) => handleExpandClick(e.currentTarget.id)}>
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-times"></i>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default FAQCollapse;
