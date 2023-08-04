import React from "react";

function Whyreact() {
  return (
    <div className="w-full  bg-[#191c22] py-16 border-b border-b-gray-700 px-4 mt-0">
      <div className="max-w-[1024px] mx-auto ">
        <div className="flex flex-col w-full justify-center mx-auto">
          <div>
            <h5 className="md:text-4xl sm:text-4xl text-3xl text-center mt-[5rem] font-bold py-2 text-[#149eca]">
              چرا ری‌اکت ؟
            </h5>
          </div>
          <div className="md:grid grid-cols-2 gap-x-12 gap-3 ">
            <div>
              <p className="md:text-2xl sm:text-xl text-center mb-[-12px] text-xl py-2 text-gray-300 mt-12">
                سادگی
              </p>
              <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-400 mt-0">
                درک کردن React بسیار ساده است.رویکرد میتنی بر کامپوننت،lifecycle
                هایی که به بهترین نحو تعریف شده و استفاده از جاوا اسکریپت React
                را برای یادگیری و ساخت وب اپلیکیشن های حرفه ای آسان می کند.
              </p>
            </div>

            <div>
              <p className="md:text-2xl sm:text-xl text-center text-xl mb-[-12px] py-2 text-gray-300 mt-12">
                یادگیری راحت
              </p>
              <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-400 mt-0">
                هر شخصی با پیش زمینه ای از برنامه نویسی به راحتی می تواند React
                را یاد بگیرد. برای React شما باید یک دانش مختصر در مورد HTML ,
                CSS و جاوا اسکریپت(حرفه ای تر) داشته باشید.
              </p>
            </div>
            <div>
              <p className="md:text-2xl sm:text-xl text-center text-xl mb-[-12px] py-2 text-gray-300 mt-12">
                عملکرد
              </p>
              <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-400 mt-0">
                هیچ container از پیش ساخته شده برای dependency ندارد.شما می
                توانید از ماژول های Browserify, Require JS, EcmaScript 6 با
                استفاده از Babel استفاده کنید که به طور خودکار به dependencies
                اضافه می شود.
              </p>
            </div>
            <div>
              <p className="md:text-2xl sm:text-xl text-center text-xl mb-[-12px] py-2 text-gray-300 mt-12">
                تست پذیری
              </p>
              <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-400 mt-0">
                برنامه های ReactJS فوق العاده آسان برای تست هستند.بنابراین ما می
                توانیم توابع و کامپوننت های خودمون رو با پاس دادن پارامترها و
                state ها و خروجی ها رو چک کنیم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyreact;
