"use client";

import React from "react";
import { useState, useEffect } from "react";
import type { User, Channel as StreamChannel } from "stream-chat";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const ChatForum = ({ clerkUser, topic }: { clerkUser: { id: string; name: string; token: string }; topic: string }) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  let userId = clerkUser.id;
  let userName = clerkUser.name;
  let userToken = clerkUser.token;


  const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

  const [channel, setChannel] = useState<StreamChannel>();
  const client = useCreateChatClient({
    apiKey: apiKey as string,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging',topic , {
      image: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${topic}.png`,
      name: capitalize(topic) + " Discussion",
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <div className="w-screen h-[80vh] overflow-auto">
            <MessageList />
          </div>
          <div className="w-screen fixed bottom-0">
            <MessageInput />
          </div>
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
