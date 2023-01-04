export interface MailType {
  from: string;
  to: string;
  text: string;
  date: string;
  subject: string;
  read?: boolean;
  _id?: string;
}
