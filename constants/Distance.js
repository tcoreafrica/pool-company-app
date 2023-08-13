import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"

function Distance(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 19.33l9.333-9.333L10 .664H2c-.737 0-1.334.597-1.334 1.333v8L10 19.331z"
        fill="#053582"
      />
      <Path
        d="M7.333 5.997a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"
        fill="#053582"
      />
      <Ellipse
        cx={1.66667}
        cy={1.66667}
        rx={1.66667}
        ry={1.66667}
        transform="matrix(-1 0 0 1 8.333 5)"
        fill="#fff"
      />
    </Svg>
  )
}

export default Distance
