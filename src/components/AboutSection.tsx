import { cn } from '@/lib/utils';
import { Shield, Zap, Handshake } from 'lucide-react';

interface FeatureCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    icon: <Shield size={32} />,
    title: '低空安全防护',
    description: '深耕无人机制控制、低空目标管控及智能安防技术研发，以自主创新为驱动，致力于构建覆盖监测预警、干扰处置、数据协同的全链条解决方案。',
  },
  {
    id: 2,
    icon: <Zap size={32} />,
    title: '智能空地协同',
    description: '依托行业领先的算法优化与硬件集成能力，实现无人机与无人车的无缝联动与一体化智能巡检调度。',
  },
  {
    id: 3,
    icon: <Handshake size={32} />,
    title: '全流程技术服务',
    description: '坚持以客户需求为导向，提供从方案设计到落地实施的全流程服务，为公共安全、工业巡检等领域提供高效可靠的技术支撑。',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            公司介绍
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-px bg-gray-300"></div>
            <span className="text-blue-900 text-lg font-light tracking-[0.3em]">
              COMPANY INTRODUCTION
            </span>
            <div className="w-20 h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={cn(
                'group relative p-8 rounded-2xl',
                'bg-gray-50 hover:bg-white',
                'border border-gray-100 hover:border-blue-200',
                'shadow-sm hover:shadow-xl',
                'transition-all duration-300'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className={cn(
                  'w-20 h-20 mx-auto mb-6',
                  'rounded-full flex items-center justify-center',
                  'border-2 border-red-500 text-blue-900',
                  'group-hover:bg-red-500 group-hover:text-white',
                  'transition-all duration-300'
                )}>
                  {feature.icon}
                </div>

                <h3 className={cn(
                  'text-xl font-bold text-center mb-4',
                  'text-gray-800 group-hover:text-blue-900',
                  'transition-colors duration-300'
                )}>
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
