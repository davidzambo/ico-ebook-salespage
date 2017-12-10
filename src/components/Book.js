import React, { Component } from 'react';
import OrderNow from './OrderNow';

export default class Book extends Component {
  render() {
    const content = [
      'Előszó', 'A szerzőről', 'Miért írtam ezt a könyvet és kiknek szól?', 'A jövőbeni befektetőid körbeírása, meghatározása',
      'A stratégia', 'Make your story shine', 'Whitepaper', 'Roadmap', 'Milyen a sikeres összefoglaló?', 'Online eszközök',
      'Edukációs marketing', 'Listaépítés', 'Community building', 'Social Media', 'Website & sales page', 'SEO - ha időben építi fel a projektjét',
      'PPC', 'PR', 'A videó ereje', 'Airdrop', 'Bounty campaign', 'The regular ICO Marketing not working anymore'
    ];

    const contentList = content.map( (el, i) => {
      return <li key={el+i}><span className="fa-li"><i className="fas fa-check-square"></i></span>{el}</li>
    } );

    return (
      <div className="container-fluid book">
        <div className="row p-5">
          <header className="col-12 text-white text-right">
            <span>connect with us:</span>
            <i className="fab fa-facebook-square fa-lg mx-2"></i>
            <i className="fab fa-twitter-square fa-lg"></i>
          </header>
        </div>
        <main className="row text-light px-5 pb-5">
          <div className="col-md-5 col-sm-3 col-xs-12">
            <img src="http://www.adazing.com/cover/public/img/templates/thumbs/mock-03.png" alt="Book cover" className="img-fluid"/>
          </div>
          <div className="col-md-7 col-sm-9 col-xs-12">
            <h1>6 Proven Ways How to Attract ICO Investors</h1>
            <h2>ICO Marketing Solutions Playbook</h2>

            <h3 className="mt-5">What you will learn?</h3>
            <ul className="mt-3 fa-ul">
              {contentList}
            </ul>
            <OrderNow/>
          </div>
        </main>
      </div>
    );
  }
}
