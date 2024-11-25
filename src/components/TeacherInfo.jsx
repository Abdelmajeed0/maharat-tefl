import teacherImg from "../assets/svg/teacher.svg";

export default function TeacherInfo() {
  return (
    <div className="flex flex-col lg:flex-row items-center p-8 lg:p-12 rounded-lg  max-w-7xl mx-auto  space-x-[18.5px]">
      {/* Profile Image Section */}
      <div>
        <img src={teacherImg} alt="Profile" className="w-full rounded-lg" />
      </div>

      {/* Text Content Section */}
      <div className="text-right flex-1">
        <span className="bg-red-300 text-white font-bold py-2 px-4 rounded inline-block -rotate-6 shadow-md">
          خبرائنا
        </span>
        <h1 className="text-xl lg:text-5xl font-bold text-gray-800 mb-12 mt-4">
          خبراء مهارة طفل
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-7 lg:leading-8 mb-6">
          بكالوريوس خدمه اجتماعيه دبلومه تربوية من جامعه المنيا كورس تخاطب من
          جامعه المنيا دبلومه تخاطب 300ساعه من جامعه عين شمس دبلومه توحد من
          جامعه عين شمس كورس علاج وظيفي محتوي دبلومه مع دكتوره بوسي حنفي
          بكالوريوس خدمه اجتماعيه دبلومه تربوية من جامعه المنيا كورس تخاطب من
          جامعه المنيا دبلومه تخاطب 300ساعه من جامعه عين شمس دبلومه توحد من
          جامعه عين شمس كورس علاج وظيفي محتوي دبلومه مع دكتوره بوسي حنفي
          Oralmotor course بكالوريوس خدمه اجتماعيه دبلومه تربوية من جامعه المنيا
          كورس تخاطب من جامعه المنيا دبلومه تخاطب 300ساعه من جامعه عين شمس
          دبلومه توحد من جامعه عين شمس كورس علاج وظيفي محتوي دبلومه مع دكتوره
          بوسي حنفي Oralmotor course Oralmotor course
        </p>
      </div>
    </div>
  );
}
