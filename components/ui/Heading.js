import { cn } from '@/lib/utils';

const Heading = ({ title, description, divClassName, headingClassName, paragraphClassName }) => {
  return (
    <div className={cn("w-[85%] mx-auto text-center", divClassName)}>
      <h1 className={cn("text-3xl", headingClassName)}>{title}</h1>
      <p className={cn("text-xl", paragraphClassName)}>{description}</p>
    </div>
  );
}

export default Heading;