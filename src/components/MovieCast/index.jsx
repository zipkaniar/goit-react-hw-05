import React, { useEffect, useMemo, useState } from "react";
import { baseImageURL, getCreditsById } from "../../api/movieService";
import { useLocation, useParams } from "react-router-dom";
import styles from "./movieCast.module.css";

const MovieCast = () => {
    const [cast, setCast] = useState([]);
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const showCast = useMemo(() => (cast.length > 0 ? true : false), [cast]);
  
    useEffect(() => {
      (async () => {
        const data = await getCreditsById(params.movieId);
        setCast(data.cast ? data.cast : []);
        setIsLoading(false);
      })();
    }, []);
  
    return (
      <div className={styles.castContainer}>
        {!isLoading ? (
          <div>
            {showCast ? (
              <ul className={styles.castList}>
                {cast.map((actor, index) => (
                  <li key={index} className={styles.card}>
                    {actor.profile_path && (
                      <img
                        className={styles.actorImage}
                        src={baseImageURL + actor.profile_path}
                        alt={actor.name}
                      />
                    )}
                    <span className={styles.actorName}>{actor.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noReviews}>
                We don't have any reviews for this movie.
              </p>
            )}
          </div>
        ) : (
          <p>Cast loading...</p>
        )}
      </div>
    );
  };
  
  export default MovieCast;