export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <p>电话：400-888-8888</p>
            <p>传真：</p>
            <p>网站：http://www.xysh-aerospace.com</p>
            <p>邮箱：contact@xysh-aerospace.com</p>
            <p>地址：北京市石景山区金安中海财富中心A栋3楼305</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>工信部查询网站: http://beian.miit.gov.cn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
