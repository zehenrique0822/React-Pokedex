type Props = {
    page: number
    totalPages: number
    onLeftClick: () => void
    onRightClick: () => void
};

export const Pagination = ({ page, totalPages, onLeftClick, onRightClick }: Props)  => {
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick}><div>⬅</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>➡</div></button>
        </div>
    )
}