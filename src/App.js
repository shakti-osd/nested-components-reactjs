import { useState } from "react";
import { commentData } from "./Data/commentData";
import Comments from "./components/comments/comments";
import useFunctions from "./useFunctions";
function App() {
  const [comments, setComments] = useState(commentData);
  const { addComment, deleteComment } = useFunctions();

  const handleCommentAdd = (commentId, comment) => {
    const updatedTree = addComment(comments, commentId, comment);
    setComments(updatedTree);
    //console.log("comments", updatedTree);
  };

  const handleCommentDelete = (commentId) => {
    const updatedTree = deleteComment(comments, commentId);
    setComments(updatedTree);
  };
  return (
    <div className="App">
      <Comments
        key={comments.id}
        comments={comments}
        handleCommentAdd={handleCommentAdd}
        handleCommentDelete={handleCommentDelete}
      />
    </div>
  );
}

export default App;
