interface Props {
    cardItems: string[];
    onClear: () => void;
}

const Cart = ({ cardItems, onClear }: Props) => {
    return (
        <>
            <div>Cart</div>
            <ul>
                {cardItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={onClear}>Clear</button>
        </>
    );
};

export default Cart;
