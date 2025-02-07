import { android, apple, phones } from "../utils/images";
import { Button } from './index';
const GetApps = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-10 flex w-full flex-1 flex-col items-center justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type={"button"}
              title={"App Store"}
              icon={apple}
              variant={"btn_white"}
              full
            />
            <Button
              type={"button"}
              title={"Play Store"}
              icon={android}
              variant={"btn_dark_green_outline"}
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <img
            src={phones}
            alt="phones image was not found!"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApps;
