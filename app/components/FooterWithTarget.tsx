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
    <div className="relative">
      <div className="absolute -top-[9rem] flex justify-center w-full">
        <TargetLogo action={action} description={description} title={title} />
      </div>
      <Footer target />
    </div>
  );
};
