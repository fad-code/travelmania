import { cities } from "../data";
import { Link } from "react-router-dom"

export default function Entry() {
    return (
        <>
            {cities.map((entry, index) => (
              <Link key={index} to={`/city/${entry.id}`} className="link-wrapper">
                <article key={index} className="journal-entry">
                    <div className="main-image-container">
                        <img 
                            className="main-image"
                            src={entry.img.src}
                            alt={entry.img.alt}
                        />
                    </div>
                    <div className="info-container">
                        <img 
                            className="marker"
                            src="/images/marker.png"  
                            alt="map marker icon"
                        />
                        <span className="country">{entry.country}</span>
                        <a 
                            href={entry.googleMapsLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}  
                        >
                            View on Google Maps
                        </a>
                        <h2 className="entry-title">{entry.title}</h2>
                        <p className="trip-dates">{entry.dates}</p>
                        <p className="entry-text">{entry.text}</p>
                    </div>
                </article>
                </Link>
            ))}
        </>
    );
}
