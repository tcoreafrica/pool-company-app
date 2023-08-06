import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SupportLogo(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.228 13.105a.96.96 0 11-1.922 0 .96.96 0 011.922 0zm3.9-.96a.96.96 0 100 1.921.96.96 0 000-1.921zm6.926.425v1.826a1.66 1.66 0 01-1.66 1.66H20.19c-1.194 3.314-4.242 5.316-6.493 5.316-2.25 0-5.298-2.002-6.492-5.316H6.001a1.66 1.66 0 01-1.66-1.66V12.57c0-.631.352-1.18.87-1.46.017-2.593.773-4.618 2.25-6.018C8.923 3.704 11.022 3 13.696 3c2.675 0 4.774.704 6.238 2.092 1.476 1.4 2.231 3.425 2.249 6.017.518.281.87.83.87 1.46zm-3.513.541c0-.427-.022-.828-.055-1.217-.736-.674-2.074-1.185-3.761-1.376.221.25.413.577.529 1.01-1.034-.815-3.064-.622-4.599-2.444a4.905 4.905 0 01-.23-.288l-.002-.003c-.273-.37-.366-.589-.371-.346-.045 2.095-1.53 3.728-3.179 3.959-.01.23-.019.463-.019.705 0 .886.145 1.693.39 2.42.927 1.117 2.456 1.433 3.81 1.516.252-.4.815-.678 1.472-.678.89 0 1.612.512 1.612 1.144 0 .632-.722 1.144-1.612 1.144-.685 0-1.268-.303-1.502-.731-.946-.055-1.986-.216-2.913-.654 1.303 1.921 3.324 2.938 4.586 2.938 1.984 0 5.844-2.506 5.844-7.099zm1.643-2.201c-.105-4.524-2.688-6.914-7.487-6.914-4.799 0-7.38 2.39-7.487 6.914h.64c.233-1.525.726-2.78 1.476-3.743C9.52 5.63 11.327 4.85 13.697 4.85c2.37 0 4.178.78 5.372 2.316.75.964 1.243 2.218 1.477 3.743h.638z"
        fill="#92929D"
      />
    </Svg>
  )
}

export default SupportLogo