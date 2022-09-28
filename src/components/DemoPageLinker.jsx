import { Col, Divider, List, Row } from "antd";
import { useSelector } from "react-redux";

const demoLinks = [
    {
      title:'Gifexpert',
      link:'https://reversechin0.github.io/react-gifexpert'
    },
    {
      title: 'MERN-Calendar-chino (tal vez dure un rato en cargar)',
      link: 'https://mern-calendar-chino.herokuapp.com/auth/login'
    },
    {
      title: 'SPA_Heroes',
      link: 'https://reversechin0.github.io/spa_heroes'
    }
  ]

export const DemoPageLinker = () => {
    const spanish = useSelector((state) => state.states.spanish);
  return (
    <>
        <Divider style={{borderTopColor:'#E4E4E4'}}>{ spanish ? 'Páginas de Ejemplo' : 'Example Pages'}</Divider>
        <Col span={24}>
            { spanish ? <p>Los siguientes sitios web fueron hechos mientras aún estaba aprendiendo react</p>
                  : <p>The following websites where made while I was still learning React</p>
            }
        </Col>

        <Col span={24}>
            <List
            dataSource={demoLinks}
            renderItem={(item) => (
                <List.Item>
                    <a href={item.link} target={'_blank'}> {item.title} </a>
                </List.Item>
                )}
            />
        </Col> 
    </>
  )
}
