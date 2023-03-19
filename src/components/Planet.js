export default function Planet({ planets }) {
  return (
    <div>
      {planets.map((item, index) => {
        if (item.isGasPlanet) return <h1 key={index}>{item.name}</h1>;
      })}
    </div>
  );
}
