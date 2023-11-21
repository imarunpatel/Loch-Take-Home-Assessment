import { FC, useRef, useState } from "react";
import TestimonialData from "../../../assets/data/testimonial.json";
import { ITestimonial } from "../../../models/Testimonial";
import Logo from "../../../assets/images/logo.png";

const Testimonial = () => {
  const testimonials: ITestimonial[] = TestimonialData;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft] = useState(0);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX;

    const handleDragMove = (moveEvent: MouseEvent) => {
      const delta = moveEvent.clientX - startX;
      if (containerRef.current) {
        containerRef.current.scrollLeft = scrollLeft - delta;
      }
    };

    const handleDragEnd = () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
  };

  return (
    <div>
      {/* <div className="text-center text-2xl text-[#FEFEFE]">Testimonials</div>
      <hr className="mt-5 mb-14" /> */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-end gap-5">
        <img src={Logo} className="mb-4" alt="" width={60} height={60} />
        <div className="w-full" style={{ overflow: "hidden" }}>
          <div className="testimonial-list" ref={containerRef}>
            <div
              className="testimonial-container flex items-center gap-5"
              onMouseDown={handleDragStart}
            >
              {testimonials.map((item) => (
                <TestimonialItem key={item.id} testimonial={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialItem: FC<{ testimonial: ITestimonial }> = (props) => {
  return (
    <div
      className={`flex flex-col gap-5 rounded-xl bg-white p-5 w-[353px] ${
        props.testimonial.id == 34343 ? " w-[531px]" : " w-[353px]"
      } h-fit cursor-grab`}
      style={styles.testimonialItem}
    >
      <div className="title flex items-center gap-2">
        <div className="name text-base">{props.testimonial.name}</div>
        <div className="designation text-[13px] text-[#96979A]">
          {props.testimonial.designation}
        </div>
      </div>
      <div className="description text-base text-[#1D2129] font-medium">
        {props.testimonial.description}
      </div>
    </div>
  );
};

const styles = {
  testimonialItem: {
    boxShadow:
      "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
  },
};

export default Testimonial;
