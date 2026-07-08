import industryImg from '../../picture/工业.png';
import powerImg from '../../picture/电力.png';
import schoolImg from '../../picture/校园巡检.png';
import storageImg from '../../picture/仓储.png';

const applicationScenes = [
  { id: 1, name: '工业园区巡检', image: industryImg, objectPosition: 'object-[20%_center]', origin: 'origin-left' },
  { id: 2, name: '电力巡检', image: powerImg, objectPosition: 'object-center', origin: 'origin-center' },
  { id: 3, name: '校园巡检', image: schoolImg, objectPosition: 'object-center', origin: 'origin-center' },
  { id: 4, name: '仓船运输', image: storageImg, objectPosition: 'object-center', origin: 'origin-center' },
];

export default function ApplicationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-gray-800 mb-4">
            APPLICATION
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-gray-300"></div>
            <span className="text-blue-900 text-xl font-medium">产品应用中心</span>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applicationScenes.map((scene) => (
            <a
              key={scene.id}
              href="/products"
              className={`group relative block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${scene.origin}`}
            >
              <div className="aspect-[4/3]">
                <img
                  src={scene.image}
                  alt={scene.name}
                  className={`w-full h-full object-cover ${scene.objectPosition} ${scene.origin} group-hover:scale-110 transition-transform duration-500`}
                />
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg shadow-lg group-hover:bg-red-700 transition-colors">
                  查看详情
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-colors duration-300 rounded-xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
