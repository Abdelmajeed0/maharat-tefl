import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/svg/logo.svg";
import raghyImage from "../assets/payment/raghy.svg";
import snbImage from "../assets/payment/snb.svg";
import riyadImage from "../assets/payment/riyad.svg";
import alinmaImage from "../assets/payment/alinma.svg";
import visaImage from "../assets/payment/visa.svg";
import vdfImage from "../assets/payment/vdf.svg";
import paypalImage from "../assets/payment/paypal.svg";
import fawryImage from "../assets/payment/fawry.svg";

export default function Footer() {
  return (
    <footer className="mb-[42px] pt-[20px] pb-[20px] px-[48px] bg-white mx-auto w-[90%] max-sm:w-[95%] max-sm:px-4 max-sm:py-6">
      <div>
        {/* Social Media Links */}
        <div className="flex gap-4 mb-6 max-lg:w-full max-lg:justify-center max-sm:gap-2">
          <a href="#">
            <FaFacebookF
              color="#9DCBDB"
              className="w-6 h-6 max-sm:w-5 max-sm:h-5"
            />
          </a>
          <a href="#">
            <IoLogoWhatsapp
              color="#9DCBDB"
              className="w-6 h-6 max-sm:w-5 max-sm:h-5"
            />
          </a>
          <a href="#">
            <ImInstagram
              color="#9DCBDB"
              className="w-6 h-6 max-sm:w-5 max-sm:h-5"
            />
          </a>
          <a href="#">
            <FaTwitter
              color="#9DCBDB"
              className="w-6 h-6 max-sm:w-5 max-sm:h-5"
            />
          </a>
        </div>
        {/* All Links */}
        <div className="flex max-lg:flex-col justify-center items-center gap-24 mb-6 max-lg:gap-12 max-sm:gap-6">
          <nav className="w-[70%] max-lg:w-full max-lg:order-2 max-sm:text-center">
            <ul className="flex justify-between max-sm:flex-wrap max-sm:gap-2">
              <li>
                <a href="" className="block">
                  الشروط و الاحكام
                </a>
              </li>
              <li>
                <a href="" className="block">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="" className="block">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="" className="block">
                  اراء العملاء
                </a>
              </li>
              <li>
                <a href="" className="block">
                  الباقات
                </a>
              </li>
              <li>
                <a href="" className="block">
                  خبرائنا
                </a>
              </li>
              <li>
                <a href="" className="block">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="" className="block">
                  عن مهارة
                </a>
              </li>
            </ul>
          </nav>
          <div className="w-[30%] max-lg:order-1 max-lg:w-[40%] max-lg:items-center max-sm:w-[50%]">
            <img
              className="h-full md:h-12 lg:h-16 bg-transparent w-full"
              src={logo}
              alt="لولجو موقع مهارة طفل"
            />
          </div>
        </div>
        {/* Payment Methods */}
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4">
          <div>
            <ul className="flex lg:justify-end gap-4 lg:gap-7 max-sm:justify-center max-sm:flex-wrap max-sm:gap-3">
              <li>
                <a href="#">
                  <img
                    src={raghyImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={snbImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={riyadImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={alinmaImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={visaImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={vdfImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={paypalImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={fawryImage}
                    className="w-13 h-13 max-sm:w-10 max-sm:h-10"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="max-sm:text-center">
            <p className="text-sm">جميع الحقوق محفوظة لدى مهارة طفل 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
