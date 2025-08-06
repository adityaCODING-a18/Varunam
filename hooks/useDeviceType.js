import { useEffect, useState } from "react";

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState("unknown");

  useEffect(() => {
    const detect = () => {
      const dpr = window.devicePixelRatio || 1;
      const screenWidth = window.screen.width;
      const physicalWidth = screenWidth * dpr;

      if (physicalWidth >= 1920) {
        setDeviceType("tv");
      } else {
        setDeviceType("mobileOrLaptop");
      }
    };

    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  return deviceType;
}
