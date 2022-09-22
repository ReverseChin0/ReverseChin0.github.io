import { Col, Row } from 'antd';


export const HomePage = () => {
  return (
    <>
      <Row>
        <Col flex={1}/>
        <Col flex={4}>
          <h1>Bienvenido</h1>
          <p>
            Bury the Light Deep Within
            Cast aside there´s no coming home
          </p>
        </Col>
        <Col flex={1}/>
      </Row>
    </>
  )
}
