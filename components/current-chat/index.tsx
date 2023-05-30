import { LocalCurrentChatType, ChatType } from "@/store/types/chats";
import { FC, useRef } from "react";
import { KeyboardEvent, useState } from "react";
import { BsSend } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import Portal from "../portal";
import PortalRoot from "../portal-root";
import Header from "./components/header";
import Messages from "./components/messages";
import NoData from "./components/no-data";

export type ComponentProps = {
  send: (value: string) => void;
  currentChat: ChatType | null;
  localCurrentChat: LocalCurrentChatType | null;
};
const CurrentChat: FC<ComponentProps> = ({
  send,
  currentChat,
  localCurrentChat,
}) => {
  const refInput = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const [showPortalRoot, setShowPortalRoot] = useState<boolean>(false);
  const isEmpty = /^\s*$/.test(value);

  const sendMessage = () => {
    if (value) {
      if (isEmpty) return;
      send(value.trimStart());
      setValue("");
    }
  };
  const increaseHeight = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (refInput.current) {
      refInput.current.style.height = "auto";
      refInput.current.style.height = `${
        event.currentTarget.scrollHeight - 16
      }px`;
    }
  };
  const handelMessage = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // don't down line
      refInput.current && (refInput.current.style.height = "3rem");
      sendMessage();
    } else increaseHeight(event);
  };

  const name = localCurrentChat
    ? localCurrentChat.firstName + " " + localCurrentChat.lastName
    : currentChat?.user.firstName + " " + currentChat?.user.lastName;

  const status: "Online" | "Offline" | undefined = localCurrentChat
    ? localCurrentChat.status
    : currentChat?.user.status;
  const lastSeen: Date | undefined = localCurrentChat
    ? localCurrentChat.lastSeenAt
    : currentChat?.user.lastSeenAt;
  return (
    <>
      <div className="flex flex-col h-full w-full relative">
        <button
          onClick={() => setShowPortalRoot(!showPortalRoot)}
          className="md:hidden absolute top-2 btn btn-square btn-ghost"
        >
          <FcMenu className="h-6 w-6" />
        </button>
        {localCurrentChat && (
          <>
            <Header name={name} status={status} lastSeen={lastSeen} />
            <div className="flex-1 overflow-y-auto"></div>
            <div className="p-2 relative bg-base-300 py-2">
              <textarea
                className="textarea w-full max-h-[150px] placeholder-shown:text-sm text-xl resize-none"
                placeholder="Type a message"
                value={value}
                ref={refInput}
                rows={1}
                tabIndex={0}
                onKeyDown={(event) => handelMessage(event)}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!value}
                className="absolute bottom-7 right-6 btn btn-square btn-xs btn-ghost"
              >
                <BsSend className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
        {currentChat && (
          <>
            <Header name={name} status={status} lastSeen={lastSeen} />
            <Messages
              className="flex-1 overflow-y-auto"
              receiver={currentChat.user.id}
              chat={currentChat}
            />
            <div className="p-2 relative bg-base-300 py-2">
              <textarea
                className="textarea w-full max-h-[150px] placeholder-shown:text-sm text-xl resize-none"
                placeholder="Type a message"
                value={value}
                ref={refInput}
                rows={1}
                tabIndex={0}
                onKeyDown={(event) => handelMessage(event)}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!value || isEmpty}
                className="absolute bottom-7 right-6 btn btn-square btn-xs btn-ghost"
              >
                <BsSend className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
        {!localCurrentChat && !currentChat && <NoData />}
      </div>
      {showPortalRoot && (
        <Portal>
          <PortalRoot setShowPortalRoot={() => setShowPortalRoot(false)} />
        </Portal>
      )}
    </>
  );
};

export default CurrentChat;
