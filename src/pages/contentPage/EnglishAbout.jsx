import { Card, Col, Image, Row } from "antd"

export const EnglishAbout = () => {
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
        <Col span={3}/>
      </Row>
      <Row style={{marginTop:'5rem',marginBottom:'10 rem'}}>
        <Col xs={{span:3}} lg={{span:6}}/>
          <Col xs={{span:18}} lg={{span:12}} >
            <Card title="Contact Info" extra={<a href="/assets/images/CV_2022_Francisco.jpg" target={'_blank'}>cv</a>} style={{width: 'auto'}}>
              <p><strong>email: </strong>frank.castaneda.g@gmail.com</p>
              <p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/francisco-emmanuel-castañeda-lópez-550b07251" target={'_blank'}>Francisco Emmanuel Castañeda López</a></p>
            </Card>
        </Col>
        <Col xs={{span:3}} lg={{span:6}}/>
      </Row>
      <Row>
        <Col style={{height:'5rem'}}/>
      </Row>
    </>
  )
}
