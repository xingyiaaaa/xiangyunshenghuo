import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFloat from '@/components/ContactFloat';
import airImg from '../../picture/空中.jpg';
import groundImg from '../../picture/地面.jpg';

const terminalCards = [
  {
    id: 1,
    title: '空中数据采集终端',
    subtitle: '无人机巡检平台',
    description: '搭载高分辨率多光谱相机与激光雷达，支持长航时高空密集巡检，实时采集全域影像与测绘数据，实现空中立体化智能监测覆盖。',
    image: airImg,
  },
  {
    id: 2,
    title: '地面智能执行终端',
    subtitle: '无人车/机器人平台',
    description: '融合 SLAM 自主导航与激光雷达技术，支持狭窄空间与复杂地形的精细化地面巡查，配备声光预警系统，全天候执行安防巡检任务。',
    image: groundImg,
  },
  {
    id: 3,
    title: '云端智能巡检平台',
    subtitle: 'AI 协同管控系统',
    description: '集成 AI 智能识别、缺陷检测、实时预警与多维度数据看板，实现空地联动的一体化调度控制，为决策提供全链路数据支撑。',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
  },
];

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
    gradient: 'from-sky-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
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
    gradient: 'from-blue-700 to-blue-900',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
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
    gradient: 'from-red-600 to-red-800',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
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
    gradient: 'from-gray-800 to-gray-950',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header />
      <main className="pt-16">
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop"
            alt="产品中心"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="text-blue-300 text-sm mb-4">首页 &gt; 产品中心</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">产品中心</h1>
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-red-500"></div>
              <span className="text-red-500 text-xl font-light tracking-[0.3em]">PRODUCTS</span>
              <div className="w-16 h-px bg-red-500"></div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                "空—地—云"全链路智能产品矩阵
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                从高空数据采集到地面智能执行，再到云端协同管控，构建端到端的智慧巡检产品生态体系
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {terminalCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="aspect-[3/2]">
                    <img
                      src={card.image}
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
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                平台版本
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                根据业务规模与场景深度，提供四个阶梯版本，满足从单点部署到企业级集成的全链路需求
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformVersions.map((version) => (
                <div
                  key={version.name}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={version.image}
                      alt={version.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div className={`bg-gradient-to-r ${version.gradient} px-4 py-3 rounded-xl mb-3`}>
                      <h4 className="text-lg font-bold text-white">{version.name}</h4>
                      <p className="text-sm text-white/80">{version.desc}</p>
                    </div>
                    <p className="text-xs font-medium text-red-400 uppercase tracking-wider mb-2">
                      {version.tagline}
                    </p>
                    <ul className="space-y-1 mb-3">
                      {version.specs.map((spec) => (
                        <li key={spec.label} className="text-xs text-gray-300">
                          <span className="font-medium text-white">{spec.label}：</span>
                          {spec.value}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-400 italic">— {version.highlight}</p>
                  </div>
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
