"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import logo from "../app/assets/footerLogo.svg";
import footer1 from "../app/assets/footer1.svg";
import footer2 from "../app/assets/footer2.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center gap-[10px] sm:gap-[90px] lg:gap-[120px] 2xl:gap-[180px]">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-end justify-between gap-5 sm:gap-3 w-[80%] mx-auto">
          <div className="flex flex-col gap-4 sm:gap-8">
            <div className="flex space-x-4 items-center">
              <a
                href="https://github.com/trigg3rX"
                className="hover:text-gray-300"
                title="Github"
                target="blank"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-white transition-colors duration-300 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                >
                  <path
                    d="M24 4C21.3736 4 18.7728 4.51732 16.3463 5.52241C13.9198 6.5275 11.715 8.00069 9.85786 9.85786C6.10714 13.6086 4 18.6957 4 24C4 32.84 9.74 40.34 17.68 43C18.68 43.16 19 42.54 19 42V38.62C13.46 39.82 12.28 35.94 12.28 35.94C11.36 33.62 10.06 33 10.06 33C8.24 31.76 10.2 31.8 10.2 31.8C12.2 31.94 13.26 33.86 13.26 33.86C15 36.9 17.94 36 19.08 35.52C19.26 34.22 19.78 33.34 20.34 32.84C15.9 32.34 11.24 30.62 11.24 23C11.24 20.78 12 19 13.3 17.58C13.1 17.08 12.4 15 13.5 12.3C13.5 12.3 15.18 11.76 19 14.34C20.58 13.9 22.3 13.68 24 13.68C25.7 13.68 27.42 13.9 29 14.34C32.82 11.76 34.5 12.3 34.5 12.3C35.6 15 34.9 17.08 34.7 17.58C36 19 36.76 20.78 36.76 23C36.76 30.64 32.08 32.32 27.62 32.82C28.34 33.44 29 34.66 29 36.52V42C29 42.54 29.32 43.18 30.34 43C38.28 40.32 44 32.84 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4Z"
                    stroke="white"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/TriggerXnetwork"
                className="hover:text-gray-300"
                title="Twitter"
                target="blank"
              >
                <svg
                  width="40"
                  height="45"
                  viewBox="0 0 40 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-white transition-colors duration-300 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                >
                  <path
                    d="M5.6075 2.80273C2.51461 2.80273 0 5.31735 0 8.41023V36.4477C0 39.5406 2.51461 42.0552 5.6075 42.0552H33.645C36.7379 42.0552 39.2525 39.5406 39.2525 36.4477V8.41023C39.2525 5.31735 36.7379 2.80273 33.645 2.80273H5.6075ZM31.6386 10.1626L22.5439 20.554L33.242 34.6954H24.8658L18.312 26.1177L10.8032 34.6954H6.64138L16.3669 23.5768L6.10692 10.1626H14.6934L20.6251 18.0043L27.4767 10.1626H31.6386ZM28.3266 32.2071L13.4405 12.5195H10.9609L26.0135 32.2071H28.3179H28.3266Z"
                    stroke="white"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/+RDAFhnPrPa1kOWRl"
                className="hover:text-gray-300"
                title="Telegram"
                target="blank"
              >
                <svg
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:fill-white transition-colors duration-300 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                >
                  <path
                    d="M30.061 34.1847L30.0697 34.163L30.0742 34.14L34.3672 12.2115L34.3718 12.1877V12.1635C34.3718 11.7361 34.2225 11.4276 33.9501 11.2473C33.6958 11.0791 33.3809 11.0551 33.1117 11.0755C32.8365 11.0965 32.5679 11.1672 32.3727 11.2301C32.274 11.2618 32.1916 11.2924 32.1335 11.3152C32.1043 11.3266 32.0812 11.3362 32.065 11.343L32.0459 11.3511L32.0433 11.3522L7.93882 20.9293L7.93827 20.9295L7.92691 20.9336C7.91694 20.9373 7.90299 20.9426 7.88564 20.9494C7.85099 20.9631 7.80254 20.9832 7.74509 21.0096C7.63102 21.0621 7.47741 21.1413 7.32485 21.2473C7.03808 21.4465 6.6652 21.8054 6.7297 22.319C6.78612 22.789 7.10817 23.1104 7.37448 23.3018C7.51119 23.4 7.64369 23.4718 7.7417 23.519C7.79097 23.5427 7.83221 23.5605 7.86183 23.5727C7.87665 23.5788 7.88861 23.5835 7.89727 23.5868L7.90773 23.5908L7.91101 23.592L7.91214 23.5924L7.91258 23.5925L7.91277 23.5926C7.91285 23.5926 7.91293 23.5927 7.99709 23.3572L7.91292 23.5927L7.91648 23.5939L13.9802 25.6594L14.0945 25.6983L14.1961 25.633L28.7572 16.266L28.7577 16.2657L28.7626 16.2627L28.7855 16.2493C28.8058 16.2377 28.8352 16.2213 28.8705 16.2031C28.9429 16.1657 29.0325 16.1244 29.1161 16.0982C29.1442 16.0894 29.1672 16.0838 29.1856 16.0801L29.1821 16.1476C29.1786 16.1527 29.1748 16.1581 29.1706 16.1639C29.1329 16.2158 29.0688 16.2894 28.9628 16.3887L28.9614 16.39C28.74 16.6002 25.8837 19.2054 23.0778 21.7626C21.6759 23.0401 20.288 24.3044 19.2506 25.2493L17.9994 26.3888L17.6498 26.7071L17.6125 26.7412L17.4619 26.6057L17.4079 27.0892L16.6564 33.8145L16.6349 34.0069L16.8158 34.0759C16.9607 34.131 17.117 34.1489 17.2706 34.1279C17.4241 34.1069 17.5699 34.0477 17.6946 33.9556L17.7056 33.9475L17.7157 33.9382L21.4795 30.4639L27.4209 35.0814L27.4353 35.0926L27.4512 35.1015C27.6792 35.2306 27.9322 35.3094 28.1932 35.3326C28.4542 35.3558 28.7171 35.3229 28.9644 35.236C29.2116 35.1492 29.4373 35.0104 29.6265 34.8291C29.8156 34.6478 29.9638 34.4281 30.061 34.1847ZM10.3124 3.9998C13.9714 1.55494 18.2732 0.25 22.6738 0.25C25.5957 0.25 28.489 0.825513 31.1885 1.94368C33.888 3.06185 36.3409 4.70077 38.407 6.76687C40.4731 8.83297 42.112 11.2858 43.2301 13.9853C44.3483 16.6848 44.9238 19.5781 44.9238 22.5C44.9238 26.9006 43.6189 31.2024 41.174 34.8614C38.7292 38.5204 35.2542 41.3723 31.1885 43.0563C27.1229 44.7404 22.6491 45.181 18.3331 44.3225C14.017 43.4639 10.0524 41.3448 6.94071 38.2331C3.82899 35.1214 1.70989 31.1568 0.851366 26.8407C-0.00715525 22.5247 0.433469 18.0509 2.11752 13.9853C3.80157 9.91963 6.6534 6.44466 10.3124 3.9998Z"
                    stroke="white"
                  />
                </svg>
              </a>
              <a
                href="https://triggerx.gitbook.io/triggerx-docs"
                className="hover:text-gray-300"
                target="blank"
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                >
                  <rect
                    x="0.25"
                    y="0.25"
                    width="44.5"
                    height="44.5"
                    rx="22.25"
                    stroke="white"
                    // className="hover:fill-black transition-colors duration-300"
                  />
                  <path
                    d="M20.341 23.2008C21.6799 23.9728 22.349 24.3584 23.0847 24.3591C23.8204 24.3598 24.4895 23.975 25.8306 23.2052L34.3732 18.3004C34.5626 18.1917 34.72 18.0349 34.8295 17.8459C34.9389 17.6568 34.9966 17.4423 34.9966 17.2239C34.9966 17.0054 34.9389 16.7909 34.8295 16.6019C34.72 16.4129 34.5626 16.2561 34.3732 16.1473L25.8269 11.2403C24.488 10.4728 23.8189 10.0879 23.084 10.0879C22.349 10.0879 21.6807 10.4728 20.3425 11.2425L12.9952 15.4686L12.8879 15.5308C11.6549 16.2516 10.6304 17.2805 9.91505 18.5167C9.19971 19.7529 8.81806 21.1538 8.80756 22.582V22.8293C8.81821 24.2768 9.21015 25.6961 9.94389 26.944C10.6776 28.1919 11.7273 29.2244 12.9871 29.9375L17.5892 32.5916C20.2707 34.1385 21.6118 34.9119 23.0847 34.9119C24.5576 34.9126 25.8979 34.1399 28.5809 32.5953L33.4391 29.7976C34.7825 29.0242 35.4545 28.6378 35.8224 28.0006C36.1924 27.3626 36.1924 26.5884 36.1924 25.04V22.0477C36.1927 21.8396 36.1381 21.6351 36.0342 21.4549C35.9303 21.2746 35.7807 21.1249 35.6006 21.0208C35.4204 20.9168 35.216 20.862 35.0079 20.862C34.7999 20.8621 34.5955 20.9169 34.4154 21.0211L24.4532 26.7408C23.7849 27.1242 23.4511 27.3167 23.084 27.3167C22.7176 27.3167 22.383 27.125 21.7147 26.7416L14.9721 22.8759C14.6339 22.682 14.4651 22.585 14.3297 22.568C14.1793 22.5487 14.0268 22.5796 13.8957 22.6559C13.7647 22.7322 13.6625 22.8496 13.6051 22.9899C13.5533 23.1157 13.5548 23.3103 13.5562 23.6989C13.5585 23.9853 13.5592 24.1282 13.5858 24.2607C13.6458 24.5552 13.8005 24.8232 14.0277 25.0208C14.1291 25.1096 14.2534 25.1807 14.5014 25.3242L21.7103 29.4801C22.3808 29.8664 22.7161 30.0596 23.084 30.0596C23.4518 30.0596 23.7871 29.8672 24.4576 29.4808L33.2941 24.3932C33.5235 24.2614 33.6375 24.1955 33.7233 24.2451C33.8092 24.2947 33.8092 24.4265 33.8092 24.6907V26.0473C33.8092 26.4352 33.8092 26.6283 33.7167 26.7875C33.6249 26.9473 33.4569 27.0436 33.1209 27.2375L25.8328 31.434C24.4909 32.206 23.8204 32.5923 23.084 32.5916C22.3475 32.5908 21.6777 32.2045 20.3366 31.4311L13.5178 27.4965L13.4756 27.4721C12.7731 27.0623 12.1897 26.4764 11.7828 25.7723C11.3759 25.0682 11.1596 24.2701 11.1553 23.4569V22.1624C11.1554 21.7136 11.2735 21.2727 11.4977 20.8839C11.7219 20.4951 12.0443 20.1721 12.4327 19.9472C12.7761 19.7483 13.1659 19.6434 13.5627 19.6432C13.9595 19.6429 14.3494 19.7472 14.6931 19.9457L20.341 23.2008Z"
                    stroke="white"
                  />
                </svg>
              </a>
            </div>
            <h4 className="text-center text-[2.5vw] xs:text-xs lg:text-[1vw] 2xl:text-[25px] text-nowrap">
              © 2025 TriggerX. All rights reserved.
            </h4>
          </div>

          <div className="w-[100%] sm:w-auto flex flex-col justify-center gap-4 sm:gap-8 items-end">
            <div className="w-[100%] sm:w-auto flex justify-between sm:justify-end gap-3 md:gap-6 lg:gap-8 text-[2.5vw] xs:text-xs lg:text-[1vw] 2xl:text-[25px] text-nowrap">
              <a href="#" className="hover:text-gray-400">
                Build
              </a>
              <a href="#" className="hover:text-gray-400 ">
                Docs
              </a>
              <a href="#" className="hover:text-gray-400">
                Dev Hub
              </a>
            </div>
            <div className="w-[100%] sm:w-auto flex justify-between sm:justify-end gap-3 md:gap-6 lg:gap-8 text-[2.5vw] xs:text-xs lg:text-[1vw] 2xl:text-[25px] text-nowrap">
              <a href="#" className="hover:text-gray-400">
                Keeper Network
              </a>
              <a href="#" className="hover:text-gray-400">
                Term of Use
              </a>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="w-[95%] mx-auto h-max p-5">
          <Image src={logo} alt="footer logo" className="w-full h-auto" />
        </div>

        <Image
          src={footer1}
          alt=""
          className="absolute left-0 -z-10 bottom-[92%] sm:bottom-[26%] lg:bottom-[45%] w-[80px] sm:w-[130px] lg:w-[150px] 2xl:w-[200px] h-auto"
        />

        <Image
          src={footer2}
          alt=""
          className="absolute right-[0%] sm:right-0 -z-10 bottom-[70%] sm:bottom-[50%] w-[80px] sm:w-[130px] 2xl:w-[220px] h-auto"
        />
      </div>
    </>
  );
};

export default Footer;
