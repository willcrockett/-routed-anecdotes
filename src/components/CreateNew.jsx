import { useField } from "../hooks"
import { useNavigate } from "react-router-dom"
const CreateNew = (props) => {
  const content = useField('text')
  const author = useField('text') 
  const info = useField('text') 

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const new_anecdote = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    }
    props.addNew(
      new_anecdote
    )
    navigate('/')
    props.setNotification(`a new anecdote ${content} has been created`)
    setTimeout(() => {
      props.setNotification(null)
    }, 5000)
  }
  const onReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.fields} />
        </div>
        <div>
          author
          <input {...author.fields} /> 
        </div>
        <div>
          url for more info
          <input {...info.fields} /> 
        </div>
        <button type='submit'>create</button>
        <button onClick={onReset} type='button'>reset</button> 
      </form>
      
    </div>
  )

}
export default CreateNew;