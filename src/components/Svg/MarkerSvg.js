import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

function MarkerSvg({ fill = '#ff8900' }) {
  return (
    <Svg
      data-name="Groupe 1136"
      xmlns="http://www.w3.org/2000/svg"
      width={21.274}
      height={31.911}
      viewBox="0 0 21.274 31.911"
    >
      <G data-name="Groupe 2">
        <Path
          data-name="Icon material-location-on"
          d="M10.637 0A10.9 10.9 0 000 11.169c0 8.377 10.637 20.742 10.637 20.742s10.637-12.365 10.637-20.742A10.9 10.9 0 0010.637 0z"
          fill={fill}
        />
      </G>
      <Circle
        data-name="Ellipse 1"
        cx={4}
        cy={4}
        r={4}
        transform="translate(6.474 6.524)"
        fill="#fff"
      />
    </Svg>
  );
}

export default MarkerSvg;
