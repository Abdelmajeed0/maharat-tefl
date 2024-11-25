import raghyImage from "../assets/payment/raghy.svg";
import snbImage from "../assets/payment/snb.svg";
import riyadImage from "../assets/payment/riyad.svg";
import alinmaImage from "../assets/payment/alinma.svg";
import visaImage from "../assets/payment/visa.svg";
import vdfImage from "../assets/payment/vdf.svg";
import paypalImage from "../assets/payment/paypal.svg";
import fawryImage from "../assets/payment/fawry.svg";

import Test from "../assets/svg/Test.jsx";
const PaymentForm = () => {
  const sessions = [1, 10, "جلسة\nمجانية", 12];

  return (
    <div className="mb-[42px] mt-[30px] py-[53px] px-[48px] bg-white mx-auto border border-[#9DCBDB] shadow-md rounded-md w-[80%]">
      {/* input and choose number of sessions */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 lg:gap-[160px] mb-20">
        {/* Choose Number of Sessions */}
        <div className="w-full lg:w-[50%] max-lg:order-2">
          <h3 className="text-right text-xl font-bold mb-4">
            اختر عدد الجلسات
          </h3>
          <div>
            <ul className="flex flex-wrap xl:flex-nowrap justify-center lg:justify-start gap-4 lg:gap-[23.5px]">
              {sessions.map((num, index) => (
                <li key={index}>
                  <button className="flex items-center justify-center">
                    <Test num={num} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* client data */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[50%] max-lg:order-1">
          {/* Form Title */}
          <h1 className="text-lg font-bold text-right w-full max-w-sm mb-4">
            ادخل بياناتك
          </h1>

          {/* Form */}
          <form className="w-full max-w-sm flex flex-col gap-4">
            {/* Mobile Number Input */}
            <div className="relative">
              <input
                type="tel"
                className="block w-full px-4 py-3 text-right text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9DCBDB] focus:border-[#9DCBDB]"
                placeholder="رقم الجوال"
                required
              />
              <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-red-500 text-sm">
                +20
              </span>
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                className="block w-full px-4 py-3 text-right text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9DCBDB] focus:border-[#9DCBDB]"
                placeholder="البريد الالكتروني"
                required
              />
            </div>
          </form>
        </div>
      </div>
      {/* Payment Methods */}
      <div className="flex text-right flex-col mt-8">
        <h3 className="text-lg font-bold mb-4">اختر وسيلة الدفع</h3>
        <div>
          <ul className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-7">
            <li>
              <button>
                <img src={raghyImage} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={snbImage} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={riyadImage} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={alinmaImage} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={visaImage} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={vdfImage} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={paypalImage} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={fawryImage} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* confirmation and Total Price*/}
      <div className="flex justify-between mt-14 max-md:flex-col max-md:items-center max-md:justify-center">
        <div className="w-[50%] max-md:w-[100%] max-md:mx-auto max-md:text-center max-md:order-2">
          <button className="bg-[#9DCBDB] px-[30%] py-2 border-[3px] border-[#9DCBDB] rounded-full text-white hover:bg-white hover:text-[#9DCBDB]">
            تأكيد الحجز
          </button>
        </div>
        <div className="flex gap-3 w-[50%] max-md:w-[100%]  md:justify-end max-md:justify-center text-xl max-md:order-1 max-md:mb-4">
          <span className="font-bold text-xl">400 ج.م</span>
          <p>: الاجمالي</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
