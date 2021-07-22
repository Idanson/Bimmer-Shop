import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if(keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Col md={5} >
    <Form onSubmit={submitHandler} className='input-group'>
      <Form.Control type='text' name='q' className='inline'
      onChange={(e) => setKeyword(e.target.value)}
      placeholder='Search Products...'>
      </Form.Control>
      <Button type='submit' variant='outline-success' className='p-2.5'>
        Search
      </Button>
    </Form>
    </Col>
  )
}

export default SearchBox
