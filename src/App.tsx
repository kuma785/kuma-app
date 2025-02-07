// import { useState, useEffect } from "react";
// import liff from "@line/liff"; // LIFF SDKをインポート
// import "./App.css";

// const LIFF_ID = "2006871199-3bBRzZke"; // LINE Developersで発行したLIFF IDを設定

// function App() {
//   const [count, setCount] = useState(0);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     // LIFFの初期化
//     liff.init({ liffId: LIFF_ID })
//       .then(() => {
//         console.log("LIFF initialized");
//         if (!liff.isLoggedIn()) {
//           liff.login(); // 未ログインならLINEログインを実行
//         } else {
//           setIsLoggedIn(true);
//           // ユーザー情報を取得
//           liff.getProfile().then(profile => {
//             setUserName(profile.displayName);
//           });
//         }
//       })
//       .catch(err => console.error("LIFF Initialization failed", err));
//   }, []);

//   return (
//     <>
//       <h1>Vite + Reactアプリ</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//       {/* LIFFの情報表示 */}
//       <div>
//         <h2>LIFF Status</h2>
//         <p>{isLoggedIn ? `Logged in as ${userName}` : "Not logged in"}</p>
//       </div>
//     </>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import liff from "@line/liff";

const LIFF_ID = "2006871199-3bBRzZke"; // LINE Developers Console で取得した LIFF ID

const App = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [selectedStore, setSelectedStore] = useState<string>("shibuya");
  const [message, setMessage] = useState<string>("");
  const [sentMessages, setSentMessages] = useState<{ store: string; text: string }[]>([]);

  // LIFF 初期化
  useEffect(() => {
    liff.init({ liffId: LIFF_ID })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then(profile => {
            setUserId(profile.userId);
            setUserName(profile.displayName);
          });
        } else {
          liff.login();
        }
      })
      .catch(err => console.error("LIFF Init Error:", err));
  }, []);

  // メッセージ送信処理（今回は画面に表示するだけ）
  const sendMessage = () => {
    if (!message.trim()) return;

    // 仮のメッセージ送信処理（画面上で確認する用）
    setSentMessages([...sentMessages, { store: selectedStore, text: message }]);
    setMessage("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>LIFFアプリ - 支店選択</h2>
      {userName ? <p>こんにちは、{userName} さん</p> : <p>ログイン中...</p>}

      {/* 支店選択 */}
      <label>店舗を選択:</label>
      <select value={selectedStore} onChange={(e) => setSelectedStore(e.target.value)}>
        <option value="shibuya">渋谷店</option>
        <option value="shinjuku">新宿店</option>
        <option value="ikebukuro">池袋店</option>
      </select>

      {/* メッセージ入力 */}
      <div style={{ marginTop: "10px" }}>
        <label>メッセージ:</label>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: "100%", padding: "5px", marginTop: "5px" }}
        />
      </div>

      {/* 送信ボタン */}
      <button 
        onClick={sendMessage} 
        style={{ marginTop: "10px", padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none" }}
      >
        送信
      </button>

      {/* 送信済みメッセージ一覧 */}
      <div style={{ marginTop: "20px" }}>
        <h3>送信履歴</h3>
        {sentMessages.length === 0 ? <p>まだ送信されたメッセージはありません</p> : (
          <ul>
            {sentMessages.map((msg, index) => (
              <li key={index}>
                [{msg.store}] {msg.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

