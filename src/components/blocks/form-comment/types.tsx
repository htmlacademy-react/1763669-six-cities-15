import { ReactEventHandler } from 'react';

export type handleChangeProps = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

export type CommentProps = {
  comment: string;
  rating: number;
}
