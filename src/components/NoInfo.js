import React from 'react';

class NoInfo extends React.Component {
  render() {
    return (
      <section className="hero is-warning is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Not Found.
            </h1>
            Try another city!
          </div>
        </div>
      </section>
    );
  }
}

export default NoInfo;