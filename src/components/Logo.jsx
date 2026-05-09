import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const Logo = ({ size = 100, color = '#84D32E' }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      {/* Top Capsule */}
      <Rect x="36" y="0" width="28" height="42" rx="14" fill={color} />
      {/* Bottom Capsule */}
      <Rect x="36" y="58" width="28" height="42" rx="14" fill={color} />
      {/* Left Capsule */}
      <Rect x="0" y="36" width="42" height="28" rx="14" fill={color} />
      {/* Right Capsule */}
      <Rect x="58" y="36" width="42" height="28" rx="14" fill={color} />
    </Svg>
  );
};

export default Logo;
