
import Map from "./components/Map";
import useFetchEarthquakes from "./hooks/useFetchEarthquakes";

export default function App() {
  const { earthquakes, loading, error } = useFetchEarthquakes();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 drop-shadow-lg animate-pulse">
        🌍 Earthquake Visualizer
      </h1>

      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/20">
        {loading && (
          <p className="text-center text-lg text-blue-200 font-medium animate-pulse">
            Fetching earthquake data...
          </p>
        )}
        {error && (
          <p className="text-center text-lg text-red-300 font-semibold">
            {error}
          </p>
        )}
        {!loading && !error && <Map earthquakes={earthquakes} />}
      </div>

      <p className="mt-6 text-sm text-gray-300">
        Data Source:{" "}
        <a
          href="https://earthquake.usgs.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300 transition"
        >
          USGS Earthquake API
        </a>
      </p>
    </div>
  );
}
