import { Card, Col, Image, Row } from "antd"
//https://ReverseChin0.github.io/public/
export const SpanishAbout = () => {
  return (
    <>
      <Row style={{margin:'2% 0'}}>
          <Col span={3}/>
          <Col xs={{span:18}} lg={{span:6}} >
            <Image
              style={{padding:'2rem'}}
              src="/assets/images/FotoChida_opt.jpg"/>
          </Col>
          <Col xs={{span:4}} lg={{span:1}}/>
          <Col xs={{span:16}} lg={{span:11}}>
            <h1>¡Hola!</h1>
            <p>Me llamo <strong>Francisco Emmanuel Castañeda López</strong> pero mis amigos me dicen Chino 😅</p>
            <p>🤓 Soy un programador que aspira ser <strong>artista técnico.</strong><br/>
              🎮 Estudie Programación enfocada a <strong>videojuegos</strong>.<br/>
              🕹 Tengo experiencia trabajando en <strong>Unity</strong> con C# y <strong>Unreal Engine</strong> mayormente con su sistema de Blueprints.<br/>
              ⚛ Tomé un curso de <strong>React</strong>, Javascript, MongoDB y autenticación en Firebase.<i> (Estoy aprendiendo Typescript)</i><br/>
              💻 Me interesan mucho los <strong>shaders</strong> y cómo funcionan los gráficos por computadora<br/>
              💃🕺 Finalmente y completamente no relacionado me gusta el baile, las artes marciales, comer y escalar :D</p> 
            <p>Te invito a que si te interesa lo que ves aqui, des una checada a mis trabajos anteriores y consideres establecer contacto</p>
          </Col>
          <Col span={3}/>
      </Row>
      <Row style={{marginTop:'5rem'}}>
        <Col span={7}/>
          <Col span={10} >
            <Card title="Información de Contacto" extra={<a href="/assets/images/CV_2022_Francisco.jpg" target={'_blank'}>cv</a>} style={{width: 'auto'}}>
              <p><strong>Correo: </strong>frank.castaneda.g@gmail.com</p>
              <p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/francisco-emmanuel-castañeda-lópez-550b07251" target={'_blank'}>Francisco Emmanuel Castañeda López</a></p>
            </Card>
        </Col>
        <Col span={7}/>
      </Row>
    </>
  )
}
