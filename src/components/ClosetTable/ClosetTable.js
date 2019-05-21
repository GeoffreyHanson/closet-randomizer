import React, { Component } from 'react';
import Randomize from '../Randomize/Randomize';
// import Item from '../Item/Item';
import './ClosetTable.css';

class ClosetTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shirts: [
        'Gray button-up',
        'White button-up',
        'Black button-up',
      ],
      shoes: [
        'Penny loafers',
        'Caramel loafers',
      ],
    };
  }

  render() {
    const { shirts, shoes } = this.state;
    return (
      <div className="Closet">
        <Randomize
          itemName="Shirt"
          items={shirts}
        />
        <Randomize
          itemName="Shoes"
          items={shoes}
        />
        {/* <Item
          itemName="Shirt"
          items={shirts}
        /> */}
      </div>
    );
  }
}

export default ClosetTable;
