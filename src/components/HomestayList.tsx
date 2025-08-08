import { slideContent } from '../data/homestayData';

export default function HomestayList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {slideContent.map((stay, index) => (
        <div key={index} className="rounded-lg shadow-lg overflow-hidden">
          <img src={stay.image} alt={stay.titleTop+" "+stay.titleMain} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{stay.titleTop+" "+stay.titleMain}</h2>
            <p className="text-gray-600">{stay.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
