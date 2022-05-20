import React from "react";
import Card from "../components/Card";
import { supabase } from "../supabaseClient";

function Profile() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("images")
        .select()
        .match({ owner: supabase.auth.user().id });

      console.log("data: ", data);
      console.log("error: ", error);
      if (error) {
        return console.log(error);
      }

      setPosts(data);
    })();
  }, []);
  console.log(posts);
  return (
    <div className="flex flex-col p-2">
      {/* <div className="flex flex-row w-full justify-between text-yellow-300 text-xs p-2">
        <span>Number of Downloads : 0</span>
        <span>Number of Views: 0</span>
      </div> */}

      <div className="grid grid-cols-3 mx-2 mb-2 gap-4">
        {posts.map((card) => (
          <Card isProfile={true} key={card.id} links={card.imgUrl} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
