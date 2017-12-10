import React, { Component } from 'react';
import OrderNow from './OrderNow';

export default class Advantages extends Component {
  render() {
    const content = [
      'Előszó', 'A szerzőről', 'Miért írtam ezt a könyvet és kiknek szól?', 'A jövőbeni befektetőid körbeírása, meghatározása',
      'A stratégia', 'Make your story shine', 'Whitepaper', 'Roadmap', 'Milyen a sikeres összefoglaló?', 'Online eszközök',
      'Edukációs marketing', 'Listaépítés', 'Community building', 'Social Media', 'Website & sales page', 'SEO - ha időben építi fel a projektjét',
      'PPC', 'PR', 'A videó ereje', 'Airdrop', 'Bounty campaign', 'The regular ICO Marketing not working anymore'
    ];

    const contentList = content.map( (el, i) => {
      return <div className="col-md-6 col-xs-12 my-4">
              <div className="row">
                <div className="col-3 d-flex flex-column justify-content-start">
                  <span className="advantageNumber">{(i+1)}</span>
                </div>
                <div className="col-9">
                  <h4>{el}</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et consectetur eros. Cras tristique porta turpis, quis ultricies ex gravida efficitur. Suspendisse malesuada velit ultricies, tincidunt nibh nec,
                    Sed imperdiet, dolor nec viverra sodales, magna ipsum congue ante, vitae posuere arcu nisl et felis.</p>
                </div>
              </div>
             </div>
    } );

    return (
      <section className="container-fluid">
        <div className="row p-5">
          <header className="col-12 text-center">
            <h1>These are the advantages of the book</h1>
          </header>
        </div>
        <main className="row m-2">
          {contentList}
        </main>
        <div className="col-12 text-center">
          <OrderNow />
        </div>
      </section>
    );
  }
}
