import { Stack, StackDivider } from '@chakra-ui/react'
import React from 'react'
import Button from './formButton'



const Form = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    alert('You have submitted the form.')
  }
  return (
    <div className="wrapper">
      <Stack divider={<StackDivider />}>
        <h1>How About Them Apples</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input />
            </label>
          </fieldset>
          <Button />
        </form>
      </Stack>
    </div>
  )
}

export default Form