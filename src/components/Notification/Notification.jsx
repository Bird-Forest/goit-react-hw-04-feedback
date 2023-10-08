import { Message } from './Notification.styled';

export function Notification({ message }) {
  return (
    <div>
      <Message>{message}</Message>
    </div>
  );
}
