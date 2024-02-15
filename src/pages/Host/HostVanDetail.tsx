import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Van } from "../../interfaces/types";

export const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState<Van>();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img src={currentVan.imageUrl} width={150} />
      <h2>{currentVan.name}</h2>
      <p>{currentVan.price}</p>
      <p>{currentVan.type}</p>
    </div>
  );
};
