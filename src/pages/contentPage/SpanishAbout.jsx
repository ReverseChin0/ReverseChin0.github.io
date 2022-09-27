import { Col, Row } from "antd"

export const SpanishAbout = () => {
  return (
    <Row style={{margin:'2% 0'}}>
        <Col span={4}/>
        <Col span={16}>
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
        <Col span={4}/>
    </Row>
  )
}
