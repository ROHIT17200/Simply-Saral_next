// components/CategoryLoading.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function CategoryLoading() {
  const pathname = usePathname();

  const getCategory = () => {
    if (pathname?.includes('women_welfare')) return 'women';
    if (pathname?.includes('farmer')) return 'farmer';
    if (pathname?.includes('higher_education')) return 'primary';
    if (pathname?.includes('secondary_education')) return 'secondary';
    return 'default';
  };

  const category = getCategory();

  const categoryConfig = {
    women: {
      bg: 'bg-gradient-to-br from-rose-50 via-white to-pink-50',
      accentColor: 'bg-rose-600',
      ringColor: 'ring-rose-100',
      textColor: 'text-rose-900',
      subtextColor: 'text-rose-600',
      barColor: 'bg-rose-600',
      title: 'Women Welfare',
      subtitle: 'Loading welfare schemes and resources',
    },
    farmer: {
      bg: 'bg-gradient-to-br from-emerald-50 via-white to-green-50',
      accentColor: 'bg-emerald-600',
      ringColor: 'ring-emerald-100',
      textColor: 'text-emerald-900',
      subtextColor: 'text-emerald-600',
      barColor: 'bg-emerald-600',
      title: 'Farmer Welfare',
      subtitle: 'Loading agricultural schemes and benefits',
    },
    primary: {
      bg: 'bg-gradient-to-br from-amber-50 via-white to-yellow-50',
      accentColor: 'bg-amber-600',
      ringColor: 'ring-amber-100',
      textColor: 'text-amber-900',
      subtextColor: 'text-amber-600',
      barColor: 'bg-amber-600',
      title: 'Higher Education',
      subtitle: 'Loading education schemes and programs',
    },
    secondary: {
      bg: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
      accentColor: 'bg-blue-600',
      ringColor: 'ring-blue-100',
      textColor: 'text-blue-900',
      subtextColor: 'text-blue-600',
      barColor: 'bg-blue-600',
      title: 'Secondary Education',
      subtitle: 'Loading educational resources and schemes',
    },
    default: {
      bg: 'bg-gradient-to-br from-indigo-50 via-white to-blue-50',
      accentColor: 'bg-indigo-600',
      ringColor: 'ring-indigo-100',
      textColor: 'text-indigo-900',
      subtextColor: 'text-indigo-600',
      barColor: 'bg-indigo-600',
      title: 'Loading Content',
      subtitle: 'Preparing information for you...',
    },
  };

  const config = categoryConfig[category];

  return (
    <div className={`min-h-screen flex items-center justify-center ${config.bg}`}>
      <div className="text-center px-4">
        {/* Modern spinner with subtle ring */}
        <div className="relative inline-flex mb-8">
          <div className={`absolute inset-0 rounded-full ${config.ringColor} ring-8 opacity-20`}></div>
          <div className="relative">
            <svg className="animate-spin h-16 w-16" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                style={{ color: config.subtextColor.replace('text-', '#') }}
              />
              <path
                className={config.subtextColor}
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h2 className={`text-2xl font-semibold ${config.textColor} tracking-tight`}>
          {config.title}
        </h2>
        
        {/* Subtitle */}
        <p className={`mt-3 text-sm ${config.subtextColor} font-medium`}>
          {config.subtitle}
        </p>
        
        {/* Progress bar */}
        <div className="mt-8 w-48 mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-full ${config.barColor} rounded-full animate-pulse`} style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}