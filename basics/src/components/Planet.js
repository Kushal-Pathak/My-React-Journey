const planets = [
  {
    name: "Mars",
    isGasPlanet: false,
  },
  {
    name: "Earth",
    isGasPlanet: false,
  },
  {
    name: "Jupiter",
    isGasPlanet: true,
  },
  {
    name: "Venus",
    isGasPlanet: false,
  },
  {
    name: "Neptune",
    isGasPlanet: true,
  },
  {
    name: "Uranus",
    isGasPlanet: true,
  },
];

export default function Planet({ planets }) {
  return (
    <div>
      {planets.map(
        (planet, index) =>
          planet.isGasPlanet && <h1 key={index}>{planet.name}</h1>
      )}
    </div>
  );
}
