import { useParams } from "react-router-dom";
import { cities } from "../data";

export default function CityDetails() {
  const { cityId } = useParams();
  const city = cities.find((city) => city.id.toString() === cityId);

  if (!city) {
    return <h2 className="not-found">City not found</h2>;
  }

  return (
    <div className="city-details">
      {/* Banner */}
      <div className="banner">
        <img src={city.img.src} alt={city.img.alt} />
        <div className="banner-text">
          <h1>{city.title}</h1>
          <p>{city.country}</p>
        </div>
      </div>

      <div className="content">
        {/* Description */}
        <p className="description">{city.text}</p>

        {/* Top Attractions */}
        <div className="cards-section">
          <h2>Top Attractions</h2>
          <div className="cards-grid">
            {city.attractions.map((item, index) => (
              <div key={index} className="card">
                <img
                  src={item.img || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Food */}
        <div className="cards-section">
          <h2>Local Food You Must Try</h2>
          <div className="cards-grid">
            {city.localFood.map((food, index) => (
              <div key={index} className="card">
                <img
                  src={food.img || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={food.name}
                />
                <p>{food.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="cards-section">
          <h2>Travel Tips</h2>
          <ul className="tips-list">
            {city.travelTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Meta Info */}
        <div className="meta">
          <p>
            <strong>Best Time to Visit:</strong> {city.bestTimeToVisit}
          </p>
          <p>
            <strong>Currency:</strong> {city.currency}
          </p>
          <p>
            <strong>Language:</strong> {city.language}
          </p>
        </div>

        {/* Google Maps Button */}
        <a
          href={city.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="maps-btn"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
