"use client";

import {
  Bath,
  Bed,
  Calendar,
  Car,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Heart,
  MapPin,
  Phone,
  Share2,
  Shield,
  Square,
  Star,
} from "lucide-react";
import { useState } from "react";
import TransitionLink from "../ui/TransitionLink";

const propertyImages = [
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

const amenities = [
  "Hồ bơi vô cực",
  "Phòng gym hiện đại",
  "Spa & Sauna",
  "Khu vui chơi trẻ em",
  "Sân tennis",
  "Khu BBQ ngoài trời",
  "Trung tâm thương mại",
  "An ninh 24/7",
  "Parking thông minh",
  "Khu vườn xanh",
  "Phòng họp",
  "Café & Restaurant",
];

const floorPlans = [
  {
    name: "2 phòng ngủ",
    area: "75m²",
    price: "2.5 tỷ",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "3 phòng ngủ",
    area: "95m²",
    price: "3.2 tỷ",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Penthouse",
    area: "150m²",
    price: "5.8 tỷ",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

interface Props {
  id: string;
}

export default function ProjectDetailPage({ id }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );
  };

  return (
    <section className="py-20 pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 animate-fade-in">
          <nav className="text-sm text-gray-500">
            <TransitionLink href="/">Trang chủ</TransitionLink> /{" "}
            <span>Dự án</span> /{" "}
            <span className="text-slate-900">Chung cư Luxury Garden</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="animate-slide-up">
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt="Property"
                  className="w-full h-96 object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-slate-700" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {propertyImages.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {propertyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === index
                        ? "border-secondary-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="animate-fade-in-delay">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    Chung cư Luxury Garden
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span>123 Nguyễn Văn Linh, Quận 7, TP.HCM</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-secondary-400 text-secondary-400"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        (4.8/5 - 124 đánh giá)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      isLiked
                        ? "bg-red-50 border-red-200 text-red-600"
                        : "bg-white border-gray-200 text-gray-600 hover:"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="p-3 rounded-lg border border-gray-200 text-gray-600 hover: transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className=" rounded-lg p-4 text-center">
                  <Square className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Diện tích</div>
                  <div className="font-semibold">75-150m²</div>
                </div>
                <div className=" rounded-lg p-4 text-center">
                  <Bed className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Phòng ngủ</div>
                  <div className="font-semibold">2-4 phòng</div>
                </div>
                <div className=" rounded-lg p-4 text-center">
                  <Bath className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Phòng tắm</div>
                  <div className="font-semibold">2-3 phòng</div>
                </div>
                <div className=" rounded-lg p-4 text-center">
                  <Car className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Chỗ đậu xe</div>
                  <div className="font-semibold">1-2 chỗ</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Mô tả dự án
                </h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Chung cư Luxury Garden là dự án cao cấp tọa lạc tại vị trí
                    đắc địa của Quận 7, TP.HCM. Với thiết kế hiện đại và đầy đủ
                    tiện ích, dự án hứa hẹn mang đến không gian sống lý tưởng
                    cho các gia đình.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Dự án gồm 2 tòa tháp cao 35 tầng với tổng cộng 800 căn hộ,
                    được thiết kế theo phong cách hiện đại với không gian xanh
                    chiếm 40% tổng diện tích. Mỗi căn hộ đều có ban công riêng
                    với tầm nhìn panorama ra sông Sài Gòn.
                  </p>
                </div>
              </div>

              {/* Floor Plans */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Mặt bằng căn hộ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {floorPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                        selectedFloorPlan === index
                          ? "border-secondary-500 shadow-lg"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedFloorPlan(index)}
                    >
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {plan.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {plan.area}
                        </p>
                        <p className="text-secondary-600 font-bold">
                          {plan.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Tiện ích dự án
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3  rounded-lg hover:bg-secondary-50 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6  top-24 animate-slide-in-right">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  Từ 2.5 tỷ
                </div>
                <div className="text-gray-600">Giá chưa bao gồm VAT</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm">
                    Pháp lý minh bạch
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                  <CreditCard className="w-5 h-5 text-primary-600" />
                  <span className="text-primary-700 text-sm">
                    Hỗ trợ vay 70%
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-secondary-600" />
                  <span className="text-secondary-700 text-sm">
                    Bàn giao Q4/2024
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Đăng ký xem nhà
                </button>
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Gọi tư vấn
                </button>
                <button className="w-full border border-gray-300 hover: text-slate-700 font-semibold py-3 px-4 rounded-lg transition-colors">
                  Tải brochure
                </button>
              </div>
            </div>

            {/* Contact Agent */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 animate-fade-in-delay">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Tư vấn viên
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full flex items-center justify-center text-white font-semibold">
                  NV
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Nguyễn Văn A
                  </div>
                  <div className="text-sm text-gray-600">
                    Chuyên viên tư vấn
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-secondary-400 text-secondary-400"
                      />
                    ))}
                    <span className="text-gray-600 ml-1">(4.9)</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-white hover: text-slate-700 font-medium py-2 px-4 rounded-lg border border-gray-200 transition-colors">
                Liên hệ tư vấn viên
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 animate-slide-in-right-delay">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                Thông tin nhanh
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loại hình:</span>
                  <span className="font-medium">Chung cư</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng số tầng:</span>
                  <span className="font-medium">35 tầng</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng số căn:</span>
                  <span className="font-medium">800 căn</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bàn giao:</span>
                  <span className="font-medium">Hoàn thiện cơ bản</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hướng:</span>
                  <span className="font-medium">Đông Nam</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pháp lý:</span>
                  <span className="font-medium text-green-600">Sổ hồng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
