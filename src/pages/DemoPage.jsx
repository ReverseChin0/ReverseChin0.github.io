import { Col, Divider, List, Row } from 'antd'
import {CardGallery} from '../components/'


const basePath    = '/assets/images/';
const boxPaths    = [ basePath+'boxingCustomization/boxing_1.jpg',
                      basePath+'boxingCustomization/boxing_2.jpg',
                      basePath+'boxingCustomization/boxing_3.jpg']

const futPaths    = [ basePath+'futbol/futbol-1.jpg',
                      basePath+'futbol/futbol-2.jpg',
                      basePath+'futbol/futbol-3.jpg']

const matPaths    = [ basePath+'matDesign/materialDesignMats_1.jpg',
                      basePath+'matDesign/materialDesignMats_2.jpg']
                
                    
const shaderPaths = [ basePath+'shaderVariety/ditherShader_0.jpg',
                    basePath+'shaderVariety/shadervariety_1.jpg',
                    basePath+'shaderVariety/shadervariety_2.jpg',
                    basePath+'shaderVariety/shadervariety_3.jpg']                    
                  
const experiments = [ basePath+'Experiments/spider.gif',
                      basePath+'Experiments/matrixProjection.jpg',
                      basePath+'Experiments/mesh-Deform.jpg',
                      basePath+'Experiments/customLighting.jpg']

const demoLinks = [
                  {
                    title:'react-gifexpert',
                    link:'https://reversechin0.github.io/react-gifexpert'
                  },
                  {
                    title: 'mern-calendar-chino (tal vez dure un rato)',
                    link: 'https://mern-calendar-chino.herokuapp.com/auth/login'
                  }
                ]
                      
export const DemoPage = () => {

  return (
    <>
      <Row style={{margin:'2% 0'}}>
        <Col span={3}/>
        <Col span={18}>
          <h1>Demo Page</h1>
          <Row>
            <CardGallery paths={boxPaths} title='Box' description={'www.boxing.com'} spanWidth={8}/>
            <CardGallery paths={futPaths} title='Futbol Asertivo' description={'www.FamiliaIncluyente.com'} spanWidth={8}/>
            <CardGallery paths={matPaths} title='Substance Designer' description={'www.SubstanceDesigner.com'} spanWidth={8}/>
            <CardGallery paths={shaderPaths} title='Shaders' description={'www.someShaders.com'} spanWidth={8}/>
            <CardGallery paths={experiments} title='Some Experiments' description={'www.someExperiments.com'} spanWidth={8}/>
          </Row>

          <Row>
            <Divider style={{borderTopColor:'#E4E4E4'}}>Páginas de Ejemplo</Divider>

            <List
              dataSource={demoLinks}
              renderItem={(item) => (
                <List.Item>
                  <a href={item.link} target={'_blank'}> {item.title} </a>
                </List.Item>
              )}
            />

          </Row>
          
        </Col>
        <Col span={3}/>
      </Row>
    </>
  )
}
