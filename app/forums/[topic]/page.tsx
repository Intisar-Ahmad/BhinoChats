import Chatforum from "@/components/ChatForum";
import { currentUser } from '@clerk/nextjs/server'
export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const user = await currentUser();
    const  topic  = (await params).topic;


    // convert urlencoded topic to actual text
    const decodedTopic = decodeURIComponent(topic);
    return <Chatforum topic={decodedTopic} clerkUser = {{id:user?.id as string,name:user?.firstName as string,token:user?.publicMetadata.token as string}}/>;
}