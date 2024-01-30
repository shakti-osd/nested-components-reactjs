const useFunctions = () => {
  const addComment = (tree, commentId, newComment) => {
    if (tree.id === commentId) {
      tree.replies.unshift(newComment);
      return tree;
    }
    const updatedReplies = tree.replies.map((ele) => {
      return addComment(ele, commentId, newComment);
    });
    return { ...tree, replies: updatedReplies };
  };

  const deleteComment = (tree, commentId) => {
    if (tree.id === commentId) {
      return tree.replies.filter((ele) => ele.id !== commentId);
    }
    const updatedReplies = tree.replies.map((ele) => {
      return deleteComment(ele, commentId);
    });
    return { ...tree, replies: updatedReplies };
  };

  return { addComment, deleteComment };
};

export default useFunctions;
