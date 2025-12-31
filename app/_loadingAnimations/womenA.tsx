export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="text-center px-4">
        <div className="animate-spin h-16 w-16 rounded-full border-4 border-rose-600 border-t-transparent mx-auto mb-6"></div>

        <h2 className="text-2xl font-semibold text-rose-900">
          Women Welfare
        </h2>

        <p className="mt-3 text-sm font-medium text-rose-600">
          Loading welfare schemes and resources
        </p>

        <div className="mt-8 w-48 mx-auto h-1 bg-rose-100 rounded-full overflow-hidden">
          <div className="h-full bg-rose-600 animate-pulse w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
