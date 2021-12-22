import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function Padlock(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Composant 8 \u2013 2"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <Rect
        data-name="Rectangle 437"
        width={50}
        height={50}
        rx={25}
        fill="#fff"
      />
      <Path
        data-name="Icon ionic-md-lock"
        d="M20.568 10.144h-.987V8.17a4.935 4.935 0 00-9.87 0v1.974h-.987a1.98 1.98 0 00-1.974 1.974v9.87a1.98 1.98 0 001.974 1.974h11.844a1.98 1.98 0 001.974-1.974v-9.87a1.98 1.98 0 00-1.974-1.974zm-5.922 8.982a1.974 1.974 0 111.974-1.974 1.98 1.98 0 01-1.974 1.973zm3.06-8.982h-6.12V8.17a3.06 3.06 0 016.12 0z"
        transform="translate(10.604 11.167)"
        {...props}
      />
    </Svg>
  );
}

export default Padlock;
