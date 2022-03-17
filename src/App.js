import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "a77c0cce-1cf4-4d40-981b-4ce188a443c6";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="chatContainer">
      chuj
      <ChatEngine
        height="80vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default App;
