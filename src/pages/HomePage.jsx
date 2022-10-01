import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

export const HomePage = () => {
  const spanish = useSelector((state) => state.states.spanish);


  return (
    <>
      <Row style={{margin:'2% 0'}}>
        <Col span={4}/>
        <Col span={16}>
          <h1 className = 'expandedH1'> {spanish ? '¡Bienvenido!' : '¡Welcome!'} </h1>
          <p className = 'centeredtext'>
            {
              spanish ? 'Sientete libre de explorar la página y encontrar algo que te interese ✌' 
                      : 'Feel free to explore the page and see if something might interest ya ✌'
            }
            <br/>
          </p>
        </Col>
        <Col span={4}/>
      </Row>
    </>
  )
}
