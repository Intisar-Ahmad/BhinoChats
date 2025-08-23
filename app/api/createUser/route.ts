import { NextResponse,NextRequest } from 'next/server';
import { StreamChat} from "stream-chat"

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

export async function POST(request: NextRequest) {
try {
    const user = await request.json();
    const serverClient = StreamChat.getInstance(apiKey as string, apiSecret);
    const token = serverClient.createToken(user?.data?.first_name)
    return NextResponse.json({
        message:"done"
    },{status:200})
} catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
        error: 'Failed to process request'
    }, { status: 500 } );
}
}