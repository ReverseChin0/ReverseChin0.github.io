import { Col, Row } from 'antd';

export const HomePage = () => {
  return (
    <>
      <Row style={{margin:'2% 0'}}>
        <Col span={4}/>
        <Col span={16}>
          <h1>Bienvenido</h1>
          <p>Sientete libre de explorar la página y encontrar algo que te interese ✌<br/></p>
        </Col>
        <Col span={4}/>
      </Row>
    </>
  )
}
