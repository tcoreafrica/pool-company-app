import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

function GoogleLogo(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M0 0H24V24H0z" />
      <G fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M23.04 12.262c0-.815-.073-1.6-.21-2.352H12v4.449h6.19a5.29 5.29 0 01-2.296 3.47v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
          fill="#4285F4"
        />
        <Path
          d="M12 23.499c3.104 0 5.708-1.03 7.61-2.787l-3.716-2.885c-1.03.69-2.347 1.098-3.895 1.098-2.995 0-5.53-2.023-6.434-4.741H1.723v2.98A11.496 11.496 0 0012 23.498z"
          fill="#34A853"
        />
        <Path
          d="M5.565 14.185a6.913 6.913 0 01-.36-2.184c0-.758.13-1.495.36-2.186v-2.98H1.723A11.495 11.495 0 00.5 12.002c0 1.855.444 3.612 1.223 5.164l3.842-2.98z"
          fill="#FBBC05"
        />
        <Path
          d="M12 5.074c1.688 0 3.204.58 4.396 1.72l3.298-3.299C17.702 1.64 15.099.5 12 .5A11.496 11.496 0 001.723 6.835l3.842 2.98c.904-2.718 3.44-4.741 6.434-4.741z"
          fill="#EA4335"
        />
      </G>
    </Svg>
  );
}

export default GoogleLogo;
