"use client";
import { MouseEventHandler, useState } from "react";

export const Microsoft = ({
  onClick,
}: {
  onClick?: MouseEventHandler<SVGSVGElement>;
}) => {
  const [hover, setHover] = useState(false);
  const onMouseEnter: MouseEventHandler<SVGSVGElement> = (e) => {
    setHover(true);
  };
  const onMouseLeave: MouseEventHandler<SVGSVGElement> = (e) => {
    setHover(false);
  };

  return (
    <svg
      style={
        {
          "--m-text-color": hover ? "#001428" : "#737373",
          "--m-tl-color": hover ? "#001428" : "#F25022",
          "--m-tr-color": hover ? "#001428" : "#7FBA00",
          "--m-bl-color": hover ? "#001428" : "#00A4EF",
          "--m-br-color": hover ? "#001428" : "#FFB900",
        } as React.CSSProperties
      }
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      width="176"
      height="38"
      viewBox="0 0 176 38"
      fill="none"
    >
      <g clipPath="url(#clip0_1529_1904)">
        <path
          className="fill-[var(--m-text-color)]"
          d="M62.1361 21.6527L61.0869 24.6253H60.9995C60.8247 23.955 60.5041 22.935 59.9795 21.711L54.3551 7.577H48.8472V30.104H52.49V16.2031C52.49 15.3289 52.49 14.338 52.4608 13.114C52.4317 12.5021 52.3734 12.0358 52.3442 11.6861H52.4317C52.6065 12.5603 52.8105 13.2015 52.9562 13.6095L59.7173 30.0457H62.2818L68.9845 13.4638C69.1302 13.0849 69.2759 12.3272 69.4216 11.6861H69.5091C69.4216 13.3472 69.3634 14.8334 69.3342 15.7369V30.0166H73.2101V7.51872H67.9062L62.1361 21.6527ZM76.8821 13.8717H80.6706V30.0166H76.8821V13.8717ZM78.8055 7.05244C78.1643 7.05244 77.6398 7.28558 77.2026 7.69357C76.7655 8.10156 76.5324 8.62613 76.5324 9.26726C76.5324 9.87925 76.7655 10.4038 77.2026 10.8118C77.6398 11.2198 78.1643 11.4238 78.8055 11.4238C79.4466 11.4238 80.0003 11.1907 80.4083 10.8118C80.8454 10.4038 81.0786 9.87925 81.0786 9.26726C81.0786 8.65527 80.8454 8.13071 80.4083 7.69357C80.0295 7.28558 79.4757 7.05244 78.8055 7.05244ZM94.1052 13.726C93.4058 13.5803 92.6772 13.4929 91.9778 13.4929C90.2584 13.4929 88.6847 13.8717 87.3733 14.6294C86.0619 15.3871 85.0128 16.4363 84.3425 17.7477C83.6431 19.0882 83.2934 20.6328 83.2934 22.4104C83.2934 23.955 83.6431 25.3247 84.3134 26.5778C84.9836 27.8018 85.9162 28.7926 87.1693 29.4629C88.3642 30.1332 89.763 30.4829 91.3367 30.4829C93.1435 30.4829 94.688 30.104 95.912 29.4046L95.9412 29.3755V25.8784L95.7955 25.995C95.2418 26.4029 94.6006 26.7527 93.9595 26.9567C93.2892 27.1898 92.6772 27.3064 92.1527 27.3064C90.6373 27.3064 89.4424 26.8692 88.5973 25.9075C87.723 24.975 87.2859 23.6927 87.2859 22.0899C87.2859 20.4288 87.723 19.1174 88.6264 18.1557C89.5299 17.194 90.7247 16.6986 92.1818 16.6986C93.4058 16.6986 94.6589 17.1065 95.7955 17.9225L95.9412 18.0391V14.338L95.912 14.3089C95.4166 14.1049 94.8629 13.8717 94.1052 13.726ZM106.607 13.6095C105.675 13.6095 104.8 13.9009 104.043 14.5129C103.402 15.0374 102.964 15.7951 102.586 16.6986H102.556V13.8717H98.768V30.0166H102.556V21.7693C102.556 20.3705 102.848 19.2048 103.489 18.3597C104.13 17.4854 104.946 17.0483 105.937 17.0483C106.287 17.0483 106.636 17.1357 107.074 17.194C107.482 17.3105 107.773 17.4271 107.977 17.5728L108.123 17.6894V13.9009L108.035 13.8717C107.773 13.6969 107.248 13.6095 106.607 13.6095ZM116.924 13.522C114.272 13.522 112.144 14.3089 110.658 15.8534C109.143 17.398 108.414 19.5254 108.414 22.2065C108.414 24.7127 109.172 26.7527 110.629 28.2389C112.086 29.696 114.068 30.4537 116.545 30.4537C119.138 30.4537 121.208 29.6669 122.694 28.0932C124.209 26.5195 124.938 24.4213 124.938 21.8276C124.938 19.2631 124.238 17.2231 122.81 15.7369C121.441 14.2506 119.43 13.522 116.924 13.522ZM119.954 25.9367C119.255 26.8401 118.148 27.2772 116.778 27.2772C115.408 27.2772 114.301 26.8401 113.514 25.8784C112.727 24.975 112.348 23.6636 112.348 22.0025C112.348 20.2831 112.756 18.9717 113.514 18.0391C114.301 17.1065 115.379 16.6403 116.749 16.6403C118.089 16.6403 119.138 17.0774 119.896 17.9808C120.654 18.8842 121.062 20.1956 121.062 21.915C121.004 23.6636 120.683 25.0333 119.954 25.9367ZM133.389 20.5745C132.194 20.0791 131.437 19.7002 131.087 19.3796C130.795 19.0882 130.65 18.6802 130.65 18.1557C130.65 17.7185 130.825 17.2814 131.262 16.99C131.699 16.6986 132.194 16.5528 132.923 16.5528C133.564 16.5528 134.234 16.6694 134.875 16.8443C135.516 17.0191 136.099 17.2814 136.566 17.6311L136.711 17.7477V14.1923L136.624 14.1632C136.187 13.9883 135.604 13.8135 134.904 13.6677C134.205 13.5512 133.564 13.4929 133.039 13.4929C131.233 13.4929 129.746 13.93 128.581 14.8917C127.415 15.7951 126.861 17.0191 126.861 18.4471C126.861 19.2048 126.978 19.8751 127.24 20.4288C127.502 20.9825 127.881 21.507 128.406 21.9442C128.93 22.3522 129.688 22.8184 130.737 23.2556C131.611 23.6344 132.282 23.9258 132.69 24.159C133.098 24.3921 133.36 24.6544 133.564 24.8584C133.71 25.0915 133.797 25.383 133.797 25.7618C133.797 26.8401 132.981 27.3646 131.32 27.3646C130.679 27.3646 130.009 27.2481 129.222 26.9858C128.435 26.7235 127.706 26.3447 127.094 25.9075L126.949 25.791V29.492L127.036 29.5212C127.59 29.7835 128.26 29.9583 129.076 30.1623C129.892 30.308 130.621 30.4246 131.262 30.4246C133.214 30.4246 134.817 29.9875 135.954 29.0258C137.119 28.0932 137.731 26.8984 137.731 25.3538C137.731 24.2756 137.44 23.3139 136.799 22.5853C135.954 21.8859 134.904 21.1573 133.389 20.5745ZM147.727 13.522C145.075 13.522 142.948 14.3089 141.461 15.8534C139.975 17.398 139.218 19.5254 139.218 22.2065C139.218 24.7127 139.975 26.7527 141.432 28.2389C142.889 29.696 144.871 30.4537 147.348 30.4537C149.942 30.4537 152.011 29.6669 153.497 28.0932C155.013 26.5195 155.741 24.4213 155.741 21.8276C155.741 19.2631 155.042 17.2231 153.614 15.7369C152.244 14.2506 150.233 13.522 147.727 13.522ZM150.729 25.9367C150.029 26.8401 148.922 27.2772 147.552 27.2772C146.153 27.2772 145.075 26.8401 144.288 25.8784C143.501 24.975 143.123 23.6636 143.123 22.0025C143.123 20.2831 143.531 18.9717 144.288 18.0391C145.075 17.1065 146.153 16.6403 147.523 16.6403C148.834 16.6403 149.913 17.0774 150.67 17.9808C151.428 18.8842 151.836 20.1956 151.836 21.915C151.836 23.6636 151.457 25.0333 150.729 25.9367ZM175.995 16.99V13.8717H172.177V9.0924L172.061 9.12155L168.447 10.1998L168.36 10.229V13.8717H162.648V11.8318C162.648 10.8992 162.881 10.1707 163.289 9.70439C163.697 9.23811 164.309 9.00498 165.067 9.00498C165.591 9.00498 166.145 9.12155 166.757 9.38383L166.903 9.47125V6.17817L166.815 6.14903C166.291 5.97417 165.591 5.8576 164.688 5.8576C163.551 5.8576 162.561 6.11989 161.657 6.55702C160.754 7.05244 160.083 7.72271 159.588 8.62613C159.093 9.5004 158.83 10.4912 158.83 11.6278V13.8717H156.178V16.9608H158.83V30.0166H162.648V16.99H168.36V25.2955C168.36 28.7052 169.963 30.4246 173.168 30.4246C173.693 30.4246 174.247 30.3372 174.771 30.2497C175.325 30.1332 175.733 29.9875 175.966 29.8709L175.995 29.8417V26.7235L175.849 26.8401C175.616 26.9858 175.412 27.1024 175.063 27.1898C174.771 27.2772 174.509 27.3064 174.305 27.3064C173.547 27.3064 173.023 27.1315 172.644 26.6944C172.294 26.2864 172.119 25.6161 172.119 24.6253V16.99H175.995Z"
        />
        <path
          className="fill-[var(--m-tl-color)]"
          d="M0.00488281 0H17.8691V17.8642H0.00488281V0Z"
        />
        <path
          className="fill-[var(--m-tr-color)]"
          d="M19.7339 0H37.5981V17.8642H19.7339V0Z"
        />
        <path
          className="fill-[var(--m-bl-color)]"
          d="M0.00488281 19.7293H17.8691V37.5936H0.00488281V19.7293Z"
        />
        <path
          className="fill-[var(--m-br-color)]"
          d="M19.7339 19.7293H37.5981V37.5936H19.7339V19.7293Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1529_1904">
          <rect width="176" height="37.5936" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
