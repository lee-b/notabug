import React from "react";
import { CommentForm as SnewCommentForm } from "snew-classic-ui";
import { notabugCommentForm } from "state/notabug";
import { injectState } from "freactal";
import { COMMENT_BODY_MAX } from "notabug-peer";
import { JavaScriptRequired } from "./JavaScriptRequired";

export const CommentForm = notabugCommentForm(injectState(({
  state: { commentBody, isCommentTooLong, formId, notabugSubmissionId },
  effects: { onChangeCommentBody, onSaveComment, onNotabugSetReplyTo },
  thingId,
  ...props
}) => (
  <JavaScriptRequired>
    <SnewCommentForm
      {...props}
      body={commentBody}
      key={formId} // hack to allow defaultValue to workaround controlled input bug
      onChangeBody={e => onChangeCommentBody(e.target.value)}
      commentError={isCommentTooLong ? `this is too long (max: ${COMMENT_BODY_MAX})` : null}
      onSubmit={e => {
        e.preventDefault();
        commentBody && commentBody.trim && onSaveComment();
      }}
      autoFocus={thingId !== notabugSubmissionId}
      onCancel={(thingId === notabugSubmissionId) ? null : () => onNotabugSetReplyTo(null)}
    />
  </JavaScriptRequired>
)));
