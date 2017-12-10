import React, { Component } from 'react';
import OrderNow from './OrderNow';

export default class Author extends Component {
  render() {
    return (
      <section className="container-fluid bg-secondary p-5">
        <div className="row p-5">
          <header className="col-12 text-center">
            <h1>About the author</h1>
          </header>
        </div>
        <main className="row m-2">
          <div className="col-md-6 col-sm-4 col-xs-12">
            <img src="https://thumbs.dreamstime.com/z/cute-female-author-vintage-19188511.jpg" alt="Author stock" className="img-fluid"/>
          </div>
          <div className="col-md-6 col-sm-8 col-xs-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et consectetur eros. Cras tristique porta turpis, quis ultricies ex gravida efficitur. Suspendisse malesuada velit ultricies, tincidunt nibh nec, consectetur nulla. Quisque vitae tellus augue. Morbi porttitor luctus nibh, et convallis diam porttitor non. Quisque tincidunt pellentesque velit, ac vehicula est suscipit sed. Quisque feugiat, sapien ut mollis iaculis, urna augue vestibulum nisi, vel molestie diam nulla vitae risus. Sed imperdiet, dolor nec viverra sodales, magna ipsum congue ante, vitae posuere arcu nisl et felis.
            </p>
            <p>
              Suspendisse molestie fringilla aliquet. Proin viverra nisl quis imperdiet suscipit. Nulla elementum eros nisl. Suspendisse ac finibus sapien. Phasellus sit amet tellus lectus. Vivamus suscipit est et leo pretium, eget scelerisque velit tempus. Ut vitae commodo enim. Nullam aliquam ex nec sem auctor blandit. Curabitur pellentesque finibus congue. Nam lacinia nisi velit, et blandit enim viverra vitae. Ut vestibulum ligula at est scelerisque, a lacinia neque commodo. Aenean lectus erat, congue nec venenatis in, imperdiet eget felis. Ut varius augue nec laoreet fringilla.
            </p>
          </div>
        </main>
        <div className="col-12 text-center">
          <OrderNow />
        </div>
      </section>
    );
  }
}
