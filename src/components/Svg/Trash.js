import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Trash(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={18}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill={'red'}
        d="M18.5 15a4.501 4.501 0 000 9c2.482 0 4.5-2.015 4.5-4.5S20.982 15 18.5 15zm2.5 5h-5v-1h5v1zM16 9v4.501a6.522 6.522 0 00-2 1.319V9a1 1 0 112 0zm-4 0v10a1 1 0 11-2 0V9a1 1 0 112 0zm1.82 15H2V6h2v16h8.502a6.507 6.507 0 001.318 2zM7 8a1 1 0 011 1v10a1 1 0 11-2 0V9a1 1 0 011-1zm14-4H1V2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2H21v2zm-1 2v7.182A6.45 6.45 0 0018.5 13l-.5.025V6h2z"
      />
    </Svg>
  );
}

export default Trash;
