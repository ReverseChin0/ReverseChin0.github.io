import { Card, Col, Row } from 'antd'
import {CardGallery} from '../components/'
const { Meta } = Card;

export const DemoPage = () => {
  const basePath = `/assets/images/boxingCustomization/boxing_1.jpg`
  const basePath2 = `/assets/images/boxingCustomization/boxing_2.jpg`
  const basePath3 = `/assets/images/boxingCustomization/boxing_3.jpg`

  return (
    <>
      <Row style={{margin:'2% 0'}}>
        <Col span={4}/>
        <Col span={16}>
          <h1>Demo Page</h1>
          <Row>
            
          <CardGallery path={basePath} title='Box' description={'www.boxing.com'} spanWidth={8}/>
          <CardGallery path={basePath2} title='Box-2' description={'www.boxing.com'} spanWidth={8}/>
          <CardGallery path={basePath3} title='Box-3' description={'www.boxing.com'} spanWidth={8}/>

          </Row>
        </Col>
        <Col span={4}/>
      </Row>
    </>
  )
}
