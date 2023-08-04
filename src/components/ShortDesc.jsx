import React from "react";

function ShortDesc() {
  return (
    <>
      <div className="w-full  bg-[#191c22] py-16 border-b border-b-gray-700 px-4 mt-0">
        <div className=" max-w-[1024px] mx-auto ">
          <div className="flex flex-col w-full justify-center mx-auto">
            <h2 className=" text-center mb-[3rem] md:mb-[5rem]">
              <span className=" text-3xl text-[#149eca] font-bold text-center inline md:text-4xl">
                ری‌‌اکت
              </span>
              &nbsp;
              <span className=" text-3xl text-white font-bold text-center inline md:text-4xl">
                دوست داشتنی :)
              </span>
            </h2>
            <div className="flex flex-col mb-[4rem]">
              <h4 className="md:text-xl sm:text-lg text-m text-right font-bold py-2 text-gray-100 ">
                ری‌اکت محبوب ترین کتابخانه‌ی توسعه رابط کاربری
              </h4>
              <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-300">
                ری اکت اساسا یک کتابخونه open-source جاوا اسکریپتی برای ساخت
                رابط کاربری(user interfaces) برای single page
                applications(اپلیکیشن های تک صفحه ای) است.این کتابخونه برای
                مدیریت لایه View برای وب استفاده می شود.همچنین React این امکان
                رو در اختیار ما میذاره که reusable UI components(کامپوننت های
                قابل استفاده مجدد رابط کاریری) ایجاد کنیم.React در ابتدا توسط
                Jordan Walke یکی از مهندسین ارشد فیسبوک ایجاد شد.React ابتدا در
                سال 2011 در فیسبوک مورد استفاده قرار گرفت و سپس در سال 2012 در
                اینستاگرام استفاده شد. ری اکت این امکان را در اختیار توسعه
                دهندگان می گذارد که وب اپلیکیشن های خیلی بزرگ که می تواند date
                را تغییر بدهد،بدون reload صفحه ایجاد کنند.مهم ترین اهداف React
                را میتوان سادگی،سرعت و مقیاس پذیر بودن دانست.تمرکز اصلی React بر
                روی رابط کاربری است و فقط در لایه View در معماری MVC مطابقت
                دارد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortDesc;
