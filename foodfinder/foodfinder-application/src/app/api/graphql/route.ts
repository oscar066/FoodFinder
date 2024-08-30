import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { resolvers } from "graphql/resolvers";
import { typeDefs } from "graphql/schema";
import dbConnect from "middleware/db-connect";
import { NextRequest, NextResponse } from "next/server";

const server = new ApolloServer<BaseContext>({
    resolvers,
    typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
    context: async () => {
        const token = {};
        return { token };
    },
});

// Helper function to apply CORS headers
function allowCors(fn: (req: NextRequest) => Promise<NextResponse>) {
    return async (req: NextRequest) => {
        const res = await fn(req);
        res.headers.set("Access-Control-Allow-Origin", "*");
        res.headers.set("Access-Control-Allow-Methods", "POST");
        res.headers.set("Access-Control-Allow-Headers", "*");
        res.headers.set("Access-Control-Allow-Credentials", "true");
        return res;
    };
}

// Database connection middleware
async function connectDB(fn: (req: NextRequest) => Promise<NextResponse>) {
    await dbConnect();
    return await fn;
}

export async function POST(req: NextRequest) {
    const handlerWithCors = allowCors(handler);
    const handlerWithDB = await connectDB(handlerWithCors);
    return handlerWithDB(req);
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
        },
    });
}
