import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Arrow = ({ direction }) => {
  const iconName = direction === 'left' ? 'chevron-back' : 'chevron-forward';

  return (
    <Ionicons
      name={iconName}
      size={22}
      color={'white'}
    />
  );
};

export default Arrow;
