import mongoose, { model, models } from "mongoose"; 
import { LocationSchema, LocationType } from "mongoose/locations/schema";

// Check if 'locations' exists in 'mongoose.models' before using it
export default models?.locations || 
    model<LocationType>("locations", LocationSchema);
