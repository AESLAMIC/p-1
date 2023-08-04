import React from "react";
import Image from "../assests/jsxcode.png";

function Shdesc2() {
  return (
    <div className="w-full border-b border-b-gray-700 bg-[#23272f] py-16 px-4 mt-0">
      <div className="max-w-[1024px] mx-auto ">
        <div className="flex w-full flex-col justify-center mx-auto">
          <div className="flex flex-col mb-[4rem]">
            <h4 className="md:text-xl sm:text-lg text-m text-right font-bold mb-10 py-2 text-gray-100 ">
              ویژگی های ری‌اکت
            </h4>
            <h5 className="md:text-xl sm:text-lg text-2xl text-right font-bold py-2 text-[#149eca]">
              JSX
            </h5>
            <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-300">
              JSX) JavaScript Extention) افزونه‌ای برای ری اکت است که به شما کمک
              می‌کند کدها را مانند کد HTML بنویسید. قطعه کد زیر را ببینید:
            </p>
            <img
              className="justify-center mt-6 mx-auto"
              src={Image}
              alt="jsx code"
              width="500"
              height="100"
            />
            <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-300 mt-7">
              این خط، یک کد HTML نیست بلکه سینتکسی متفاوت و مبتنی بر HTML/XML از
              زبان جاوا اسکریپت دارد و به همراه کدهای React استفاده می‌شود. JSX
              یک قالب یا فریمورک جدید نیست بلکه همان زبان جاوا اسکریپت و فقط با
              ساختار دستوری دیگری است که در ایجاد کامپوننت‌ها (Component) و
              المان‌های (Element) مختلف برای React DOM کاربرد دارند.
            </p>

            <div>
              <h5 className="md:text-xl sm:text-lg text-xl text-right mt-[5rem] font-bold py-2 text-[#149eca]">
                Component
              </h5>
              <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-300 mt-3">
                کامپوننت ها قطعاتی هستند که میتوان از آن ها هرجایی در پروژه
                استفاده کرد و در اصطلاح reusable هستند . در ری اکت دو نوع
                کامپوننت میتوان نوشت ، یکی به شکل تابع و دیگری به شکل کلاس
                (class components , functional components).
              </p>
            </div>
            <h5 className="md:text-xl sm:text-lg text-xl text-right mt-[5rem] font-bold py-2 text-[#149eca]">
              Single-Way data flow
            </h5>
            <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-300 mt-3">
              در React مجموعه ای از value های تغییر ناپذیر بین کامپوننت ها به
              عنوان properties به تگ های HTML پاس داده می شوند.کامپوننت ها به
              صورت مستقیم نمی توانند هر properties را تغییر دهند اما می توانند
              آن ها را به call back function پاس دهند و به کمک آن ها تغییرات را
              انجام دهند.این فراآیند به طور کامل با “properties flow down;
              actions flow up” شناخته می شود.
            </p>
            <div>
              <h5 className="md:text-xl sm:text-lg text-xl text-right mt-[5rem] font-bold py-2 text-[#149eca]">
                Virtual Document Object Model
              </h5>
              <p className="md:text-lg sm:text-m text-m text-right py-2 text-gray-300 mt-3">
                ری اکت React یک ساختار کش in-memory ایجاد می کند. در این ساختار
                اگر تغییری رخ داده باشد DOM را بروزرسانی می کند.این ویژگی برنامه
                نویس را قادر می سازد درحالی که در یک wtpi تغییرات ایجاد میشود
                تنها کامپوننتی rerender شود که تغییر پیدا کرده است.Virtual DOM ی
                مانند DOM یک درخت از گره هایی هست که شامل element ها و
                attributes هایشان و محتوا به عنوان objects است.متدrender() یک
                درخت از کلمپوننت های React ایجاد می کند و تغییر در هر کامپوننت
                باعث می شود این گره بروز رسانی شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shdesc2;
