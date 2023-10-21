import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsToStore } from "../store/reducers/postsReducer/postsReducer";
import { addUsersToStore } from "../store/reducers/usersReducer/usersReducer";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
} from "@chakra-ui/react";

export const PostsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { isLoadingPosts, posts } = useSelector((state) => state.posts);
  const { isLoadingUsers, users } = useSelector((state) => state.users);

  useEffect(() => {
    getPostsData();
    getUsersData();
  }, []);

  const getPostsData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("res", res);
        if (res.status === 200 && res?.data && Array.isArray(res.data)) {
          dispatch(addPostsToStore({ loaded: true, posts: res.data }));
        }
      })
      .catch((error) => {
        dispatch(addPostsToStore({ loaded: true, posts: [] }));
      });
  };

  const getUsersData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res", res);
        if (res.status === 200 && res?.data && Array.isArray(res.data)) {
          dispatch(addUsersToStore({ loaded: true, users: res.data }));
        }
      })
      .catch((error) => {
        dispatch(addUsersToStore({ loaded: true, users: [] }));
      });
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // find posts by title
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // find posts by name of user
  
  // const filteredPosts = posts.filter((post) => {
  //   const user = users.find((u) => u.id === post.userId);
  //   if (!user) {
  //     return false;
  //   }
  //   return user.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <>
      <p>Posts:</p>
      <label>
        Search posts:
        <input
          type="text"
          placeholder="type a post name here"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </label>
      <Stack direction={"row"} wrap={"wrap"}>
        {filteredPosts.map((post) => {
          const user = users.find((u) => u.id === post.userId);
          if (!user) {
            return null;
          }
          return (
            <Card border={"1px"} m={2} width={220}>
              <CardHeader>{user.name}</CardHeader>
              <CardBody>{post.title}</CardBody>
              <CardBody>{post.body}</CardBody>
              <CardFooter>its footer</CardFooter>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};