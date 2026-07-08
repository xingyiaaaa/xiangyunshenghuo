import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Plane, Car, Cloud, Building2, Zap, GraduationCap, Warehouse } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFloat from '@/components/ContactFloat';
import industryImg from '../../picture/工业.png';
import powerImg from '../../picture/电力.png';
import schoolImg from '../../picture/校园巡检.png';
import storageImg from '../../picture/仓储.png';
import airImg from '../../picture/空中.jpg';
import groundImg from '../../picture/地面.jpg';

interface ArchitectureCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgImage?: string;
}

interface Solution {
  id: number;
  icon: React.ReactNode;
  title: string;
  painPoint: string;
  description: string;
  image: string;
}

const architectureCards: ArchitectureCard[] = [
  {
    id: 1,
    icon: <Plane size={40} />,
    title: '空中端',
    subtitle: '无人机平台',
    description: '高空密集群体巡检、长航时设计、多光谱相机及雷达设备，负责全域高效高空巡视与实时测绘。',
    image: airImg,
    bgImage: airImg,
  },
  {
    id: 2,
    icon: <Car size={40} />,
    title: '地面端',
    subtitle: '无人车/机器人平台',
    description: '具备SLAM定位与建图、激光雷达导航、全天候自主巡视能力。分为小型巡检车（狭窄空间/室内）与中型安防车（强化越野、声光报警），负责地面精细化巡查。',
    image: groundImg,
    bgImage: groundImg,
  },
  {
    id: 3,
    icon: <Cloud size={40} />,
    title: '云端',
    subtitle: '智能巡检平台',
    description: '数字化智能系统。融合AI智能识别、缺陷检测、实时预警与多维度数据看板，实现空地联动的一体化调度控制。',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
  },
];

const solutions: Solution[] = [
  {
    id: 1,
    icon: <Building2 size={24} />,
    title: '工业园区巡检解决方案',
    painPoint: '面积大、盲区多、夜间安防人力成本高。',
    description: '采用"巡检无人车+定点无人机"24h无人化值守，针对厂区、仓库、管道等重点区域实施立体化巡检，防范火灾与非法入侵。',
    image: industryImg,
  },
  {
    id: 2,
    icon: <Zap size={24} />,
    title: '电力与能源巡检解决方案',
    painPoint: '高危作业、人工巡检效率低、隐患识别不及时。',
    description: '全场景、全天候、实时智能检测。利用无人机搭载热成像与多光谱相机进行输电线路、变电站、光伏面板的高空缺陷巡查，结合地面无人车对设备仪表进行精细读取，AI自动生成隐患报告。',
    image: powerImg,
  },
  {
    id: 3,
    icon: <GraduationCap size={24} />,
    title: '校园安防巡检解决方案',
    painPoint: '人员密集、突发事件响应要求极高。',
    description: '构建校园全域立体防护网。无人车常态化在校园主干道、教学楼周边、死角进行全天候巡视，配备智能防暴与声光报警系统，数据实时同步云端看板，联动保卫处实现秒级应急响应。',
    image: schoolImg,
  },
  {
    id: 4,
    icon: <Warehouse size={24} />,
    title: '仓储与物流运输解决方案',
    painPoint: '物资密集度高、传统盘点与安全监测繁琐。',
    description: '室内外一体化智能联动。利用紧凑型巡检机器人进行库房内部高精度SLAM导航盘点、环境温湿度及火灾隐患监测；室外联动中型无人车进行园区仓船周转区高效安防巡视。',
    image: storageImg,
  },
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header />
      <main className="pt-16">
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1920&h=600&fit=crop"
            alt="解决方案"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="text-blue-300 text-sm mb-4">首页 &gt; 解决方案</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">解决方案</h1>
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-red-500"></div>
              <span className="text-red-500 text-xl font-light tracking-[0.3em]">SOLUTIONS</span>
              <div className="w-16 h-px bg-red-500"></div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                "空中—地面—云端"一体化智能生态体系
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                构建覆盖监测预警、干扰处置、数据协同的全链条解决方案，实现空地联动的智能化巡检调度
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {architectureCards.map((card) =>
                card.bgImage ? (
                  <div
                    key={card.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="aspect-[3/2]">
                      <img
                        src={card.bgImage}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                      <p className="text-blue-300 text-sm mt-1 mb-3">{card.subtitle}</p>
                      <p className="text-gray-200 text-sm leading-relaxed line-clamp-3 max-w-xs">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={card.id}
                    className={cn(
                      'group relative overflow-hidden rounded-2xl',
                      'bg-white shadow-lg hover:shadow-2xl',
                      'transition-all duration-500 hover:scale-[1.02]'
                    )}
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/80 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className={cn(
                        'w-16 h-16 rounded-full flex items-center justify-center',
                        'bg-red-500/90 text-white',
                        'group-hover:bg-red-600 transition-colors duration-300'
                      )}>
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-4 mb-1">{card.title}</h3>
                      <p className="text-blue-300 text-sm mb-4">{card.subtitle}</p>
                      <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                场景化解决方案
              </h2>
              <p className="text-gray-600">
                根据不同行业特性，提供精准定制的智能巡检解决方案
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolution(index)}
                  className={cn(
                    'flex items-center gap-2 px-6 py-3 rounded-full font-medium',
                    'transition-all duration-300',
                    activeSolution === index
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                  )}
                >
                  <span className="text-sm opacity-70">0{solution.id}</span>
                  <span className="hidden sm:inline">{solution.title.split('解决方案')[0]}</span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto lg:h-full">
                  <img
                    src={solutions[activeSolution].image}
                    alt={solutions[activeSolution].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-900/10 flex items-center justify-center text-blue-900">
                      {solutions[activeSolution].icon}
                    </div>
                    <div>
                      <span className="text-red-600 text-sm font-medium">0{solutions[activeSolution].id}</span>
                      <h3 className="text-2xl font-bold text-gray-800">{solutions[activeSolution].title}</h3>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <p className="text-gray-700 font-medium">核心痛点：</p>
                    <p className="text-gray-600 text-sm mt-1">{solutions[activeSolution].painPoint}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {solutions[activeSolution].description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium">
                      了解详情
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1a365d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  需要量身定制智能空地协同巡检方案？
                </h3>
                <p className="text-blue-200">
                  我们的专业团队将为您提供一对一的解决方案咨询服务
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className={cn(
                    'px-8 py-4 bg-red-600 text-white rounded-lg',
                    'font-bold text-lg',
                    'hover:bg-red-700 hover:scale-105',
                    'transition-all duration-300 shadow-lg hover:shadow-xl'
                  )}
                >
                  联系我们 / 获取方案
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactFloat />
      <Footer />
    </div>
  );
}
