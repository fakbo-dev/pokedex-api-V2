import { Button } from "./ui/button";

const Pagination = ({ page, totalPages, prevClick, nextClick }) => {



    return (
        <div className="flex gap-3">
            <Button onClick={prevClick}>&lt;</Button>
            <div>{page} de {totalPages}</div>
            <Button onClick={nextClick}>&gt;</Button>
        </div>
    )
}

export default Pagination;