import "./style.css";
import Image from "next/image";
import { BsEye } from "react-icons/bs";

interface PortfolioCardProps {
  title: string;
  images: {
    default: string;
    variants: string[];
  };
  type: string;
  onClick?: () => void;
}

function PortfolioCard({ title, images, type, onClick }: PortfolioCardProps) {
  return (
    <article
      className="relative cursor-pointer w-full sm:w-[48%] md:w-[31%] h-60 md:h-64 mb-8 rounded-md overflow-hidden hover:before:opacity-100 hover:opacity-80 hover: transition duration-300 Portfolio__card_overlay"
      onClick={onClick}
    >
      <span className="absolute top-0 left-0 text-white text-3xl w-full h-full flex justify-center items-center opacity-0 card-icon-visibility transition duration-300">
        <BsEye />
      </span>
      <Image
        src={images.default}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 48vw, 31vw"
        className="object-cover"
      />
      <div className="Portfolio__card_overlay_text">
        <p className="text-white text-md font-semibold">{title}</p>
        <p className="text-gray-300 text-xs">{type}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;
