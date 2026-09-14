interface ScrollableImageProps {
  src?: string;
  onClick?: () => void;
}

function ScrollableImage({ src, onClick }: ScrollableImageProps) {
    return (
        <div
            style={{
                backgroundImage: `url("${src}")`,
            }}
            className="project-box h-full cursor-pointer rounded-md"
            onClick={onClick}
        ></div>
    )
}

export default ScrollableImage