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
