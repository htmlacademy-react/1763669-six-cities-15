import { ReactEventHandler } from 'react';

export type handleFormCommentChangeProps = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

export type CommentProps = {
  comment: string;
  rating: number;
}
