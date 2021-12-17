import * as React from 'react';
import Svg, { Circle, Text, TSpan } from 'react-native-svg';
import { isAndroid } from '../../helpers/functions';

function PlusButton(props) {
  return (
    <Svg
      data-name="Composant 3 \u2013 10"
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={45}
      viewBox="0 0 34 45"
      {...props}
    >
      <Circle
        data-name="Ellipse 3"
        cx={isAndroid ? 16 : 18}
        cy={isAndroid ? 16 : 18}
        r={18}
        transform="translate(0 9)"
        fill="#ff9300"
      />
      <Text
        data-name="+"
        transform="translate(7 35)"
        fill="#fff"
        fontSize="36px"
        fontFamily="HelveticaNeue-Bold,Helvetica Neue"
        fontWeight={700}
      >
        <TSpan x={0} y={0}>
          {'+'}
        </TSpan>
      </Text>
    </Svg>
  );
}

export default PlusButton;
