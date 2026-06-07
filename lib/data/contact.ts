export interface ProximityLog {
  icon: "ship" | "plane";
  stationName: string;
  duration: string;
}

export const proximityLogs: ProximityLog[] = [
  {
    icon: "ship",
    stationName: "Port of Kolkata",
    duration: "20 Mins Cargo Transit"
  },
  {
    icon: "plane",
    stationName: "Int'l Airport (CCU)",
    duration: "40 Mins Express Transit"
  }
];
