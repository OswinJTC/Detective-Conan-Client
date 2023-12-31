import {Form,Button} from 'react-bootstrap';

const ReviewForm = ({handleSubmit,revText,defaultValue}) => {
  return (

    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{"一同參與評論吧！"}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default ReviewForm