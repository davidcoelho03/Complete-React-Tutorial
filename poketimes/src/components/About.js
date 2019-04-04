import React from 'react';
import Rainbow from './hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet a sit nihil harum, odio eveniet minima ipsum repellendus esse animi! Sunt id aspernatur sequi voluptates ipsa fugiat a in obcaecati?
      </p>
    </div>
  )
}

export default Rainbow(About);