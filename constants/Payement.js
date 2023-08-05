import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Payementlogo(props) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 13.625v-8.5C20 3.956 19.1 3 18 3H4c-1.1 0-2 .956-2 2.125v8.5c0 1.169.9 2.125 2 2.125h14c1.1 0 2-.956 2-2.125zm-2 0H4v-8.5h14v8.5zm-7-7.438c-1.66 0-3 1.424-3 3.188 0 1.764 1.34 3.188 3 3.188s3-1.424 3-3.188c0-1.764-1.34-3.188-3-3.188zm13 0v11.688C24 19.044 23.1 20 22 20H5v-2.125h17V6.187h2z"
        fill="#92929D"
      />
    </Svg>
  )
}

export default Payementlogo