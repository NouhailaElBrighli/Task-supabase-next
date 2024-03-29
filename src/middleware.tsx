import { NextResponse } from "next/server";


export default function middleware(req: Request) {
    // do something
    return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
    matcher: ['/register']
}
