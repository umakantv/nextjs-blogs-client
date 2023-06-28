import Avatar from "./avatar";
import Date from "./date";
import styles from './post-body.module.css'

export default function Comment({
  comment,
}) {
  return (
    <div className="mb-12">
      <div className="mb-4">
        <Avatar author={comment.author} />
        Posted <Date dateString={comment.createdAt} />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: comment.content }}
      />
    </div>
  );
}
