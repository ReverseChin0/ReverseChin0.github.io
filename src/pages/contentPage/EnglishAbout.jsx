import { Col, Row } from "antd"

export const EnglishAbout = () => {
  return (
    <Row style={{margin:'2% 0'}}>
        <Col span={4}/>
        <Col span={16}>
          <h1>Hi!!!</h1>
          <p>My name is <strong>Francisco Emmanuel Castañeda López</strong> but my friends call me Chino 😅</p>
          <p>🤓 I'm a programmer who wants to be a <strong>technical artist</strong>.<br/>
             🎮 I took a programing degree focused on <strong>video games</strong>.<br/>
             🕹 I've got experience working with <strong>Unity</strong> with C# and <strong>Unreal Engine</strong> mostly with it's blueprint system.<br/>
             ⚛ I took a Udemy course in <strong>React</strong>, Javascript, MongoDB and Firebase Authentication. <i>(I'm currently learning how to use Typescript)</i><br/>
             💻 I have big interest in <strong>shaders</strong> computer graphics<br/>
             💃🕺 Finally, but completely unrelated, i like eating, martial arts, salsa and rock climbing :D</p> 
          <p>If you are interested in what you see here, I invite you to take a look at my previous works and consider making contact.</p>
        </Col>
        <Col span={4}/>
    </Row>
  )
}
