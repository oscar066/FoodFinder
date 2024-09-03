'use client';

import LocationsList from "./components/locations-list"; 
import dbConnect from "middleware/db-connect"; 
import { findAllLocations } from "mongoose/locations/services"; 
import { LocationType } from "mongoose/locations/schema"; 

export default async function Home() {
  let locations: LocationType[] | [] = [];

  try {
    await dbConnect();
    locations = await findAllLocations();
  } catch (err: any) {
    console.error("Failed to fetch locations:", err);
    return <div>Failed to load locations</div>;
  }

  const title = "The Food Finder - Home";

  return (
    <div>
      <h1>Welcome to Food Finder!</h1>
      <LocationsList locations={locations} />
    </div>
  );
}
