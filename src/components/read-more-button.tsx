interface ReadMoreProps {
  link: string;
  children: React.ReactNode;
  yes: boolean;
}

const ReadMore = ({ link, children, yes }: ReadMoreProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!link) {
      event.preventDefault();
    }
  };
  return (
    <>
      <button className="read-more-btn">
        {" "}
        <a target="_blank" href={link || "#"} onClick={handleClick}>
          {children}
          {yes ? " ↗" : ""}
        </a>
      </button>
    </>
  );
};

export default ReadMore;
