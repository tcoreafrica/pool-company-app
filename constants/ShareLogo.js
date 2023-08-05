import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function ShareLogo(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={21}
        height={21}
      >
        <Path fill="#fff" d="M0 0H21V21H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.813 13.125c.796 0 1.516-.313 2.062-.814l5.477 3.13c-.06.24-.102.487-.102.746a3.066 3.066 0 003.063 3.063 3.066 3.066 0 003.062-3.063 3.066 3.066 0 00-3.063-3.062c-.796 0-1.516.313-2.062.814l-5.477-3.13c.055-.216.09-.44.094-.672L13.25 7.06c.547.5 1.267.814 2.063.814a3.066 3.066 0 003.063-3.063 3.066 3.066 0 00-3.063-3.062 3.066 3.066 0 00-3.062 3.063c0 .259.042.505.102.746L7.38 8.402A3.059 3.059 0 004.813 7a3.066 3.066 0 00-3.063 3.063 3.066 3.066 0 003.063 3.062c.796 0 0 0 0 0z"
          fill="#92929D"
        />
      </G>
    </Svg>
  )
}

export default ShareLogo
