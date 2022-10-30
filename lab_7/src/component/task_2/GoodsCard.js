import goodsCardStyle from './GoodsCard.module.css';

function GoodsCards({ props }) {

    return (
        <div className={goodsCardStyle['card-container']}>
            <div className={goodsCardStyle['item-title']}>
                <p>{props.title}</p>
            </div>
            <div className={goodsCardStyle['item-picture']}>
                <img
                    className={goodsCardStyle['item-picture__img']}
                    src={
                        './images/' +
                        props.image
                    }
                    alt={ props.image }
                />
            </div>
            <div className={goodsCardStyle['item-desc']}>
                <p className={goodsCardStyle['price']}>
                    Price: {props.price} <span className={goodsCardStyle['dollar']}>$</span>/kilo
                </p>
            </div>
            <div className={goodsCardStyle['btn-container']}>
                <div className={goodsCardStyle['buy-btn']}>Buy</div>
            </div>

        </div>
    );
}

export default GoodsCards;
