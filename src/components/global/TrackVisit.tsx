import { trackVisit } from "@/lib/api";
import React from "react";

const TrackVisit = async () => {
  await trackVisit();
  return <></>;
};

export default TrackVisit;
