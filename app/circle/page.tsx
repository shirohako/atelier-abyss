import CircleCard from '../components/CircleCard';
import circleData from '../data/circle.json';

export default function CirclePage() {
  return (
    <div className="max-w-3xl m-auto mt-5 px-4">
      <h2 className="text-2xl font-bold">Circle</h2>
      <div className="bg-blue-100 p-5 my-3 rounded-md text-gray-600">
        Interested in exchanging links or updating your listing?
        <br />
        Feel free to leave a comment on{' '}
        <a
          href="https://github.com/shirohako/atelier-abyss/issues/17"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          this GitHub issue
        </a>
        .
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6 mt-5">
        {circleData.assets.map((site) => (
          <CircleCard
            key={site.title}
            imageUrl={site.img}
            title={site.title}
            url={site.url}
          />
        ))}
      </div>
    </div>
  );
}
