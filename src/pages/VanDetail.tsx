import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Van } from "../interfaces/types";

export const VanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState<Van>();

  const getVanDetail = useCallback(async () => {
    const response = await fetch(`/api/vans/${id}`);
    const { vans } = await response.json();
    setVan(vans);
  }, [id]);

  useEffect(() => {
    getVanDetail();
  }, [getVanDetail]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
