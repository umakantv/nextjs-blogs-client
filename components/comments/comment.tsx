import AccountInfo from "../Auth/AccountInfo";
import Date from "../date";
import styles from "../posts/post-body.module.css";

export default function Comment({ comment }) {
  return (
    <div className="mb-12">
      <div className="mb-4">
        <AccountInfo user={comment.author} />
        Posted <Date dateString={comment.createdAt} />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
    </div>
  );
}
