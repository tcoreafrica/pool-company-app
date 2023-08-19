import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MarkerLogo(props) {
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.156 5.732c1.664 0 3.012-1.283 3.012-2.866C11.168 1.283 9.82 0 8.156 0S5.143 1.283 5.143 2.866c0 1.583 1.349 2.866 3.013 2.866zM15 7.017c.725.975-.073 2.655-1.537 4.083l.024.006L7.98 20l-5.315-8.755C1.096 9.788.216 8.025 1 7.018c.81-.615 1.449-.198 2.371.404 1.007.657 2.352 1.535 4.63 1.535 2.587 0 3.904-.963 4.835-1.645.82-.599 1.34-.98 2.164-.294z"
        fill="#383838"
      />
    </Svg>
  )
}

export default MarkerLogo
