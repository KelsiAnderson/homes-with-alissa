'use strict';

function Contact() {
	// function will go here
	return (
			<div>
			
			Contact Me
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridName">
      			<Form.Label>Name</Form.Label>
      			<Form.Control type="text" placeholder="Enter full name" />
    			</Form.Group>
						<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Label column="lg" lg={2}>
      		Type your message here
    			</Form.Label>
				</Form.Row>
				<Form.Row>
					<Col xs="auto" className="my-1">
      		<Button type="submit">Submit</Button>
    			</Col>
				</Form.Row>
			</Form>
		
			</div>
		
	)
}