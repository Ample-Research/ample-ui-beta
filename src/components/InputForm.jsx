import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

export const InputForm = ({setSubmitted, redoInputs, setTrainingInfo}) => {

    const [ form, setForm ] = useState(redoInputs)

    const setField = (field, value) => {
            setForm({
            ...form,
            [field]: value
            })
    }

    const readFile = (file) => {
        const reader = new FileReader();
        let text;
        reader.onload = async (e) => { 
            text = await e.target.result
            setField('fileContents', text);
            setField('fileName', file.name);
          };
          reader.readAsText(file)
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    //API Call/additional data processing goes here
    setTrainingInfo(form);
    setSubmitted(true);
  };

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{form.fileName ? "Upload new document" : "Upload the document on which this model will be based"}</Form.Label>
            <Form.Control required={!form.fileName} type="file" placeholder={form.fileName} onChange={ e => readFile(e.target.files[0]) }/>
            <Form.Text className="form-text-mute">
                {form.fileContents ? form.fileContents.substring(0, 200) + "..." : "your file will be read as plain text"}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTone">
          <Form.Label>Set a Tone</Form.Label>
          <Form.Control  value={form.tone} required   onChange={ e => setField('tone', e.target.value) }/>
          <Form.Text className="form-text-mute">
          Describe the desired tone for answers from this model in a word or a phrase, e.g. "wry", "aggressively rational", "compassionate but not sappy", "casual and passive aggressive" 
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formUseCase">
          <Form.Label>Define Your Use Case</Form.Label>
          <Form.Control  value={form.useCase} required as="textarea" aria-label="With textarea" onChange={ e => setField('useCase', e.target.value) }/>
          <Form.Text className="form-text-mute">
            Describe the end use case of your model in a few sentences, e.g. "This model will help parents brainstorm and plan creative activities to do with their children. It will be one feature in a larger application that offers a variety of tools for parents." 
          </Form.Text>
        </Form.Group>
        <Form.Label>Input 2 or 3 sample question and answer pairs</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text>Q&A</InputGroup.Text>
            <Form.Control  value={form.q1} required controlId="Q1" placeholder="sample question" onChange={ e => setField('q1', e.target.value) }/>
            <Form.Control  value={form.a1} required controlId="A1" placeholder="sample answer" onChange={ e => setField('a1', e.target.value) }/>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>Q&A</InputGroup.Text>
            <Form.Control  value={form.q2} required controlId="Q2" placeholder="sample question" onChange={ e => setField('q2', e.target.value) }/>
            <Form.Control  value={form.a2} required controlId="A2" placeholder="sample answer" onChange={ e => setField('a2', e.target.value) }/>
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text>Q&A</InputGroup.Text>
            <Form.Control value={form.q3} controlId="Q3" placeholder="sample question" onChange={ e => setField('q3', e.target.value) }/>
            <Form.Control value={form.a3} controlId="A3" placeholder="sample answer" onChange={ e => setField('a3', e.target.value) }/>
        </InputGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  