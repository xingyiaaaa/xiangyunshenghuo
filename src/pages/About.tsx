import { Rocket, Car, Cloud, Compass, Scan, Eye, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFloat from '@/components/ContactFloat';
import aboutImg from '../../picture/空中.jpg';

const productTiers = [
  {
    icon: <Rocket size={36} />,
    title: '空中巡查层',
    subtitle: '无人机系统',
    desc: '大范围巡查、航线自主飞行、热成像检测，实现广覆盖与高效率。',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: <Car size={36} />,
    title: '地面巡检层',
    subtitle: '智能无人车',
    desc: '路径自主导航、近距离精细检测，补足高空视觉盲区，实现高精度作业。',
    color: 'from-red-600 to-red-700',
  },
  {
    icon: <Cloud size={36} />,
    title: '云端管理层',
    subtitle: '统一管理平台',
    desc: '统一设备管控、智能任务调度、AI模型分析，驱动巡检流程自动化与数字化。',
    color: 'from-[#1a365d] to-blue-800',
  },
];

const techCards = [
  {
    icon: <Compass size={28} />,
    title: '自主导航与SLAM',
    desc: '实现无人机与巡检车的自主高精度定位与路径规划，降低人工干预。',
  },
  {
    icon: <Scan size={28} />,
    title: '多传感器融合',
    desc: '集成激光雷达、热成像、RGB相机、IMU及GNSS，大幅增强复杂环境适应性。',
  },
  {
    icon: <Eye size={28} />,
    title: 'AI视觉识别',
    desc: '基于深度学习的目标检测，自动识别现场设备异常与故障，实现智能分析预警。',
  },
  {
    icon: <Layers size={28} />,
    title: '数字孪生平台',
    desc: '全场景三维可视化管理，建立巡检数据全生命周期闭环体系。',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section className="relative h-[420px] md:h-[520px] overflow-hidden">
          <img
            src={aboutImg}
            alt="关于我们"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="text-blue-300 text-sm mb-4">首页 &gt; 关于我们</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">关于我们</h1>
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-red-500" />
              <span className="text-red-500 text-xl font-light tracking-[0.3em]">ABOUT US</span>
              <div className="w-16 h-px bg-red-500" />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={aboutImg}
                  alt="祥云圣火"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/30 to-transparent" />
              </div>
              <div>
                <span className="text-red-600 text-sm font-medium tracking-[0.2em] uppercase">About Company</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  关于<span className="text-[#1a365d]">祥云圣火</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                  北京祥云圣火航空科技有限公司是一家专注于低空经济领域的智能无人系统解决方案提供商。致力于推动无人机、机器人、人工智能、大数据及数字化技术深度融合，构建覆盖"空中—地面—云端"的智能无人系统生态体系。
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  公司围绕国家低空经济发展战略，以无人机、机器人、多传感器融合感知、自主导航及数字化管理平台技术为核心，推动传统巡检、巡查、安防、运维等行业向无人化、智能化和数字化方向升级。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">使命与愿景</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">以智能无人系统赋能产业升级，让人工智能服务实体经济</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-red-500">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400">MISSION</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">企业使命</h3>
                <p className="text-gray-600 leading-relaxed text-sm">以智能无人系统赋能产业升级，让人工智能服务实体经济。</p>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-[#1a365d]">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400">VISION</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">企业愿景</h3>
                <p className="text-gray-600 leading-relaxed text-sm">成为国内领先的低空经济智能无人系统科技企业，打造覆盖智慧巡检、智慧安防、应急救援等领域的行业级无人系统生态平台。</p>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-red-500">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400">VALUE</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">核心理念</h3>
                <p className="text-gray-600 leading-relaxed text-sm">科技守护安全，创新赋能未来。坚持以客户需求为导向，提供高效可靠的技术支撑。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">空地协同智能巡检平台</h2>
              <p className="text-gray-500 max-w-3xl mx-auto">
                融合无人机、无人车、AI、自主导航及数字化管理平台等核心技术，构建"空中巡查 + 地面巡检 + 云端管理"的三位一体作业体系
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productTiers.map((tier) => (
                <div
                  key={tier.title}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-br ${tier.color} p-8 text-center`}>
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors duration-300">
                      {tier.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{tier.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{tier.subtitle}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#1a365d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心技术壁垒</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">自主导航 · 多源融合 · AI视觉 · 数字孪生</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {techCards.map((card) => (
                <div
                  key={card.title}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-red-500/50"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full border-2 border-red-500/60 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">{card.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFloat />
      <Footer />
    </div>
  );
}
