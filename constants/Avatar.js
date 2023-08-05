import * as React from "react"
import Svg, { Rect, Circle, Path } from "react-native-svg"

function AvatarLogo(props) {
  return (
    <Svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={7} y={3.5} width={36} height={36} rx={18} fill="#5A5A5A" />
      <Circle cx={23.5} cy={19.5} r={19.5} fill="#F7F7F7" />
      <Path
        opacity={0.4}
        d="M30.07 12.384a6.072 6.072 0 11-12.143 0 6.072 6.072 0 0112.144 0z"
        fill="#92929D"
      />
      <Path
        d="M28.25 19.973h-.792a8.259 8.259 0 01-6.916 0h-.792a6.376 6.376 0 00-6.375 6.375v1.973a2.277 2.277 0 002.277 2.277h16.696a2.276 2.276 0 002.277-2.277v-1.973a6.376 6.376 0 00-6.375-6.375z"
        fill="#053582"
      />
    </Svg>
  )
}

export default AvatarLogo
