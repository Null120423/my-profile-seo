import { Home } from "lucide-react";

export default function LoadingView() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-secondary-100 to-secondary-300">
      <div className="flex flex-col items-center">
        <div className="relative mb-4 w-20 h-20 flex items-center justify-center">
          {/* Spinning circle */}
          <span
            className="absolute inset-0 rounded-full border-4 border-secondary-800 border-t-secondary-800 animate-spin"
            style={{
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />
          {/* Static home icon */}
          <Home className="w-12 h-12 text-secondary-500 drop-shadow-lg z-10" />
        </div>
        <div className="text-lg font-semibold text-secondary-700">
          Đang tải...
        </div>
      </div>
    </div>
  );
}
