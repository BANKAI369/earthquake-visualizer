
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = defaultIcon;

const Map = ({ earthquakes }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-[70vh] md:h-[75vh] w-full rounded-2xl shadow-lg border border-white/20"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      />
      {earthquakes.map((eq) => (
        <Marker
          key={eq.id}
          position={[eq.geometry.coordinates[1], eq.geometry.coordinates[0]]}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-bold text-gray-900">{eq.properties.place}</p>
              <p><span className="font-semibold">Magnitude:</span> {eq.properties.mag}</p>
              <p><span className="font-semibold">Time:</span> {new Date(eq.properties.time).toLocaleString()}</p>
              <a
                href={eq.properties.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-400 transition"
              >
                More Info
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
