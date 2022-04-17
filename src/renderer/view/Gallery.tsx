import React from "react";
import Card from "../components/Card";
function Gallery() {
  // React.useEffect(() => {
  //   const searched = cities.filter((city: any) => {
  //     return city?.city.toLowerCase().includes(search.toLowerCase());
  //   });
  //   setSearchedCity(searched);
  // }, [search]);
  return (
    <div>
      <div className="grid grid-cols-3 mx-2 mb-2 p-2 gap-4 ">
        <Card links="https://images.unsplash.com/photo-1649692157683-348451f93660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649709993529-8da47c974a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649709993529-8da47c974a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649692157683-348451f93660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649692157683-348451f93660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1568675517458-8a0564027454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649869135510-4c338bd78559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <Card links="https://images.unsplash.com/photo-1649835654787-b81f5584cbcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
      </div>
    </div>
  );
}

export default Gallery;
