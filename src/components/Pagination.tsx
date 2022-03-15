import setaLeft from '../assets/images/seta-right.png';
import setaRight from '../assets/images/seta-left.png';

type Props = {
    page: number
    totalPages: number
    onLeftClick: () => void
    onRightClick: () => void
};

export const Pagination = ({ page, totalPages, onLeftClick, onRightClick }: Props)  => {
    return (
        <div className="pagination-container">
            <button className="setaButton" onClick={onLeftClick}><div><img className="seta" src={setaRight} alt="seta"/></div></button>
            <div>{page} de {totalPages}</div>
            <button className="setaButton" onClick={onRightClick}><div><img className="seta" src={setaLeft} alt="seta"/></div></button>
        </div>
    )
}