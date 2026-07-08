import { cn } from '@/lib/utils';

type ProductCategory = 'uav' | 'ugv' | 'inspection';

const serviceCategories: { id: ProductCategory; name: string; href: string; desc: string }[] = [
  { id: 'uav', name: '无人机', href: '/products', desc: '工业级无人机系统，适用于测绘、巡检、安防等多种场景' },
  { id: 'ugv', name: '无人车', href: '/products', desc: '自主导航无人车，适用于园区巡检、物资运输等场景' },
  { id: 'inspection', name: '机车联动智能巡检平台', href: '/products', desc: '一体化智能巡检解决方案，支持多设备协同作业' },
];

const categoryImages: Record<ProductCategory, string> = {
  uav: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
  ugv: 'https://images.unsplash.com/photo-1580894894522-725e4686cfc1?w=800&h=600&fit=crop',
  inspection: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
};

export default function ServiceSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">产品中心</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceCategories.map((cat) => (
          <a
            key={cat.id}
            href={cat.href}
            className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={categoryImages[cat.id]}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h4 className="text-xl font-bold text-white mb-1">{cat.name}</h4>
              <p className="text-sm text-gray-200">{cat.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
