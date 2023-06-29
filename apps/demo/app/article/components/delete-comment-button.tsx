'use client';

interface DeleteCommentButtonProps {
  slug: string;
  commentId: number;
  onDelete: () => void;
}
export default function DeleteCommentButton({
  slug,
  commentId,
  onDelete,
}: DeleteCommentButtonProps) {
  async function deleteComment(): Promise<void> {
    const response = await fetch(
      `https://api.realworld.io/api/articles/${slug}/comments/${commentId}`,
      {
        method: 'DELETE',
      },
    );
  }

  return (
    <span className="mod-options">
      <i className="ion-trash-a" onClick={deleteComment}></i>
    </span>
  );
}
