import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function Inter({width},props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 69.999 70"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h69.999v70H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Inter Logo" clipPath="url(#prefix__a)">
        <G data-name="Group 2">
          <Path
            data-name="Path 17"
            d="M0 35a35 35 0 1135 35A35 35 0 010 35z"
            fill="#a59658"
          />
          <G data-name="Group 1">
            <Path
              data-name="Path 18"
              d="M34.998 67.576a32.576 32.576 0 1132.577-32.581 32.612 32.612 0 01-32.577 32.581zm0-61.729a29.153 29.153 0 1029.156 29.148A29.186 29.186 0 0034.998 5.847z"
              fill="#304a9a"
            />
          </G>
          <Path
            data-name="Path 19"
            d="M34.998 64.301a29.3 29.3 0 1129.3-29.3 29.333 29.333 0 01-29.3 29.3zm0-55.245A25.944 25.944 0 1060.942 35 25.974 25.974 0 0035 9.056z"
            fill="#000100"
          />
        </G>
        <G data-name="Group 4" fill="#fff">
          <Path
            data-name="Path 20"
            d="M52.443 44.714a19.9 19.9 0 11-.163-19.712l2.287-2.8a23.313 23.313 0 10.313 25.11z"
          />
          <G data-name="Group 3">
            <Path
              data-name="Path 21"
              d="M49.538 23.024L37.79 36.064v5.689l8.017-8.792v17.436a14.946 14.946 0 003.915-3.619V28.602l1.995-2.254a18.185 18.185 0 00-2.179-3.324z"
            />
            <Path
              data-name="Path 22"
              d="M33.062 53.686a11.22 11.22 0 003.916.037V28.565h-3.916z"
            />
            <Path
              data-name="Path 23"
              d="M26.671 51.913a16.92 16.92 0 003.879 1.367V41.237l-3.8-4.212z"
            />
            <Path
              data-name="Path 24"
              d="M18.248 26.311l1.995 2.253v18.177a14.964 14.964 0 003.916 3.62V32.925l8.016 8.793v-5.689L20.43 22.988a18.16 18.16 0 00-2.182 3.323z"
            />
            <Path
              data-name="Path 25"
              d="M36.968 16.264a13.335 13.335 0 00-3.907 0l-.014 7.019h3.921z"
            />
            <Path
              data-name="Path 26"
              d="M45.392 19.308a17.765 17.765 0 00-7.564-2.933h-.041v3.5a15.317 15.317 0 015.264 2.05z"
            />
            <Path
              data-name="Path 27"
              d="M26.69 28.658l3.9 4.285v-5.245h7.222l3.233-3.583H30.569v-3.843c.166-.074 1.644-.425 1.644-.425v-3.435a17.378 17.378 0 00-7.758 2.973l2.235 2.549z"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default Inter