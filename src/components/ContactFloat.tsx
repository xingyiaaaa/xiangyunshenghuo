import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactFloat() {
  return (
    <div className="fixed right-4 bottom-20 flex flex-col space-y-3 z-40">
      <a
        href="mailto:contact@xysh-aerospace.com"
        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-700 transition-colors group"
      >
        <Mail size={24} />
        <span className="absolute right-14 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          contact@xysh-aerospace.com
        </span>
      </a>
      <a
        href="tel:400-888-8888"
        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-700 transition-colors group"
      >
        <Phone size={24} />
        <span className="absolute right-14 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          400-888-8888
        </span>
      </a>
      <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-700 transition-colors group">
        <MessageCircle size={24} />
        <span className="absolute right-14 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          在线咨询
        </span>
      </button>
    </div>
  );
}
