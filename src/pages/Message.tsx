import { MessageLayout } from '../components/messages/MessageLayout';

export function Message() {
    const senderId = "1";
    return (
      <>
        <MessageLayout senderId={senderId} />
      </>
    );
  }
  