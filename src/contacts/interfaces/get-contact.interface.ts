import { ErrorResponse } from '../../interfaces';
import { Contact } from './contact';

export interface GetContactOptions {
  audienceId: string;
  id: string;
}

export interface GetContactResponseSuccess
  extends Pick<Contact, 'id' | 'name' | 'created_at'> {
  object: 'contact';
}

export interface GetContactResponse {
  data: GetContactResponseSuccess | null;
  error: ErrorResponse | null;
}
