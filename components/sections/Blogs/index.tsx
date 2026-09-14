"use client";

import { useState } from "react";
import { BLOGS } from "../../../data";
import { BlogCard, SectionTitle } from "../../elements";
import { BlogModal, PopUpWrapper } from "../../elements";

// Import Swiper React components
import { Autoplay, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

interface Blog {
  title: string;
  published_at: string;
  image: string;
  category: string;
  author: string;
  content: string;
}

function Blogs() {
  const { title, subtitle, typeWriter, blogs } = BLOGS;
  const [blogPopupData, setBlogPopupData] = useState<Blog | null>(null);
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const blogPopUpData = (data: Blog) => {
    setBlogPopupData(data);
    setOpen((o) => !o);
  };

  return (
    <>
      <section id="Blogs" className="element">
        <div className="container">
          {/* ==== Section Title ==== */}
          <SectionTitle
            center
            title={title}
            subtitle={subtitle}
            typeWriter={typeWriter}
          />
          <div className="flex flex-wrap justify-center mt-10 gap-x-5  max-w-5xl mx-auto">
            {/* ==== Blogs with SwiperSlide  ==== */}
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              scrollbar={{ draggable: true }}
              modules={[Autoplay, Scrollbar, A11y]}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {blogs.map((blog: Blog, index: number) => (
                <SwiperSlide key={index}>
                  <BlogCard
                    {...blog}
                    onClick={() => blogPopUpData(blog)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>  
      {/* ==== Blog Details Popup Modal ==== */}
      <PopUpWrapper open={open} nested onClose={closeModal}>
        {blogPopupData && <BlogModal onClose={closeModal} {...blogPopupData} />}
      </PopUpWrapper>
    </>
  );
}

export default Blogs;
