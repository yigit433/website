import { useState, useEffect } from "react";

import Config from "../config";

const Lanyard = () => {
  const [discordUser, setUser] = useState({});

  useState(() => {
    let ws = false;
    let heartbeatInterval = false;

    typeof window !== "undefined" &&
      (() => {
        ws = new WebSocket("wss://api.lanyard.rest/socket");

        ws.onopen = () => {
          ws.send(
            JSON.stringify({
              op: 2,
              d: {
                subscribe_to_id: Config.personal.socialAccounts.find(
                  (s) => s.name === "Discord"
                ).accountId,
              },
            })
          );

          heartbeatInterval = setInterval(
            () => ws.send(JSON.stringify({ op: 3 })),
            30000
          );
        };
        ws.onmessage = (msg) => {
          msg = JSON.parse(msg.data);
          if (!["INIT_STATE", "PRESENCE_UPDATE"].includes(msg.t)) return;

          setUser(msg.d);
        };
        ws.onclose = () => {
          ws = false;
          clearInterval(heartbeatInterval);
          heartbeatInterval = false;
        };
      })();

    return () => {
      ws?.close();
      ws = false;
      clearInterval(heartbeatInterval);
      heartbeatInterval = false;
    };
  }, []);

  return discordUser;
};
export default Lanyard;
