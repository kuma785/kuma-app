import { useState, useEffect } from "react";
import liff from "@line/liff"; // LIFF SDKをインポート
import "./App.css";

const LIFF_ID = "2006871199-3bBRzZke"; // LINE Developersで発行したLIFF IDを設定

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // LIFFの初期化
    liff.init({ liffId: LIFF_ID })
      .then(() => {
        console.log("LIFF initialized");
        if (!liff.isLoggedIn()) {
          liff.login(); // 未ログインならLINEログインを実行
        } else {
          setIsLoggedIn(true);
          // ユーザー情報を取得
          liff.getProfile().then(profile => {
            setUserName(profile.displayName);
          });
        }
      })
      .catch(err => console.error("LIFF Initialization failed", err));
  }, []);

  return (
    <>
      <h1>Vite + Reactアプリ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* LIFFの情報表示 */}
      <div>
        <h2>LIFF Status</h2>
        <p>{isLoggedIn ? `Logged in as ${userName}` : "Not logged in"}</p>
      </div>
    </>
  );
}

export default App;
