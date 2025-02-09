import { useState, useEffect } from "react";
import liff from "@line/liff";

const LIFF_ID = "2006871199-3bBRzZke"; // LINE Developersで発行したLIFF ID

export function LineAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    liff.init({ liffId: LIFF_ID })
      .then(() => {
        console.log("LIFF initialized");
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          setIsLoggedIn(true);
          liff.getProfile().then(profile => {
            setUserName(profile.displayName);
          });
        }
      })
      .catch(err => console.error("LIFF Initialization failed", err));
  }, []);

  return (
    <div>
      <h2>LIFF Status</h2>
      <p>{isLoggedIn ? `Logged in as ${userName}` : "Not logged in"}</p>
    </div>
  );
}
