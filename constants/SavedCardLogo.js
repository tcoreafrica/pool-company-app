import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SavedCardLogo(props) {
  return (
    <Svg
      width={21}
      height={18}
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.85 0C1.737 0 .833.98.833 2.184v13.102c0 1.204.904 2.183 2.017 2.183h16.133c1.112 0 2.017-.98 2.017-2.183V2.184C21 .979 20.095 0 18.983 0H2.85zm16.133 2.184v2.183H2.85V2.184h16.133zM2.85 8.734h16.134l.001 6.552H2.85V8.735zm9.075 2.184v2.184H4.866v-2.184h7.059z"
        fill="#92929D"
      />
    </Svg>
  )
}

export default SavedCardLogo