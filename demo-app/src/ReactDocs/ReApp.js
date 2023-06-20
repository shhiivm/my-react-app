const products = [
    {title: 'Cabbage', isFruit: false, id: 1 },
    {title: 'Potato', isFruit: false, id: 2 },
    {title: 'Orange', isFruit: true, id: 3 },
    {title: 'Apple', isFruit: true, id: 4}
];

export default function ShoppingList(){
    const listItems = products.map(product =>
        <li
        key = {product.id}
        style={{
            textDecoration:product.id % 2 == 0 ? 'underline' :'',
            color:product.isFruit ? 'magenta' : 'darkgreen',
            textTransform: product.id %2 !=0 ? 'uppercase':'lowercase'
        }}
        >
            {product.title}
        </li>
        );
        return(
            <ol>{listItems}</ol>      );
            }