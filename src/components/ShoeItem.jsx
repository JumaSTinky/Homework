import "./ShoeItem.css";

export default function ShoeItem({ products }) {
  return (
    <>
      <div className="container">
        <h1>Все кросссовки</h1>
        <div className="shoe">
          {products.map((item) => (
            <div className="shoeCard">
              <img src={item.image} alt="" className="imgShoes" />
              <p>{item.title}</p>
              <h6>Цена:</h6>
              <span className="priceShoes">{item.price}</span>
            </div>
          ))}
        </div>
        ;
      </div>
    </>
  );
}
