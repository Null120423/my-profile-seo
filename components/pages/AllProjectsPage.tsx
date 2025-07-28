import { MapPin, Square } from "lucide-react";
import TransitionLink from "../ui/TransitionLink";

const projects = [
  {
    id: 1,
    name: "Chung cư Luxury Garden",
    price: "2.5 tỷ",
    location: "Quận 7, TP.HCM",
    area: "75m²",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Chung cư",
  },
  {
    id: 2,
    name: "Biệt thự Sunshine Villa",
    price: "8.2 tỷ",
    location: "Quận 2, TP.HCM",
    area: "200m²",
    image:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Biệt thự",
  },
  {
    id: 3,
    name: "Căn hộ Studio Modern",
    price: "1.8 tỷ",
    location: "Quận 1, TP.HCM",
    area: "45m²",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Chung cư",
  },
  {
    id: 4,
    name: "Nhà phố thương mại",
    price: "4.5 tỷ",
    location: "Quận 3, TP.HCM",
    area: "120m²",
    image:
      "https://images.pexels.com/photos/1396196/pexels-photo-1396196.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Nhà phố",
  },
  {
    id: 5,
    name: "Penthouse Riverside",
    price: "12.8 tỷ",
    location: "Quận 4, TP.HCM",
    area: "180m²",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Chung cư",
  },
  {
    id: 6,
    name: "Căn hộ Green Park",
    price: "3.2 tỷ",
    location: "Quận 9, TP.HCM",
    area: "85m²",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Chung cư",
  },
];

export default function AllProjectsPage() {
  return (
    <section className="py-20 pt-32  min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tất cả dự án bất động sản
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Xem danh sách các dự án nổi bật đã được SEO thành công, tăng traffic
            và doanh số.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-lg font-semibold">
                  {project.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-secondary-600 transition-colors">
                  {project.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Square className="w-4 h-4" />
                    <span>Diện tích: {project.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {project.type}
                    </span>
                  </div>
                </div>
                <TransitionLink
                  href={`/project/${project.id}`}
                  className="w-full bg-slate-900 hover:bg-secondary-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Xem chi tiết
                </TransitionLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
