import Image from "next/image";

interface BlogCardProps {
  title: string;
  image: string;
  published_at: string;
  author: string;
  category: string;
  onClick?: () => void;
}

function BlogCard({
  title,
  image,
  published_at,
  author,
  category,
  onClick,
}: BlogCardProps) {
  return (
    <article className="w-full mb-8 cursor-pointer" onClick={onClick}>
      <div className="relative w-full h-44 md:h-40">
        {/* ==== Blog category ==== */}
        <span className="absolute right-0 bg-gray-800 rounded-tr-md rounded-bl-md text-center text-xs font-medium py-1 px-2 text-gray-100 z-10">
          {category}
        </span>
        {/* ==== Blog Thumbnail ==== */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-md object-cover"
        />
      </div>
      <div>
        <div className="mt-2">
          {/* ==== Blog Title ==== */}
          <h2 className="text-xl font-medium py-1 text-gray-50">{title}</h2>
        </div>
        {/* ==== Blog Metadata ==== */}
        <div className="flex items-center mt-1 text-gray-200">
          <p className="font-light text-sm">{published_at}</p>
          <span className="h-1 w-1 bg-gray-500 mx-2 rounded-full" />
          <p className="font-light text-sm">@{author}</p>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
