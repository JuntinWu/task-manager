const TailwindTest = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-100 to-gray-100 min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          ✅ Tailwind CSS is Working!
        </h1>
        <div className="space-y-4">
          <div className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-center font-semibold">
            Primary Button
          </div>
          <div className="bg-pink-500 text-white px-4 py-2 rounded-lg text-center font-semibold">
            Secondary Button
          </div>
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center font-semibold">
            Success Button
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-red-200 h-12 rounded"></div>
            <div className="bg-yellow-200 h-12 rounded"></div>
            <div className="bg-blue-200 h-12 rounded"></div>
          </div>
          <p className="text-gray-600 text-sm text-center mt-4">
            Tailwind CSS utilities are working correctly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
