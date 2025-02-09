import { MessageLayout } from '../components/messages/MessageLayout';

export function Another() {
    const senderId = "2";
    return (
      <>
        <MessageLayout senderId={senderId} />
        <h1>Another</h1>
      </>
    );
  }
  