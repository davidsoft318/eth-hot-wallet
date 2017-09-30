/**
*
* AddressItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AddressItem(props) {
  const { address, data, onChangeFrom } = props;

  const ether = '1000000000000000000'; // Wei

  const eth = data.get('eth');
  console.log(eth);

  return (
    <div>
      {address} |
      Balance: {eth.get('balance') !== false ? eth.get('balance').div(ether).toString(10) + ' Ether ' : 'n/a'}
      <button onClick={() => onChangeFrom(address)}>
        Send
      </button>
    </div>
  );
}

AddressItem.propTypes = {
  address: PropTypes.string,
  data: PropTypes.object,
  onChangeFrom: PropTypes.func,
};

export default AddressItem;
