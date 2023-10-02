import React, { useCallback, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import {
  Button,
  TextareaAutosize,
  Stack,
  FormGroup,
  CircularProgress,
} from "../ui";

import AuthContext from "../../contexts/Auth";
import style from "./post-form.module.css";
import { PostApi } from "../../api";
import { CreatePost } from "../../types/posts";
import { toast } from "react-toastify";

const reducer = (state: CreatePost, action: CreatePost) => ({
  ...state,
  ...action,
});

const PostForm = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [saving, setSaving] = React.useState(false);
  const [post, setPost] = useReducer(reducer, {
    title: "",
    content: "",
    tags: [],
  });

  const addPost = useCallback(async (post: CreatePost) => {
    try {
      const postCreated: any = await PostApi.addPost(post);
      console.log(postCreated);
      window.location.href = `/posts/${postCreated.slug}`;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  }, []);

  if (!user) {
    return null;
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSaving(true);
          addPost(post);
        }}
      >
        <Stack spacing={2}>
          <FormGroup>
            <input
              id="title"
              name="title"
              required
              autoFocus
              placeholder="Your Post Title Here"
              className={`text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 mb-8 ${style.titleInput}`}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <input
              id="tags"
              name="tags"
              required
              placeholder="Tags: system-design, backend, ..."
              className={`text-xl md:text-2xl leading-tight md:pr-8 mb-8 ${style.titleInput}`}
              onChange={(e) => {
                let tags = [];
                if (e.target.value) {
                  tags = e.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter((item) => item);
                }
                setPost({
                  ...post,
                  tags,
                });
              }}
            />
          </FormGroup>
          <FormGroup>
            <TextareaAutosize
              style={{ background: "inherit", borderWidth: 0, padding: 10 }}
              required
              minRows={10}
              minLength={100}
              id="content"
              name="content"
              placeholder="Jot down your thoughts here... we support markdown!"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
            />
          </FormGroup>
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            style={{ marginTop: 20 }}
            type="submit"
            disabled={saving}
            startIcon={
              saving ? <CircularProgress color="primary" size={12} /> : null
            }
          >
            Submit
          </Button>

          <Button
            style={{ marginTop: 20 }}
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default PostForm;
