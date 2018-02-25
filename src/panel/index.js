import React, {Component} from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';


class Panel extends Component {

  state = {
    name: '',
    password: ''
  };

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  submitForm(event) {
    event.preventDefault();

    console.log(this.state.name, this.state.password)
  }

  render() {
    return (
      <div className={'bg-secondary'}>
        <div className={'container d-flex justify-content-center align-items-center'} style={{height: 100 + 'vh'}}>
          <div className={'p-5 bg-white'}>
            <Form onSubmit={this.submitForm.bind(this)}>

              <FormGroup className={'align-items-center'}>
                <Input type="text" name="name" id="exampleEmail" placeholder="Имя" bsSize="lg" onChange={this.handleChange.bind(this)} />
              </FormGroup>

              <FormGroup className={'align-items-center'}>
                <Input type="password" name="password" id="exampleEmail2" placeholder="Пароль" bsSize="lg" onChange={this.handleChange.bind(this)} />
              </FormGroup>

              <div className={'d-block text-center'}>
                <Button className="btn-lg">Войти</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}


export default Panel;