import { Footer } from "./Footer";
import { TargetLogo } from "./Logos";

export const FooterWithTarget = ({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
}) => {
  return (
    <div className="relative ">
      <div className="absolute -top-[18rem] tablet:-top-[19rem] desktop:-top-[9rem] left-[3.3vw] desktop:left-0 w-[93vw] flex justify-center desktop:w-full">
        <TargetLogo action={action} description={description} title={title} />
      </div>
      <Footer target />
    </div>
  );
};
