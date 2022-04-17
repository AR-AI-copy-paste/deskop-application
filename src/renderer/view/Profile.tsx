import React from "react";
import Card from "../components/Card";

function Profile() {
  return (
    <div className="flex flex-col p-2">
      {/* <div className="flex flex-row w-full justify-between text-yellow-300 text-xs p-2">
        <span>Number of Downloads : 0</span>
        <span>Number of Views: 0</span>
      </div> */}

      <div className="grid grid-cols-3 mx-2 mb-2 gap-4">
        <Card
          isProfile={true}
          links="https://images.unsplash.com/photo-1579824218206-e70b13561132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          isProfile={true}
          links="https://images.unsplash.com/photo-1579824218206-e70b13561132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          isProfile={true}
          links="https://images.unsplash.com/photo-1579824218206-e70b13561132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          isProfile={true}
          links="https://images.unsplash.com/photo-1579824218206-e70b13561132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          isProfile={true}
          links="https://images.unsplash.com/photo-1579824218206-e70b13561132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card
          isProfile={true}
          links="https://images.unsplash.com/photo-1579824218206-e70b13561132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}

export default Profile;
