import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const IconHome = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="-2 -2 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin"
    className="jam jam-home"
    {...props}>
    <Path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2z" />
  </Svg>
);

export const IconSearch = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="-2.5 -2.5 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin"
    className="jam jam-search"
    {...props}>
    <Path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m6.32-1.094 3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
  </Svg>
);

export const IconCart = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1a1 1 0 0 0 0 2h2.206l2.78 11.909a4 4 0 0 0 3.779 3.09V18h7.822a4 4 0 0 0 3.943-3.325l1.256-7.338A2 2 0 0 0 20.814 5H5.727l-.753-3.227A1 1 0 0 0 4 1zm5.194 6 1.739 7.454A2 2 0 0 0 9.88 16h7.706a2 2 0 0 0 1.972-1.663L20.814 7z"
      fill={props.fill ? props.fill : '#3AB586'}
    />
    <Path
      d="M8 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      fill={props.fill ? props.fill : '#3AB586'}
    />
  </Svg>
);

export const IconProfile = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G stroke={props.stroke ? props.stroke : '#3AB586'} strokeWidth={2}>
      <Path
        d="M12 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M5 18.571A4.57 4.57 0 0 1 9.571 14h4.858A4.57 4.57 0 0 1 19 18.571 3.43 3.43 0 0 1 15.571 22H8.43A3.43 3.43 0 0 1 5 18.571Z" />
    </G>
  </Svg>
);
