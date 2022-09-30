import { Col, Row } from 'antd'
import { useSelector } from 'react-redux';
import { CardsGroup, DemoPageLinker} from '../components/'

                      
export const DemoPage = () => {
  const spanish = useSelector((state) => state.states.spanish);

  return (
    <>
      <Row style={{margin:'2% 0'}}>
        <Col span={3}/>
        <Col span={18}>
          {spanish ? <h1>Galeria</h1> : <h1>Gallery</h1> }

          <Row>
            <CardsGroup/>
          </Row>

          <Row>
            <DemoPageLinker/>
          </Row>
          
        </Col>
        <Col span={3}/>
      </Row>
    </>
  )
}
