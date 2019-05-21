import React from 'react';
// import ClosetTable from '../ClosetTable/ClosetTable';

function Item(props) {
  const { items, itemName } = props; // eslint-disable-line
  const index = Math.floor((Math.random() * items.length));
  return (
    <div className="RandomItem">
      <button
        type="button"
        // onClick={Item(props)}
      />
      <p>
        {itemName}
        {' '}
        {items[index]}
      </p>
    </div>
  );
}

export default Item;
