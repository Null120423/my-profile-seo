// components/pages/AllPropertiesPage.tsx
"use client";

import { ChevronDown, Filter, Grid, List, Search } from "lucide-react";
import React, { useState } from "react";
import PropertyCardItem, { PropertyCard } from "../ui/PropertyCard";
import PropertyListItem from "../ui/PropertyListItem";

// TypeScript interfaces

interface PropertyFilters {
  city?: string;
  district?: string;
  propertyType?: string;
  minPrice?: string;
  maxPrice?: string;
  minBedrooms?: string;
  maxBedrooms?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
  featured?: boolean;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const AllPropertiesPage: React.FC<{ properties: PropertyCard[] }> = ({
  properties,
}) => {
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);

  // UI State
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlistedItems, setWishlistedItems] = useState<Set<number>>(
    new Set()
  );

  // Filter State
  const [filters, setFilters] = useState<PropertyFilters>({
    sortBy: "created_at",
    sortOrder: "DESC",
  });

  // Filter Options
  const cities = ["TP.HCM", "Hà Nội", "Đà Nẵng", "Cần Thơ"];
  const propertyTypes = [
    { value: "apartment", label: "Chung cư" },
    { value: "villa", label: "Biệt thự" },
    { value: "townhouse", label: "Nhà phố" },
    { value: "land", label: "Đất nền" },
  ];
  const sortOptions = [
    { value: "created_at-DESC", label: "Mới nhất" },
    { value: "created_at-ASC", label: "Cũ nhất" },
    { value: "min_price-ASC", label: "Giá thấp đến cao" },
    { value: "min_price-DESC", label: "Giá cao đến thấp" },
    { value: "rating-DESC", label: "Đánh giá cao nhất" },
    { value: "view_count-DESC", label: "Xem nhiều nhất" },
  ];

  // Handlers
  const handleFilterChange = (key: keyof PropertyFilters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split("-");
    setFilters((prev) => ({
      ...prev,
      sortBy,
      sortOrder,
    }));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    setFilters({
      sortBy: "created_at",
      sortOrder: "DESC",
    });
  };

  return (
    <div className="min-h-screen pt-32 ">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tất cả dự án</h1>
              {pagination && (
                <p className="text-gray-600 mt-1">
                  Tìm thấy {pagination.totalCount} dự án
                </p>
              )}
            </div>

            {/* Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex gap-2 max-w-md w-full lg:w-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm dự án..."
                  value={filters.search || ""}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
              <button type="submit" className="btn-primary">
                Tìm
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Filter Toggle & Quick Filters */}
            <div className=" hidden items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover: transition-colors"
              >
                <Filter className="w-5 h-5" />
                Bộ lọc
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* View Mode & Sort */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex  border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${
                    viewMode === "grid"
                      ? "bg-primary-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  aria-label="Chế độ lưới"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition-colors ${
                    viewMode === "list"
                      ? "bg-primary-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  aria-label="Chế độ danh sách"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 p-4  rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thành phố
                  </label>
                  <select
                    value={filters.city || ""}
                    onChange={(e) => handleFilterChange("city", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="">Tất cả</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loại hình
                  </label>
                  <select
                    value={filters.propertyType || ""}
                    onChange={(e) =>
                      handleFilterChange("propertyType", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="">Tất cả</option>
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Min Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phòng ngủ tối thiểu
                  </label>
                  <select
                    value={filters.minBedrooms || ""}
                    onChange={(e) =>
                      handleFilterChange("minBedrooms", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="">Tất cả</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-2 py-2 flex items-center justify-center text-gray-600 border btn-primary rounded-lg hover: transition-colors"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Properties Grid/List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {properties?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Không tìm thấy dự án nào</p>
            <button onClick={clearFilters} className="btn-primary">
              Xóa bộ lọc
            </button>
          </div>
        )}

        {properties?.length > 0 && (
          <>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {properties?.map((property) => (
                  <PropertyCardItem key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {properties?.map((property) => (
                  <PropertyListItem key={property.id} property={property} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  {pagination.hasPrevPage && (
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover: transition-colors">
                      Trước
                    </button>
                  )}

                  {[...Array(Math.min(5, pagination.totalPages))].map(
                    (_, index) => {
                      const page =
                        Math.max(1, pagination.currentPage - 2) + index;
                      if (page > pagination.totalPages) return null;

                      return (
                        <button
                          key={page}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            page === pagination.currentPage
                              ? "bg-primary-600 text-white"
                              : "border border-gray-300 hover:"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                  )}

                  {pagination.hasNextPage && (
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover: transition-colors">
                      Sau
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllPropertiesPage;
