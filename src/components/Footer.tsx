export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 space-y-1">
            <p>
              网站：
              <a
                href="https://vigorx.asia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-red-400 transition-colors"
              >
                vigorx.asia
              </a>
            </p>
            <p>地址：北京市石景山区金安中海财富中心</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>工信部查询网站: http://beian.miit.gov.cn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
