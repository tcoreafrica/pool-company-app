import * as React from "react"
import Svg, { Rect, Circle, Path } from "react-native-svg"

function DelivryRiderLogo(props) {
  return (
    <Svg
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={2} y={2} width={37} height={37} rx={18.5} fill="#5A5A5A" />
      <Circle
        cx={20.5}
        cy={20.5}
        r={19.5}
        fill="#F7F7F7"
        stroke="#053582"
        strokeWidth={2}
      />
      <Path
        opacity={0.4}
        d="M25.785 15.614a5.285 5.285 0 11-10.57 0 5.285 5.285 0 0110.57 0z"
        fill="#000"
      />
      <Path
        d="M24.2 22.223h-.69a7.19 7.19 0 01-6.02 0h-.69a5.551 5.551 0 00-5.55 5.55v1.718a1.982 1.982 0 001.982 1.982h14.536a1.982 1.982 0 001.982-1.982v-1.718a5.551 5.551 0 00-5.55-5.55z"
        fill="#053582"
      />
    </Svg>
  )
}

export default DelivryRiderLogo
