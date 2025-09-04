import { NextResponse, NextRequest } from "next/server";
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}



export async function POST(request: NextRequest) {
  try {
    const serverClient = StreamChat.getInstance(apiKey as string, apiSecret);
    const user = await request.json();
    const token = serverClient.createToken(user.data.id);
    console.log("New user created:", token);

    const client = await clerkClient();
    await serverClient.upsertUser({
        id:user.data.id,
        name:user.data.firstName,
        image:`https://getstream.io/random_png/?name=${user.data.firstName}`
    })


    await client.users.updateUserMetadata(user.data.id, {
      publicMetadata: {
        token: token,
      },
    });


    //Give access to this user

    const slugs = ["python-chat", "javascript-chat", "cpp-chat", "web-development-chat", "machine-learning-chat", "devops-chat", "cybersecurity-chat"];
    slugs.forEach(async (item) => {
         const channel = serverClient.channel('messaging',item , {
      image: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${item}.png`,
      name: capitalize(item) + " Discussion",
      created_by_id:user.data.id,
    });
    await channel.create();
    await channel.addMembers([user.data.id]);
    console.log(`Added user ${user.data.id} to channel ${item}`);

    });

    return NextResponse.json(
      {
        message: "done",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        error: "Failed to process request",
      },
      { status: 500 }
    );
  }
}
