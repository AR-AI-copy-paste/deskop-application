import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../supabaseClient";
import { useRecoilValue } from "recoil";
import { explorerSearchValue } from "../atoms";

function Gallery() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const search = useRecoilValue(explorerSearchValue);

  console.log(search);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("images")
        .select()
        .match({ isPrivate: false });
      if (error) {
        return console.log(error);
      }

      setPosts(data);
      setFilteredPosts(data);
    })();
  }, []);

  useEffect(() => {
    if (search.length === 0) return setFilteredPosts(posts);
    const filtered = posts.filter((post) => {
      return post.label?.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredPosts(filtered);
  }, [search]);

  // React.useEffect(() => {
  //   (async () => {
  //     const { data, error } = await supabase
  //       .from("images")
  //       .select()
  //       .match({ isPrivate: false });
  //     if (error) {
  //       return console.log(error);
  //     }

  //     setPosts(data);
  //   })();
  // }, []);
  // console.log(posts);

  return (
    <div>
      <div className="grid grid-cols-3 mx-2 mb-2 p-2 gap-4 ">
        {filteredPosts.map((card) => (
          <Card key={card.id} links={card.imgUrl} />
        ))}
        {/* <Card links="https://images.unsplash.com/photo-1649709993529-8da47c974a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" /> */}

        {/* <Card links="https://images.unsplash.com/photo-1649692157683-348451f93660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649709993529-8da47c974a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649692157683-348451f93660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649692157683-348451f93660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1568675517458-8a0564027454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649869135510-4c338bd78559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649835654787-b81f5584cbcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" /> */}
      </div>
    </div>
  );
}

export default Gallery;
