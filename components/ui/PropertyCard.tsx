import { Bath, Bed, Eye, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import { Key } from "react";

import TransitionLink from "./TransitionLink";
export interface PropertyCard {
  id: number;
  name: string;
  slug: string;
  address: string;
  rating: number;
  reviewsCount: number;
  image: string;
  minArea: string;
  maxArea: string;
  bedrooms: string;
  bathrooms: string;
  parkingSpaces: string;
  amenities: string[];
  minPrice: string;
  maxPrice?: string;
  propertyType: string;
  city: string;
  district: string;
  ward?: string;
  isFeatured: boolean;
  viewCount: number;
  priority: number;
  createdAt: string;
  updatedAt: string;
  description: string[];
  priceNotes?: string[];
  propertyImages: {
    url: string;
    caption: string;
  }[];
  videoUrl: string;
}
// Property Card Component
export interface PropertyCardProps {
  property: PropertyCard;
}

const PropertyCardItem: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="relative">
        <TransitionLink href={`/project/${property.slug}`}>
          <div className="relative h-48 overflow-hidden">
            <Image
              fill
              alt={property.name}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              src={property.image}
            />
            {property?.isFeatured && (
              <div className="absolute top-3 left-3 bg-gradient-primary text-white px-2 py-1 rounded text-xs font-medium">
                Nổi bật
              </div>
            )}
          </div>
        </TransitionLink>
      </div>

      <div className="p-4">
        <TransitionLink href={`/project/${property.slug}`}>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {property.name}
          </h3>
        </TransitionLink>

        <div className="flex items-center gap-1 text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm line-clamp-1">{property.address}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Ruler className="w-4 h-4" />
              <span>{property.minArea}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{property.viewCount}</span>
          </div>
        </div>

        <div className="flex items-center justify-start gap-2">
          <span
            className="text-primary-600 font-semibold text-lg truncate max-w-[100ch] inline-block align-bottom"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
            title={property.minPrice}
          >
            {property.minPrice}
          </span>
          {property.maxPrice && (
            <span
              className="text-gray-600 text-sm truncate max-w-[100ch] inline-block align-bottom"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
              }}
              title={property.maxPrice}
            >
              {" "}
              - {property.maxPrice}
            </span>
          )}
        </div>

        {property?.amenities?.length > 0 && (
          <div className="mt-3 pt-3 border-t">
            <div className="flex flex-wrap gap-1">
              {property?.amenities
                .slice(0, 2)
                .map((amenity: any, index: Key | null | undefined) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                  >
                    {amenity}
                  </span>
                ))}
              {property.amenities.length > 2 && (
                <span className="text-gray-500 text-xs">
                  +{property.amenities.length - 2} tiện ích
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCardItem;
