export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="text-center px-4">
        <div className="animate-spin h-16 w-16 rounded-full border-4 border-emerald-600 border-t-transparent mx-auto mb-6"></div>

        <h2 className="text-2xl font-semibold text-emerald-900">
          Farmer Welfare
        </h2>

        <p className="mt-3 text-sm font-medium text-emerald-600">
          Loading agricultural schemes and benefits
        </p>

        <div className="mt-8 w-48 mx-auto h-1 bg-emerald-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-600 animate-pulse w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
