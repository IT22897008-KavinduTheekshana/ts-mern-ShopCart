import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import LoadingBox from '../components/LoadingBox';
import ProductItem from '../components/ProductItem';
import MeessageBox from '../components/MessageBox';
import { useGetProductsQuery } from '../hooks/productHooks';





export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MeessageBox variant="danger">{getError(error as ApiError)}</MeessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>ShopCart</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}
