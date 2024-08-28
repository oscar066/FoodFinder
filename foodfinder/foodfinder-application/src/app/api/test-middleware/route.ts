
import { NextRequest, NextResponse } from 'next/server';

import dbConnect from 'middleware/db-connect';
import Locations from 'mongoose/locations/model';

export async function GET(req: NextRequest) {
    await dbConnect();
    const locations = await Locations.find({});
    return NextResponse.json(locations);
}
