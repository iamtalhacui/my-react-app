export default function EducationCard() {
  return (
    <div className="max-w-xl  bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-200 
                    transition-transform transform hover:-translate-y-1 
                    bg-gradient-to-br from-white to-gray-50 mt-5  ">
      <div className="flex items-center gap-4">
 
        <div className="p-3 bg-blue-100 rounded-full shadow-md">
          🎓
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-gray-800">
            Bachelor of Science in Software Engineering
          </h2>
          <p className="text-gray-600">
            COMSATS Abbottabad
          </p>
          <p className="text-sm text-gray-500">
            2023 - Present
          </p>
        </div>
      </div>
    </div>
  );
}
