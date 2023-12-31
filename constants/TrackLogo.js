import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TrackLogo(props) {
  return (
    <Svg
      width={24}
      height={27}
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_6247_3351)">
        <Path
          d="M18.559 21.304c0 2.078-1.753 3.768-3.907 3.768H5.177c-2.155 0-3.907-1.69-3.907-3.768V4.727C1.27 2.649 3.022.965 5.177.965h9.475c2.154 0 3.907 1.684 3.907 3.762 0 .52-.438.942-.977.942-.54 0-.977-.422-.977-.942 0-1.039-.876-1.884-1.953-1.884H5.177c-1.078 0-1.954.845-1.954 1.884v16.577c0 1.04.876 1.89 1.954 1.89h9.475c1.077 0 1.953-.85 1.953-1.89 0-.52.438-.941.977-.941.54 0 .977.421.977.941zm-9.622-.512c0 .52.438.942.977.942.54 0 .977-.422.977-.942s-.437-.942-.977-.942-.977.422-.977.942zm2.93-15.541c0-.52-.437-.942-.976-.942H8.937c-.54 0-.976.421-.976.942 0 .52.437.941.976.941h1.954c.54 0 .977-.421.977-.941zm11.82 7.865c0 .52-.437.941-.977.941h-.592c-.382 1.713-1.783 3.064-3.56 3.432v.572c0 .52-.436.941-.976.941s-.977-.421-.977-.941v-.572c-1.776-.368-3.177-1.72-3.559-3.432h-.592c-.54 0-.977-.421-.977-.941s.437-.942.977-.942h.592c.382-1.713 1.783-3.064 3.56-3.433v-.57c0-.52.436-.942.976-.942s.977.421.977.941v.571c1.776.369 3.177 1.72 3.559 3.433h.592c.54 0 .977.421.977.942zm-3.602.937c-.5-.041-.891-.445-.891-.938 0-.492.392-.896.891-.937a2.653 2.653 0 00-1.53-1.476c-.044.481-.462.86-.973.86-.51 0-.93-.379-.972-.86-.7.263-1.258.8-1.531 1.476.5.041.891.445.891.938 0 .492-.392.896-.891.937a2.654 2.654 0 001.536 1.478.965.965 0 01.967-.814c.495 0 .902.354.967.814a2.654 2.654 0 001.536-1.478z"
          fill="#92929D"
          stroke="#92929D"
          strokeWidth={0.7}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_6247_3351">
          <Path fill="#fff" d="M0 0H24V27H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TrackLogo
