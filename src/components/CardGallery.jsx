import {Image, Card, Col } from 'antd'
import { useState } from 'react';
const { Meta } = Card;

export const CardGallery = ({paths=[],spanWidth=8,title,description}) => {
  
    const [visible, setVisible] = useState(false);

    return (
        <Col span={spanWidth} style={{padding:'0.5rem'}}>

            <Card
              hoverable 
              style={{width:'auto'}}
              onClick={() => setVisible(true)}
              cover={<img alt="example" src={paths[0]} />}>
              <Meta title={title} description={description} />
            </Card>

            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                {
                    paths.map((path) => ( <Image src={path} key={path} />))
                }
                </Image.PreviewGroup>
            </div>

        </Col>

        
  )
}
