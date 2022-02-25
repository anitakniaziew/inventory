/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import findProduct from '../API/friscoApi';

const ShopList = () => (
  <div>
    <input />
    <button type="button" onClick={() => findProduct('banan')} />
  </div>
);

export default ShopList;
