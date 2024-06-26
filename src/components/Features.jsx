import { FEATURES } from "../constants/index";
import { camp, phone } from "../utils/images";
import { FeatureItem } from './index';

const Features = () => {
  return (
    <div className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img src={phone} alt="phone image was not found!" />
        </div>

        <div className="z-10 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <img
              src={camp}
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              alt="camp image was not found!"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
