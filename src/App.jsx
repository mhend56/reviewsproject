import './index.css';

import React from 'react';

import { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const nextPerson = () => {
    setIndex((index + 1 + people.length) % people.length);
  };
  //     index < people.length - 1 ? setIndex(index + 1) : setIndex(0);
  //   };
  const prevPerson = () => {
    setIndex((index - 1 + people.length) % people.length);
  };

  //     index > 0 ? setIndex(index - 1) : setIndex(people.length - 1);
  //   };
  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Random Person
        </button>
      </article>
    </main>
  );
};
export default App;
