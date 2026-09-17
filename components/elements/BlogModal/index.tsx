import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

interface BlogModalProps {
  title: string;
  published_at: string;
  image: string;
  category: string;
  author: string;
  content: string;
  onClose?: () => void;
}

function BlogModal({
  title,
  published_at,
  image,
  category,
  author,
  content,
  onClose,
}: BlogModalProps) {
  return (
    <div className="w-full h-full bg-black rounded-md px-3 py-8 shadow-sm shadow-[#3f3e3eaa]">
      {/* ==== Close Modal ==== */}
      <button className="absolute right-5 top-5 text-red-500 text-3xl z-10 outline-none" onClick={onClose}>
        <AiOutlineCloseCircle />
      </button>
      <div className="w-full max-h-[698px] h-[90vh]  overflow-y-scroll no-scrollbar text-white px-4">
        {/* ==== Blog Title ==== */}
        <h2 className="text-2xl font-medium py-2 mt-4 font-Montserrat">
          {title}
        </h2>
        {/* ==== Blog Metadata ==== */}
        <div className="flex gap-3 items-center flex-wrap mb-4">
          <div className="flex gap-2 items-center">
            <MdWeb className="text-primary-color" />
            <p className="text-xs text-[#C6C6C6]">{category}</p>
          </div>
          <div className="flex gap-2 items-center">
            <BiTimeFive className="text-primary-color" />
            <p className="text-xs text-[#C6C6C6]">{published_at}</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaUserAlt className="text-primary-color" />
            <p className="text-xs text-[#C6C6C6]">{author}</p>
          </div>
        </div>
        {/* ==== Blog Thumbnail ==== */}
        <div className="relative mt-2 w-full h-44 sm:h-64 md:h-80 rounded-md overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
        </div>
        {/* ==== Blog Content ==== */}
        <div
          className="mt-5 text-lg text-[#696969] leading-7"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </div>
  );
}

export default BlogModal;
