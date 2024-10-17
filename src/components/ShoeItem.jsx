import styled from "styled-components";

export default function ShoeItem({ products }) {
  return (
    <>
      <Container>
        <Title>Все кросссовки</Title>
        <Shoe>
          {products.map((item) => (
            <ShoeCard>
              <ImgShoes src={item.image} alt="" />
              <ItemTitle>{item.title}</ItemTitle>
              <Price>Цена:</Price>
              <PriceShoes>{item.price}</PriceShoes>
            </ShoeCard>
          ))}
        </Shoe>
        ;
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 1080px;
  height: 1066px;
  top: -124px;
  left: 1407px;
  border-radius: 20px 0px 0px 0px;
  margin: auto;
`;

const Title = styled.h1`
  padding-bottom: 30px;
  margin-left: 200px;
  text-align: center;
`;

const Shoe = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 210px;
  height: 250px;
  top: -3px;
  border-radius: 40px;
  border: 1px;
  margin-left: 200px;
  margin-right: 30px;
`;

const ShoeCard = styled.div`
  width: 210px;
  border: 1px solid #f3f3f3;
  border-radius: 30px;
  font-size: 13px;
  height: 270px;
  &:hover {
    box-shadow: -2px 13px 21px 1px rgb(0, 102, 255);
  }
  &:active {
    background-color: rgb(173, 173, 173);
  }
`;

const ImgShoes = styled.img`
  width: 133px;
  height: 112px;
  margin-left: 40px;
  padding-top: 22px;
`;

const ItemTitle = styled.p`
  margin-left: 30px;
  margin-right: 30px;
`;

const Price = styled.h6`
  font-size: 12px;
  margin: 30px 0 5px 30px;
  color: gray;
`;

const PriceShoes = styled.span`
  font-weight: bolder;
  margin-left: 30px;
  padding-bottom: 34px;
`;
