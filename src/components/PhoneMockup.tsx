import React from "react";

interface PhoneMockupProps {
  className?: string;
  videoSrc?: string;
  poster?: string;
  children?: React.ReactNode;
  showBorder?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  className = "",
  videoSrc,
  poster,
  children,
  showBorder = true,
}) => {
  return (
    <div
      className={`relative w-[300px] ${videoSrc ? "h-[526px]" : "h-[600px]"} bg-gray-900 rounded-[3rem] ${
        showBorder ? "border-8 border-gray-800" : ""
      } shadow-2xl overflow-hidden ${className}`}
    >
      {/* Notch / Dynamic Island */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-gray-800 rounded-b-xl z-20 pointer-events-none"></div>

      {videoSrc ? (
        <div className="relative w-full h-full bg-[#f9f9f9] overflow-hidden flex items-center justify-center p-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="w-full h-full object-cover scale-[1.02] bg-[#f9f9f9]"
          >
            <source
              src={videoSrc.endsWith(".mov") ? videoSrc.replace(/\.mov$/, ".mp4") : videoSrc}
              type="video/mp4"
            />
            <source
              src={videoSrc.endsWith(".mp4") ? videoSrc.replace(/\.mp4$/, ".mov") : videoSrc}
              type="video/quicktime"
            />
          </video>
          {/* Home indicator bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-400/80 rounded-full z-20 pointer-events-none shadow-xs"></div>
        </div>
      ) : children ? (
        <div className="relative w-full h-full bg-bg-main overflow-hidden">
          {children}
        </div>
      ) : (
        <div className="w-full h-full bg-bg-main pt-12 px-4 pb-4 flex flex-col">
          <div className="w-8 h-8 rounded bg-accent mb-6 self-start"></div>
          <div className="w-32 h-6 bg-gray-200 rounded mb-2"></div>
          <div className="w-48 h-4 bg-gray-200 rounded mb-8"></div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100"></div>
              <div className="flex-1 space-y-2">
                <div className="w-24 h-3 bg-gray-200 rounded"></div>
                <div className="w-full h-2 bg-gray-100 rounded"></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100"></div>
              <div className="flex-1 space-y-2">
                <div className="w-24 h-3 bg-gray-200 rounded"></div>
                <div className="w-full h-2 bg-gray-100 rounded"></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-3 opacity-50">
              <div className="w-10 h-10 rounded-full bg-orange-100"></div>
              <div className="flex-1 space-y-2">
                <div className="w-24 h-3 bg-gray-200 rounded"></div>
                <div className="w-full h-2 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

          <div className="mt-auto mx-auto w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
      )}
    </div>
  );
};
