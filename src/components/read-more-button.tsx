


interface ReadMoreProps {
    link: string;
    children: React.ReactNode;
}

const ReadMore = ({ link , children }: ReadMoreProps) => {
    return(
        <>
      <button className="read-more-btn"> <a href={link}>{children}</a></button>
        </>
    )
}

export default ReadMore;