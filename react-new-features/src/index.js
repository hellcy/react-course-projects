import React, {useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'))
    if (data) {
      setNotes(data)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(notes)
    localStorage.setItem('notes', json)
  }, [notes])

  const addNote = (e) => {
    e.preventDefault()

    setNotes([
      ...notes,
      {
        title, body
      }
    ])
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote}/>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
      </form>
    </div>
  )
}

const Note = ({note, removeNote}) => {
  useEffect(() => {
    // same as componentDidMount
    console.log('Setting up effect')

    return () => {
      // same as componentWillUnmount
      console.log('Cleaning up effect')
    }
  }, [])

  return (
    <div key={note.title}>
    <h3>{note.title}</h3>
    <p>{note.body}</p>
    <button onClick={() => removeNote(note.title)}>x</button>
  </div>
  )
}

const App = (props) => {
  // hooks are functions, useState is a function that will return two elements
  // the first element is the current state value
  // the second element is a function we can call in order to update the state
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  // useEffect is like a combination of componentDidMount and componentDidUpdate
  // it will be called every time props or state changes

  // the first element is a function to execute 
  // the second element is an array to specify that useEffect will only be called when these elements change
  // so in this case useEffect will only be called when COUNT changes
  useEffect(() => {
    document.title = count
  }, [count])

  // we could have multiple useEffect functions, each will have its own functions and dependencies
  // if you don't provide the second element, useEffect will trigger when any thing changes
  // if you provide with an empty array, useEffect will only run once when the component load, which is exactly the same as componentDidMount
  useEffect(() => {
    console.log('this should only run once')
  }, [])

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

App.defaultProps = {
  count: 0
}

ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
