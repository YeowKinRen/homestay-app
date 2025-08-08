// App.tsx or HomestayList.tsx
const homestays = [
  {
    name: 'Cheng Baru Classical Cozy Homestay',
    image: '/images/cheng-baru-classical-cozy-homestay/interior.jpg',
    description: 'Classical style homestay in Cheng Baru'
  },
  {
    name: 'Cheng Setia Classical Cozy Homestay',
    image: '/images/cheng-setia-classical-cozy-homestay/interior.png',
    description: 'Classical style homestay in Cheng Setia'
  },
  // Add more homestays here...
];

export default function HomestayList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {homestays.map((stay, index) => (
        <div key={index} className="rounded-lg shadow-lg overflow-hidden">
          <img src={stay.image} alt={stay.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{stay.name}</h2>
            <p className="text-gray-600">{stay.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
