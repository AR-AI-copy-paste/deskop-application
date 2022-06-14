import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../supabaseClient";
import { useRecoilValue } from "recoil";
import { explorerSearchValue } from "../atoms";

function Profile() {
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

  return (
    <div className="flex flex-col p-2">
      {/* <div className="flex flex-row w-full justify-between text-yellow-300 text-xs p-2">
        <span>Number of Downloads : 0</span>
        <span>Number of Views: 0</span>
      </div> */}

      <div className="grid grid-cols-3 mx-2 mb-2 gap-4">
        {filteredPosts.map((card) => (
          <Card isProfile={true} key={card.id} links={card.imgUrl} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
