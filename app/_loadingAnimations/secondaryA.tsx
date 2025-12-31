export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="text-center px-4">
        <div className="animate-spin h-16 w-16 rounded-full border-4 border-blue-600 border-t-transparent mx-auto mb-6"></div>

        <h2 className="text-2xl font-semibold text-blue-900">
          Secondary Education
        </h2>

        <p className="mt-3 text-sm font-medium text-blue-600">
          Loading educational resources and schemes
        </p>

        <div className="mt-8 w-48 mx-auto h-1 bg-blue-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 animate-pulse w-2/3"></div>
        </div>
      </div>
    </div>
  );
}
