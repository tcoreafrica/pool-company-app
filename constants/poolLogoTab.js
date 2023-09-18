import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PoolLogoTab(props) {
  return (
    <Svg
      width={20}
      height={28}
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.9 20.57A.999.999 0 0011 20H8v-8a1 1 0 00-1-1H5a1 1 0 00-1 1v8H1a1 1 0 00-.75 1.66l5.23 6a1 1 0 00.75.34.999.999 0 00.76-.38l4.77-6a1 1 0 00.14-1.05zM8.1 7.43A1 1 0 009 8h3v8a1 1 0 001 1h2a1 1 0 001-1V8h3a1 1 0 00.75-1.66l-5.23-6a1 1 0 00-.75-.34 1 1 0 00-.76.38l-4.77 6a1 1 0 00-.14 1.05z"
        fill="#92929D"
      />
    </Svg>
  )
}

export default PoolLogoTab
