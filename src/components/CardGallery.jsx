import {Image, Card, Col } from 'antd'
import { useState } from 'react';
const { Meta } = Card;

export const CardGallery = ({path,spanWidth=8,title,description}) => {
  
    const [visible, setVisible] = useState(true);

    return (
        <Col span={spanWidth}>

            <Card
              hoverable 
              style={{width:'auto',}}
              onClick={() => setVisible(true)}
              cover={<img alt="example" src={path} />}>
              <Meta title={title} description={description} />
            </Card>

            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                </Image.PreviewGroup>
            </div>

        </Col>

        
  )
}
