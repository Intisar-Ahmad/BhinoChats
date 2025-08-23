import Chatforum from "@/components/Chatforum";

export default async function Page({ params }: { params: { topic: string } }) {
    const { topic } = await params;

    // convert urlencoded topic to actual text
    const decodedTopic = decodeURIComponent(topic);
    return <Chatforum topic={decodedTopic} />;
}