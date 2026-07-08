import { useState, useEffect } from 'react';

const slides = [
  {
    title: '业务能力',
    subtitle: '航空航天领域专业服务',
    bgImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aerospace%20manufacturing%20facility%20modern%20technology%20dark%20background%20professional%20industrial&image_size=landscape_16_9',
  },
  {
    title: '科技创新',
    subtitle: '引领行业前沿技术',
    bgImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aerospace%20engineering%20design%20CAD%20software%20blueprint%20technology%20dark%20professional&image_size=landscape_16_9',
  },
  {
    title: '品质保障',
    subtitle: '严格的质量控制体系',
    bgImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=precision%20manufacturing%20quality%20control%20aerospace%20components%20industrial%20dark%20professional&image_size=landscape_16_9',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-red-600' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm">首页 &gt; 服务</p>
      </div>
    </section>
  );
}
