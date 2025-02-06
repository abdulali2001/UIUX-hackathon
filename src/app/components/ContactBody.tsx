import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactBody() {
  return (
    <div className="w-full h-auto flex justify-center bg-white py-[90px]">
      <div className="w-full max-w-[1058px] px-5 md:px-0 flex flex-col items-center">
        <div className="text-center mb-[50px]">
          <h2 className="text-black text-[36px] font-semibold leading-[54px]">
            Get In Touch With Us
          </h2>
          <p className="text-[#9F9F9F] text-[16px] font-normal leading-[24px] mt-[16px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex gap-[30px] flex-col md:flex-row w-full justify-between">
          {/* Left Column */}
          <div className="md:w-[393px] flex flex-col gap-[40px] py-[50px] px-[20px] bg-[#F9F9F9] rounded-lg shadow-lg">
            <div className="flex gap-[30px]">
              <div className="flex items-center">
                <Icon
                  icon="carbon:location-filled"
                  className="w-[24px] h-[27px] text-black"
                />
              </div>
              <div>
                <h2 className="text-[24px] font-medium text-black">Address</h2>
                <p className="text-[16px] text-black">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-[30px]">
              <div className="flex items-center">
                <Icon
                  icon="bxs:phone"
                  className="w-[24px] h-[27px] text-black"
                />
              </div>
              <div>
                <h2 className="text-[24px] font-medium text-black">Phone</h2>
                <p className="text-[16px] text-black">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-[30px]">
              <div className="flex items-center">
                <Icon
                  icon="bi:clock-fill"
                  className="w-[24px] h-[27px] text-black"
                />
              </div>
              <div>
                <h2 className="text-[24px] font-medium text-black">Working Time</h2>
                <p className="text-[16px] text-black">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-[635px] px-5 md:px-[50px] py-[50px] bg-[#F9F9F9] rounded-lg shadow-lg">
            <div className="flex flex-col gap-[36px]">
              <div className="w-full">
                <p className="text-[16px] font-medium text-black mb-[10px]">
                  Your Name
                </p>
                <input
                  type="text"
                  placeholder="Abc"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 border-[#9F9F9F] w-full rounded-[10px] py-[16px] px-[16px]"
                />
              </div>

              <div className="w-full">
                <p className="text-[16px] font-medium text-black mb-[10px]">
                  Email Address
                </p>
                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 border-[#9F9F9F] w-full rounded-[10px] py-[16px] px-[16px]"
                />
              </div>

              <div className="w-full">
                <p className="text-[16px] font-medium text-black mb-[10px]">
                  Subject
                </p>
                <input
                  type="text"
                  placeholder="This is optional"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 border-[#9F9F9F] w-full rounded-[10px] py-[16px] px-[16px]"
                />
              </div>

              <div className="w-full">
                <p className="text-[16px] font-medium text-black mb-[10px]">
                  Message
                </p>
                <textarea
                  name="#"
                  id="#"
                  placeholder="Hi! I'd like to ask about"
                  className="text-[16px] text-[#9F9F9F] font-normal border-2 border-[#9F9F9F] w-full rounded-[10px] pt-[16px] pb-[30px] px-[16px]"
                ></textarea>
              </div>

              <button className="bg-primary text-white px-[60px] py-[13px] font-normal text-[16px] rounded-[5px] mt-[20px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
