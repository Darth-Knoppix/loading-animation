import React from "react";
import ThreeDotsWave from "./ThreeDotsWave";
import BouncingBall from "./BouncingBall";

function App() {
  return (
    <div className="container">
      <article className="info">
        <header className="header">
          <span className="subtitle">React Animation</span>
          <h1 className="title">Loading animations</h1>
        </header>
        <section className="content">
          <p>
            Using Framer Motion, we can create custom loading animations easily.
          </p>
        </section>
      </article>
      <Grid>
        <ThreeDotsWave />
        <BouncingBall />
      </Grid>
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid">
      <LoadingBox>{children}</LoadingBox>
    </div>
  );
}

function LoadingBox({ children }) {
  return React.Children.map(children, child => {
    return <div className="loading-box">{child}</div>;
  });
}

export default App;
