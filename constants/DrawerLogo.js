import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DrawerLogo(props) {
  return (
    <Svg
      width={16}
      height={14}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 1a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1zM0 13a1 1 0 011-1h14a1 1 0 010 2H1a1 1 0 01-1-1zM1 6a1 1 0 000 2h8a1 1 0 000-2H1z"
        fill="#000"
      />
    </Svg>
  )
}

export default DrawerLogo