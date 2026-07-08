import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFloat from '@/components/ContactFloat';

const platformVersions = [
  {
    name: 'XY-L1',
    desc: '基础版巡检平台',
    tagline: '轻量入门，快速部署',
    specs: [
      { label: '功能定位', value: '基础数据收集与单机控制' },
      { label: '设备接入', value: '单设备管理' },
      { label: '用户数', value: '10 人' },
      { label: '存储', value: '100 GB' },
    ],
    highlight: '适合小型场景快速上线',
    color: 'from-slate-500 to-slate-600',
  },
  {
    name: 'XY-L2',
    desc: '标准版巡检平台',
    tagline: '多设备协同，自动化巡检',
    specs: [
      { label: '功能定位', value: '多设备接入与自动化常规巡检' },
      { label: '设备接入', value: '多设备协同' },
      { label: '用户数', value: '50 人' },
      { label: '存储', value: '500 GB' },
    ],
    highlight: '适合中型园区日常运维',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'XY-L3',
    desc: '专业版巡检平台',
    tagline: 'AI 赋能，智能预警',
    specs: [
      { label: '功能定位', value: 'AI 智能识别、缺陷检测与实时预警' },
      { label: '设备接入', value: 'AI 智能分析' },
      { label: '用户数', value: '200 人' },
      { label: '存储', value: '2 TB' },
    ],
    highlight: '适合大型复杂场景深度分析',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'XY-L4',
    desc: '企业版巡检平台',
    tagline: '空地联动，全面集成',
    specs: [
      { label: '功能定位', value: '多维度数据看板、空地联动调度与企业级集成' },
      { label: '设备接入', value: '定制化开发' },
      { label: '用户数', value: '不限' },
      { label: '存储', value: '10 TB' },
    ],
    highlight: '适合集团级全链路智能管理',
    color: 'from-gray-800 to-gray-900',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24">
        <section className="bg-blue-900 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">产品中心</h1>
            <p className="mt-2 text-blue-200">首页 &gt; 产品中心</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="relative aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&h=600&fit=crop"
                alt="空地协同智能巡检平台"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent flex items-center">
                <div className="px-8 md:px-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    空地协同智能巡检平台
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 max-w-xl">
                    深度融合无人机、地面机器人与 AI 视觉分析，
                    <br className="hidden md:block" />
                    打造全场景智能巡检闭环。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">平台版本</h3>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              根据业务规模与场景深度，提供四个阶梯版本，满足从单点部署到企业级集成的全链路需求。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformVersions.map((version) => (
              <button
                key={version.name}
                onClick={() => {}}
                className="group w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${version.color} px-5 py-4 rounded-t-xl`}>
                  <h4 className="text-xl font-bold text-white">{version.name}</h4>
                  <p className="text-sm text-white/80 mt-0.5">{version.desc}</p>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-medium text-red-600 uppercase tracking-wider mb-3">
                    {version.tagline}
                  </p>
                  <ul className="space-y-2.5 mb-5 flex-1">
                    {version.specs.map((spec) => (
                      <li key={spec.label} className="text-sm text-gray-600">
                        <span className="font-medium text-gray-800">{spec.label}：</span>
                        {spec.value}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 italic">— {version.highlight}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
      <ContactFloat />
      <Footer />
    </div>
  );
}
