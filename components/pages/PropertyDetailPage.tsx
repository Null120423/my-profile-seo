// components/pages/PropertyDetailPage.tsx
"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { USER_DATA } from "@/lib/data";
import {
  Bath,
  Bed,
  Calendar,
  Car,
  CheckCircle,
  CreditCard,
  MapPin,
  Phone,
  PodcastIcon,
  Share2,
  Shield,
  Square,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "../carousel";
import PropertyCardItem from "../ui/PropertyCard";

// TypeScript interfaces (matching API response)
export interface PropertyImage {
  url: string;
  caption?: string;
  isPrimary?: boolean;
}

export interface AgentInfo {
  name: string;
  title: string;
  rating: number;
  contactNumber: string;
  email: string;
  avatar?: string;
}

export interface QuickStats {
  propertyType: string;
  totalFloors: string;
  totalUnits: string;
  handoverCondition: string;
  direction: string;
  legalDocument: string;
}

export interface PropertyData {
  id: number;
  name: string;
  slug: string;
  address: string;
  rating: number;
  reviewsCount: number;
  propertyImages: PropertyImage[];
  minArea: string;
  maxArea: string;
  minBedrooms: string;
  maxBedrooms: string;
  minBathrooms: string;
  maxBathrooms: string;
  parkingSpaces: string;
  description: string[];
  floorPlans: string[];
  amenities: string[];
  minPrice: string;
  maxPrice?: string;
  priceNotes?: string;
  legalStatus: string;
  loanSupport?: string;
  handoverDate: string;
  agent: AgentInfo;
  quickStats: QuickStats;
  relatedProperties?: any[];
  propertyType: string;
}

interface PropertyDetailPageProps {
  propertyData: PropertyData;
}

const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  propertyData,
}) => {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0);

  const handleContactAgent = (method: "phone" | "email" | "whatsapp") => {
    if (!propertyData?.agent) return;

    switch (method) {
      case "phone":
        window.open(`tel:${USER_DATA.phoneNumber}`);
        break;
      case "email":
        window.open(
          `mailto:${USER_DATA.email}?subject=Tư vấn dự án ${propertyData.name}`
        );
        break;
      case "whatsapp":
        const message = encodeURIComponent(
          `Xin chào, tôi quan tâm đến dự án ${propertyData.name}. Vui lòng tư vấn cho tôi.`
        );
        window.open(
          `https://wa.me/${USER_DATA.phoneNumber.replace(
            /[^0-9]/g,
            ""
          )}?text=${message}`
        );
        break;
    }
  };

  if (!propertyData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h2>
          <TransitionLink
            href="/project/all"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Properties
          </TransitionLink>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 animate-fade-in">
          <nav className="text-sm text-gray-500">
            <TransitionLink href="/">Trang chủ</TransitionLink> /{" "}
            <TransitionLink href="/project/all">Dự án</TransitionLink> /{" "}
            <span className="text-slate-900">{propertyData.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="animate-slide-up">
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                <Carousel images={propertyData.propertyImages as any[]} />
              </div>
            </div>

            {/* Property Info */}
            <div className="animate-fade-in-delay">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    {propertyData.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span>{propertyData.address}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-3 rounded-lg border border-gray-200 text-gray-600 hover: transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className=" rounded-lg p-4 text-center">
                  <Square className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Diện tích</div>
                  <div className="font-semibold">
                    {propertyData.minArea}-{propertyData.maxArea}
                  </div>
                </div>
                <div className=" rounded-lg p-4 text-center">
                  <Bed className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Phòng ngủ</div>
                  <div className="font-semibold">
                    {propertyData.minBedrooms}-{propertyData.maxBedrooms} phòng
                  </div>
                </div>
                <div className=" rounded-lg p-4 text-center">
                  <Bath className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Phòng tắm</div>
                  <div className="font-semibold">
                    {propertyData.minBathrooms}-{propertyData.maxBathrooms}{" "}
                    phòng
                  </div>
                </div>
                <div className=" rounded-lg p-4 text-center">
                  <Car className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Chỗ đậu xe</div>
                  <div className="font-semibold">
                    {propertyData.parkingSpaces}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Mô tả dự án
                </h3>
                <div className="prose prose-gray max-w-none">
                  {propertyData.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Floor Plans */}
              {propertyData.floorPlans.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Mặt bằng căn hộ
                  </h3>
                  {propertyData?.floorPlans.map((plan, index) => (
                    <Image
                      className="rounded-lg "
                      key={index}
                      src={plan}
                      alt={`Mặt bằng ${index + 1}`}
                      width={800}
                      height={600}
                    />
                  ))}
                </div>
              )}

              {/* Amenities */}
              {propertyData.amenities.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Tiện ích dự án
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {propertyData.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3  rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 animate-slide-in-right">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {propertyData.minPrice}
                  {propertyData.maxPrice && ` - ${propertyData.maxPrice}`}
                </div>
                <div className="text-gray-600">{propertyData?.priceNotes}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm">
                    {propertyData.legalStatus}
                  </span>
                </div>
                {propertyData.loanSupport && (
                  <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                    <CreditCard className="w-5 h-5 text-primary-600" />
                    <span className="text-primary-700 text-sm">
                      {propertyData.loanSupport}
                    </span>
                  </div>
                )}
                {propertyData?.handoverDate && (
                  <div className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-secondary-600" />
                    <span className="text-secondary-700 text-sm">
                      Bàn giao {propertyData.handoverDate}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <TransitionLink
                  href={
                    "/booking?" +
                    new URLSearchParams({
                      content: `Tôi muốn đăng ký xem nhà dự án ${propertyData.name}`,
                      slug: propertyData.slug,
                    })
                  }
                  className="btn-primary w-full  py-3 px-4  flex items-center justify-center gap-2"
                >
                  <PodcastIcon className="w-5 h-5" />
                  Đăng ký xem nhà
                </TransitionLink>
                <button
                  onClick={() => handleContactAgent("phone")}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Gọi tư vấn
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            {propertyData?.quickStats && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 animate-slide-in-right-delay">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Thông tin nhanh
                </h4>
                <div className="space-y-3 text-sm">
                  {propertyData.propertyType && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loại hình:</span>
                      <span className="font-medium">
                        {propertyData.propertyType}
                      </span>
                    </div>
                  )}
                  {propertyData.quickStats.totalFloors && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tổng số tầng:</span>
                      <span className="font-medium">
                        {propertyData.quickStats.totalFloors}
                      </span>
                    </div>
                  )}
                  {propertyData.quickStats.totalUnits && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tổng số căn:</span>
                      <span className="font-medium">
                        {propertyData.quickStats.totalUnits}
                      </span>
                    </div>
                  )}
                  {propertyData.quickStats.handoverCondition && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bàn giao:</span>
                      <span className="font-medium">
                        {propertyData.quickStats.handoverCondition}
                      </span>
                    </div>
                  )}
                  {propertyData.quickStats.direction && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hướng:</span>
                      <span className="font-medium">
                        {propertyData.quickStats.direction}
                      </span>
                    </div>
                  )}
                  {propertyData.quickStats.legalDocument && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pháp lý:</span>
                      <span className="font-medium text-green-600">
                        {propertyData.quickStats.legalDocument}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Properties */}
        {propertyData.relatedProperties &&
          propertyData.relatedProperties.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Dự án liên quan</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertyData.relatedProperties.map((property) => (
                  <PropertyCardItem key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default PropertyDetailPage;
