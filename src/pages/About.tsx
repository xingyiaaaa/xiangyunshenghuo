import { Shield, Zap, Handshake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFloat from '@/components/ContactFloat';
import aboutImg from '../../picture/空中.jpg';

const milestones = [
  {
    year: '2024',
    title: '公司成立',
    description: '北京祥云圣火航空科技有限公司正式成立，精准卡位低空经济国家战略风口，锚定无人机反制与低空安全赛道。',
  },
  {
    year: '2025',
    title: '核心突破',
    description: '核心团队组建完毕，攻克"探测-识别-反制"一体化底层算法，完成 1.0 版本产品定型，通过军工级可靠性测试。',
  },
  {
    year: '2026',
    title: '生态扩展',
    description: '开启全国试点部署，承接区域级与集团级项目，建立稳定客户池，深化低空安防生态扩展与行业标准共建。',
  },
];

const coreFeatures = [
  {
    icon: <Shield size={32} />,
    title: '低空安全防护',
    desc: '深耕无人机制控制、低空目标管控及智能安防技术研发，以自主创新为驱动，致力于构建覆盖监测预警、干扰处置、数据协同的全链条解决方案。',
  },
  {
    icon: <Zap size={32} />,
    title: '智能空地协同',
    desc: '依托行业领先的算法优化与硬件集成能力，实现无人机与无人车的无缝联动与一体化智能巡检调度。',
  },
  {
    icon: <Handshake size={32} />,
    title: '全流程技术服务',
    desc: '坚持以客户需求为导向，提供从方案设计到落地实施的全流程服务，为公共安全、工业巡检等领域提供高效可靠的技术支撑。',
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
                  alt="科研实验室"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/30 to-transparent" />
              </div>
              <div>
                <span className="text-red-600 text-sm font-medium tracking-[0.2em] uppercase">About Company</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  关于<span className="text-[#1a365d]">祥云圣火</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  北京祥云圣火航空科技有限公司是一家专注于低空安全领域的国家级战略高新技术企业。公司深耕无人机反制、低空目标管控及智能安防技术研发，深度融合产学研资源，构建起"探测-识别-反制"一体化技术体系。汇聚电磁对抗、智能感知领域专家，持续突破反制技术瓶颈，产品覆盖军民融合、公共安全等多领域，助力客户应对黑飞、违规飞行等安全挑战。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">使命与愿景</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">以科技守护空域安全，用创新赋能智慧防控</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-red-500">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400">MISSION</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">企业使命</h3>
                <p className="text-gray-600 leading-relaxed text-sm">守护空域安全，赋能智慧防控。以自主创新为驱动，持续推动低空安全防护体系的智能化升级。</p>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-[#1a365d]">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400">VISION</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">企业愿景</h3>
                <p className="text-gray-600 leading-relaxed text-sm">成为国内领先的低空安全科技企业，打造覆盖智慧巡检、反制管控、国防应急等领域的行业级生态平台。</p>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-red-500">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400">VALUE</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">核心理念</h3>
                <p className="text-gray-600 leading-relaxed text-sm">科技守护安全，创新赋能未来。坚持以客户需求为导向，提供高效可靠的技术支撑。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
              <p className="text-gray-500">从创立到行业引领，每一步都是对低空安全的坚定承诺</p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start gap-6 pb-16 last:pb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-0 md:left-1/2 top-0 w-[38px] h-[38px] -translate-x-[19px] md:-translate-x-[19px] flex items-center justify-center">
                    <div className="w-[38px] h-[38px] rounded-full bg-red-600 border-4 border-white shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className={`pl-14 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-sm font-bold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#1a365d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心优势</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">低空安全 · 空地协同 · 全流程技术服务</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreFeatures.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-red-500/50"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-red-500/60 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
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
