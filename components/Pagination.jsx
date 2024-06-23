import { Button } from "./ui/button";

const Pagination = ({ page, totalPages, prevClick, nextClick }) => {



    return (
        <div className="flex gap-3">
            <Button onClick={prevClick} className="text-[8px] xl:text-[14px] h-[30px] w-[30px]">&lt;</Button>
            <div className="text-black">{page} de {totalPages}</div>
            <Button onClick={nextClick} className="text-[8px] xl:text-[14px] h-[30px] w-[30px]">&gt;</Button>
        </div>
    )
}

export default Pagination;