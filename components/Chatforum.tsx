"use client";

import { useState, useEffect } from 'react';
import type { User, Channel as StreamChannel } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { useUser } from '@clerk/nextjs';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY ;




const Chatforum = ({topic}:{topic:string}) => {

  const clerkUser = useUser();

  const user: User = {
  id: clerkUser?.user?.id as string,
  name: clerkUser?.user?.firstName as string,
  image: clerkUser?.user?.imageUrl as string,
};
  const [channel, setChannel] = useState<StreamChannel>();
  const client = useCreateChatClient({
    apiKey: apiKey as string,
    tokenOrProvider: ,
    userData: user,
  });


  useEffect(() => {
    if (!client) return;
    console.log(topic);
    const channel = client.channel('messaging', topic, {
      image: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${topic}.png`,
      name: topic,
      members: [user.id],
    } as any);

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader  />
         <div className='h-[80vh] overflow-y-auto'>
           <MessageList />
         </div>
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default Chatforum;