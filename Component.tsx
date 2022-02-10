import { useEffect } from "react";
import { scrollToSection } from "./scrollToSection";

//Scroll Target element IDs
const TRIP_FINDER_CONTAINER_ID = "trip-finder-container";
const OFFER_CONTAINER_ID = "OfferContainerBlock";
const ALL_QUALIFYING_TRIPS_ID = "all-qualifying-trips";

const Component = () => {
  useEffect(() => {
    const isDisplayCards =
      typeof window !== "undefined" && window.location.search !== "";
    if (isDisplayCards) {
      setTimeout(() => {
        scrollToSection(TRIP_FINDER_CONTAINER_ID, 64, true);
      }, 200);
    }
  }, []);

  // Scroll to sections
  if (typeof window !== "undefined") {
    const offerOffset = 200;
    const qTripsOffset = 64;

    setTimeout(
      router.query.special === "all"
        ? () => scrollToSection(OFFER_CONTAINER_ID, offerOffset, true)
        : () => scrollToSection(ALL_QUALIFYING_TRIPS_ID, qTripsOffset, true),
      0
    );
  }
  return (
    <div id={ALL_QUALIFYING_TRIPS_ID}>
      <h1>Scroll Traget</h1>
    </div>
  );
};
