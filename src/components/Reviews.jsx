import { Star } from "lucide-react";
import rating from "../assets/svg/rating.svg";
export default function Reviews() {
  return (
    <div className="pb-7">
      <div className="mb-[42px] pt-[53px] pb-[100px] px-[48px] bg-white mx-auto border border-[#9DCBDB] shadow-md rounded-md w-[80%] max-sm:w-[95%] max-sm:px-4 max-sm:py-6 ">
        <h2 className="text-right font-bold text-2xl mb-6">اراء المراجعين</h2>

        {/* Reviews And Submit Reviews */}
        <div className="flex items-start gap-6 max-lg:flex-col">
          {/* Stars and Submit Review */}
          <div className="w-[90%] max-lg:w-full max-lg:order-2">
            {/* Stars */}
            <div className="flex justify-end mr-6 max-sm:mr-0 max-lg:justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-12 h-11 text-yellow-400 fill-current max-sm:w-8 max-sm:h-8"
                />
              ))}
            </div>
            {/* Submit Review */}
            <div className="w-[100%] flex gap-6 mt-4 max-lg:flex-col max-sm:gap-4">
              <div className="w-[50%] max-lg:w-full">
                <textarea
                  name=""
                  rows="4"
                  cols="20"
                  id=""
                  className="px-2 py-2 text-right text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DCBDB] focus:border-[#9DCBDB] w-[100%]"
                  placeholder="تعليقك"
                ></textarea>
              </div>
              <div className="w-[50%] flex flex-col max-lg:w-full">
                <input
                  type="text"
                  className="px-3 py-2 text-right text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9DCBDB] focus:border-[#9DCBDB] mb-7 max-sm:mb-4"
                  placeholder="الاسم"
                />
                <input
                  type="email"
                  className="px-3 py-2 text-right text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9DCBDB] focus:border-[#9DCBDB]"
                  placeholder="البريد الالكتروني"
                />
              </div>
            </div>
            {/* Reviews */}
            <div className="mt-20 relative w-[100%] mb-8">
              <div className="after:content-['❞'] after:text-[150px] after:opacity-[.1] after:absolute after:top-[-120px] after:right-0 before:content-['❝'] before:text-[150px] before:opacity-[.1] before:absolute before:top-[0px] before:left-0 max-sm:after:text-[100px] max-sm:before:text-[100px] max-sm:after:top-[-80px] max-sm:before:top-[-10px]">
                <p className="mb-4 text-right text-sm max-sm:text-xs">
                  اشتركت في جلسات التخاطب الاونلاين من خلال الموقع و يوجد تحسن
                  كبير في حالة طفلى و صارت تحكى كلمات و جمل واضحة بالتوفيق لكم و
                  شكرا لكم
                </p>
                <p className="flex gap-4 justify-end items-center max-sm:gap-2">
                  <span className="text-xs">12/12/2023 12:00</span>
                  <span className="inline-flex items-center text-xs">
                    <span className="font-bold">5.0</span>
                    {[...Array(1)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-10 text-yellow-400 fill-current max-sm:w-6"
                      />
                    ))}
                  </span>
                  <span className="font-bold text-xs">ريتال أحمد</span>
                </p>
              </div>
            </div>
            <div className="mt-20 relative w-[100%]">
              <div className="after:content-['❞'] after:text-[150px] after:opacity-[.1] after:absolute after:top-[-120px] after:right-0 before:content-['❝'] before:text-[150px] before:opacity-[.1] before:absolute before:top-[0px] before:left-0 max-sm:after:text-[100px] max-sm:before:text-[100px] max-sm:after:top-[-80px] max-sm:before:top-[-10px]">
                <p className="mb-4 text-right text-sm max-sm:text-xs">
                  اشتركت في جلسات التخاطب الاونلاين من خلال الموقع و يوجد تحسن
                  كبير في حالة طفلى و صارت تحكى كلمات و جمل واضحة بالتوفيق لكم و
                  شكرا لكم
                </p>
                <p className="flex gap-4 justify-end items-center max-sm:gap-2">
                  <span className="text-xs">12/12/2023 12:00</span>
                  <span className="inline-flex items-center text-xs">
                    <span className="font-bold">5.0</span>
                    {[...Array(1)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-10 text-yellow-400 fill-current max-sm:w-6"
                      />
                    ))}
                  </span>
                  <span className="font-bold text-xs">ريتال أحمد</span>
                </p>
              </div>
            </div>
            <div className="mt-20 relative w-[100%]">
              <div className="after:content-['❞'] after:text-[150px] after:opacity-[.1] after:absolute after:top-[-120px] after:right-0 before:content-['❝'] before:text-[150px] before:opacity-[.1] before:absolute before:top-[0px] before:left-0 max-sm:after:text-[100px] max-sm:before:text-[100px] max-sm:after:top-[-80px] max-sm:before:top-[-10px]">
                <p className="mb-4 text-right text-sm max-sm:text-xs">
                  اشتركت في جلسات التخاطب الاونلاين من خلال الموقع و يوجد تحسن
                  كبير في حالة طفلى و صارت تحكى كلمات و جمل واضحة بالتوفيق لكم و
                  شكرا لكم
                </p>
                <p className="flex gap-4 justify-end items-center max-sm:gap-2">
                  <span className="text-xs">12/12/2023 12:00</span>
                  <span className="inline-flex items-center text-xs">
                    <span className="font-bold">5.0</span>
                    {[...Array(1)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-10 text-yellow-400 fill-current max-sm:w-6"
                      />
                    ))}
                  </span>
                  <span className="font-bold text-xs">ريتال أحمد</span>
                </p>
              </div>
            </div>
          </div>

          {/* Rating Review */}
          <div className="w-[10%] max-lg:w-full  max-lg:order-1 max-lg:text-center flex items-start max-sm:mt-4">
            <div className="max-lg:flex max-lg:justify-center max-lg:w-full">
              <img src={rating} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
