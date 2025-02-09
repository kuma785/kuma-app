import { Footer } from '../components/messages/Footer';

export function Message() {
    return (
      <>
        <h2>Message Page</h2>
        <Footer onSend={(message: string) => console.log(message)} />
      </>
    );
  }
  