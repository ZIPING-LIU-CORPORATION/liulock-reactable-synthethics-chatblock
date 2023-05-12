import "prismjs";
import "prismjs/components";
import "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
import CodeEditor from "react-simple-code-editor";
export default function EditorsHelper(props?: {
  blockId?: string;
  debug?: boolean;
}) {
  // @ts-ignore
  const Prism = window.Prism;

  const highlight = Prism.highlight;
  const languages = Prism.languages;

  const React = window.React;
  const [input, setInput] = React.useState<string>("");
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [messages, setMessages] = React.useState<
    {
      message: string;
      name: string;
      timestamp: number;
    }[]
  >([]);

  const debug = props?.debug || false;
  const setCompletionColumn = (message: string) => {
    const promptForEditorColunist =
      message.includes("?") && !message.includes("->")
        ? message + "-> "
        : message;

    const xhr = new XMLHttpRequest();
    const url = "https://liu.academy/synth/ethics";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.info("Request succeeded");

          const theColumn = document.querySelector(
            `${props?.blockId ? "#editor-" + props.blockId + " > " : ""}#typing`
          );
          if (theColumn) {
            theColumn.classList.remove("active");
          }
          const jsonstring = xhr.responseText;
          let completion = "";
          try {
            const json = JSON.parse(jsonstring);
            completion = json?.completion;
          } catch (error) {
            if (debug) {
              console.log(error, "error at json parse");
            }
            completion = error?.toString() || "error";
          }

          const splitCompletionBySentences =
            completion.match(/[^\.!\?]+[\.!\?]+/g) || [];

          const messagesList = messages;

          messagesList.push({
            message: completion,
            name: "Synthethics",
            timestamp: Date.now(),
          });

          setMessages(messagesList);

          console.log("completion", completion);

          console.log("messages", messages);

          setIsLoaded(true);
        }
      } else if (xhr.readyState === 3) {
        if (debug) console.info("loading...");
      } else if (xhr.readyState === 2) {
        if (debug) console.info("loaded");
      } else if (xhr.readyState === 1) {
        if (debug) console.info("opened");
      }
    };

    const promptObj = {
      prompt: promptForEditorColunist,
    };
    if (debug) {
      console.info('Sending + "' + JSON.stringify(promptObj) + '"');
    }
    const theColumn = document.querySelector(
      `${props?.blockId ? "#editor-" + props.blockId + " > " : ""}#typing`
    );
    console.log("theColumn", theColumn);
    if (theColumn) {
      theColumn.classList.add("active");
    }
    xhr.send(JSON.stringify(promptObj));
  };

  const send = () => {
    const messagesList = messages;

    messagesList.push({
      message: input,
      name: "You",
      timestamp: Date.now(),
    });

    setMessages(messagesList);

    setCompletionColumn(input);

    setInput("");
  };

  if (isLoaded === true) {
    setIsLoaded(false);
    setInput("");
  }
  return (
    <>
      <div id="chat_box_body" className="chat-box-body">
        <div id="chat_messages">
          {messages?.length === 0 ? (
            <UserMessage
              message="Welcome to Synthethics! Type a question to get started, e.g. 'What does ethics mean to Ziping Liu?'"
              name="Synthethics"
              timestamp={Date.now()}
              userVisitor={false}
            />
          ) : (
            messages?.map((message, index) => {
              return (
                <UserMessage
                  message={message.message}
                  name={message.name}
                  timestamp={message.timestamp}
                  key={index}
                  userVisitor={message.name === "You" ? true : false}
                />
              );
            })
          )}
        </div>
      </div>
      <div id="typing">
        <div>
          <span /> <span /> <span /> <span className="n">Synthethics</span> is
          typing...
        </div>
      </div>
      <div className="chat-box-footer">
        <CodeEditor
          id="chat_input"
          placeholder="Enter your message here..."
          defaultValue={""}
          onValueChange={(value) => {
            setInput(value);
          }}
          highlight={(code) => highlight(code, languages.ts, "typescript")}
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              send();
            }
          }}
        />
        <button
          id="send"
          onClick={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path fill="#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </button>
      </div>
    </>
  );
}

function UserMessage(props: {
  message: string;
  name: string;
  timestamp: number;
  userVisitor: boolean;
  style?: React.CSSProperties;
}) {
  const React = window.React;
  return (
    <>
      <div
        className={
          props.userVisitor ? "profile my-profile" : "profile other-profile"
        }
      >
        <img
          src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
          width="30"
          height="30"
        />
        <span>{props.name === "You" ? "You™" : "Synthethics™"}</span>
      </div>
      <div
        className={`message ${
          props.userVisitor ? "my-message" : "other-message"
        }`}
      >
        {props.message}
      </div>
    </>
  );
}
