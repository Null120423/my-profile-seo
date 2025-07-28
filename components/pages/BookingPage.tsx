"use client";

import { USER_DATA } from "@/lib/data";
import { addDays, format, isSameDay } from "date-fns";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { PropertyCard } from "../ui/PropertyCard";
import PropertyListItem from "../ui/PropertyListItem";
import TransitionLink from "../ui/TransitionLink";

// Tạo danh sách ngày từ hôm nay đến 14 ngày tới
const getAvailableDates = (days = 14) => {
  const today = new Date();
  return Array.from({ length: days }, (_, i) => addDays(today, i));
};

// Tạo danh sách giờ hành chính (8:00 - 17:00, mỗi 30 phút)
const getWorkingHours = () => {
  const slots: { time: string; available: boolean }[] = [];
  for (let h = 8; h <= 17; h++) {
    for (let m of [0, 30]) {
      if (h === 17 && m > 0) continue;
      const hour = h.toString().padStart(2, "0");
      const minute = m.toString().padStart(2, "0");
      slots.push({ time: `${hour}:${minute}`, available: true });
    }
  }
  return slots;
};

export default function BookingPage({
  content,
  property,
}: {
  content: string;
  property: PropertyCard | null;
}) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    apartmentType: "2-bedroom",
    notes: content || "",
  });
  const [availableDates] = useState(getAvailableDates(14));
  const [workingHours] = useState(getWorkingHours());

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 3) {
      // Final step - submit the booking
      setIsSubmitting(true);
      setSubmitError("");

      try {
        const bookingData = {
          ...formData,
          selectedDate,
          selectedTime,
          selectedProject: property?.id || null,
          priority: property?.id ? "high" : "normal",
        };

        const response = await fetch("/api/booking", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        });

        const result = await response.json();

        if (result.success) {
          setStep(4); // Go to success step
        } else {
          setSubmitError(result.error || "Có lỗi xảy ra khi đặt lịch");
        }
      } catch (error) {
        console.error("Booking submission error:", error);
        setSubmitError("Không thể kết nối đến server. Vui lòng thử lại.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  const verifyDataStepOne = () => {
    if (!formData.fullName || !formData.phone) {
      setSubmitError("Họ và tên và số điện thoại là bắt buộc.");
      return false;
    }
    // valid email format and phone number
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError("Email không hợp lệ.");
      return false;
    }
    if (formData.phone && !/^\d{10,11}$/.test(formData.phone)) {
      setSubmitError("Số điện thoại không hợp lệ.");
      return false;
    }
    setSubmitError("");
    return true;
  };

  const goToNextStep = async () => {
    if (step === 1 && !verifyDataStepOne()) {
      return;
    }
    if (step === 1 && !property) {
      // Skip project selection if no property is passed
      setStep(3);
      return;
    }

    if (step === 3) {
      // Submit the booking when on the final form step
      await handleSubmit(new Event("submit") as any);
      return;
    }

    if (step < 4) setStep(step + 1);
  };

  const goToPrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Bước 1: Nhập thông tin cá nhân
  const renderStep1 = () => (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-slate-900 mb-6">
        Thông tin khách hàng
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Họ và tên *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số điện thoại *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            placeholder="Nhập email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Địa chỉ hiện tại
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            placeholder="Nhập địa chỉ hiện tại"
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ghi chú thêm
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
          placeholder="Yêu cầu đặc biệt hoặc câu hỏi..."
        />
      </div>
    </div>
  );

  // Bước 2: Chọn dự án
  const renderStep2 = () => (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold text-slate-900 mb-6">
        Dự án bạn quan tâm
      </h3>
      {property != null && <PropertyListItem property={property} />}
    </div>
  );

  // Bước 3: Chọn ngày giờ
  const renderStep3 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Chọn ngày hẹn tư vấn
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {availableDates.map((date) => {
            const dateStr = format(date, "yyyy-MM-dd");
            return (
              <button
                key={dateStr}
                onClick={() => setSelectedDate(dateStr)}
                className={`p-4 rounded-lg border-2 text-center transition-all duration-300 ${
                  selectedDate === dateStr
                    ? "border-secondary-500 bg-secondary-50 text-secondary-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="font-semibold">
                  {format(date, "EEE", { locale: undefined })}
                </div>
                <div className="text-sm text-gray-600">
                  {format(date, "dd/MM")}
                </div>
                {isSameDay(date, new Date()) && (
                  <div className="text-xs text-primary-500 font-medium">
                    Hôm nay
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Chọn giờ hẹn tư vấn
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {workingHours.map((slot) => (
            <button
              key={slot.time}
              onClick={() => setSelectedTime(slot.time)}
              className={`p-3 rounded-lg border-2 text-center transition-all duration-300 ${
                selectedTime === slot.time
                  ? "border-secondary-500 bg-secondary-50 text-secondary-700"
                  : " text-black bg-white hover:border-secondary-500"
              }`}
            >
              <Clock className="w-4 h-4 mx-auto mb-1" />
              <div className="font-medium">{slot.time}</div>
            </button>
          ))}
        </div>
      </div>
      {property != null && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary-600 mt-1" />
            <div>
              <h4 className="font-semibold text-primary-900 mb-2">
                Địa điểm tư vấn
              </h4>
              <p className="text-primary-800">
                {property?.name}
                <br />
                {property?.address}
                <br />
                Nhà mẫu tầng trệt, tòa A
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Bước 4: Hoàn thành đăng ký tư vấn
  const renderStep4 = () => (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Đăng ký tư vấn thành công!
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-md">
        Cảm ơn bạn đã đăng ký hẹn tư vấn tại{" "}
        {property && (
          <span className="font-semibold text-secondary-600">
            {property?.name}
          </span>
        )}
        . Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận
        thông tin và hỗ trợ thêm nếu cần.
      </p>
      <div className="bg-white border border-gray-200 rounded-lg p-6 mt-4 w-full max-w-lg">
        <h4 className="font-semibold text-slate-900 mb-4">
          Thông tin đăng ký tư vấn
        </h4>
        <div className="space-y-2 text-sm">
          {property && (
            <div>
              <span className="text-gray-600">Dự án: </span>
              <span className="font-medium">{property?.name}</span>
            </div>
          )}
          <div>
            <span className="text-gray-600">Ngày hẹn: </span>
            <span className="font-medium">
              {selectedDate
                ? new Date(selectedDate).toLocaleDateString("vi-VN")
                : ""}
            </span>
          </div>
          <div>
            <span className="text-gray-600">Giờ hẹn: </span>
            <span className="font-medium">{selectedTime}</span>
          </div>
          <div>
            <span className="text-gray-600">Khách hàng: </span>
            <span className="font-medium">{formData.fullName}</span>
          </div>
          <div>
            <span className="text-gray-600">Số điện thoại: </span>
            <span className="font-medium">{formData.phone}</span>
          </div>
          <div>
            <span className="text-gray-600">Email: </span>
            <span className="font-medium">{formData.email}</span>
          </div>
        </div>
      </div>
      <TransitionLink
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-secondary-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-secondary-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Quay lại trang chủ
      </TransitionLink>
    </div>
  );

  return (
    <section className="py-20  pt-32">
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Back Button */}
        {step < 4 && (
          <TransitionLink
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-secondary-600 mb-8 transition-colors animate-fade-in"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại dự án</span>
          </TransitionLink>
        )}

        {/* Header */}
        <div className="text-center animate-slide-up mb-2">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Đặt lịch tư vấn
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Đăng ký lịch xem nhà mẫu nhanh chóng, nhận ưu đãi hấp dẫn
          </p>
        </div>

        {/* Progress Steps */}
        {step < (property ? 4 : 3) && (
          <>
            {/* Progress Bar */}
            <div className="flex items-center justify-center mb-6 animate-fade-in-delay">
              <div className="relative flex items-center w-full max-w-xl mx-auto">
                {(property ? [1, 2, 3, 4] : [1, 3, 4]).map(
                  (stepNumber, idx, arr) => {
                    const isActive = step === stepNumber;
                    const isCompleted = step > stepNumber;
                    const showStep = property
                      ? stepNumber
                      : stepNumber === 3
                      ? 2
                      : stepNumber;
                    return (
                      <React.Fragment key={stepNumber}>
                        <div className="flex flex-col items-center flex-1">
                          <div
                            className={`flex items-center justify-center w-12 h-12 rounded-full border-2 shadow transition-all duration-300 ${
                              isActive
                                ? "bg-secondary-500 border-secondary-500 text-white scale-110"
                                : isCompleted
                                ? "bg-green-500 border-green-500 text-white"
                                : "bg-white border-gray-300 text-gray-400"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle className="w-6 h-6" />
                            ) : (
                              <span className="font-bold text-lg">
                                {showStep}
                              </span>
                            )}
                          </div>
                          {/* Step label below icon */}
                          <span
                            className={`mt-2 text-xs text-center font-medium transition-colors duration-300 ${
                              isActive
                                ? "text-secondary-600"
                                : isCompleted
                                ? "text-green-600"
                                : "text-gray-400"
                            }`}
                          >
                            {property
                              ? [
                                  "Thông tin",
                                  "Dự án",
                                  "Thời gian",
                                  "Hoàn thành",
                                ][idx]
                              : ["Thông tin", "Thời gian", "Hoàn thành"][idx]}
                          </span>
                        </div>
                        {/* Progress line */}
                        {idx < arr.length - 1 && (
                          <div
                            className={`flex-1 h-2 mx-2 rounded transition-all duration-300 ${
                              step > stepNumber
                                ? "bg-secondary-500"
                                : "bg-gray-200"
                            }`}
                          />
                        )}
                      </React.Fragment>
                    );
                  }
                )}
              </div>
            </div>
          </>
        )}

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up">
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{submitError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover: transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại
                  </button>
                )}
                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={
                    isSubmitting ||
                    (step === 1 && (!formData.fullName || !formData.phone)) ||
                    (step === 2 && !property) ||
                    (step === 3 && (!selectedDate || !selectedTime))
                  }
                  className="ml-auto flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Đang xử lý...
                    </>
                  ) : step === 3 ? (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Xác nhận đăng ký
                    </>
                  ) : (
                    "Tiếp tục"
                  )}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Contact Support */}
        {step < 4 && (
          <div className="mt-12 text-center animate-fade-in-delay">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Cần hỗ trợ?
              </h3>
              <p className="text-gray-600 mb-4">
                Liên hệ với chúng tôi để được tư vấn chi tiết
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${USER_DATA.phoneNumber}`}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {USER_DATA.phoneNumber}
                </a>
                <a
                  href={`mailto:${USER_DATA.email}`}
                  className="btn-primary flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {USER_DATA.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
