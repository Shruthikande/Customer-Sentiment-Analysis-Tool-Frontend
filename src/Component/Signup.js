import React, { useState } from 'react'
import './Signup.css'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { signup } = useAuth() || {}
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setSubmitting(true)
    try {
      await signup({ email, username, password })
      setMessage('Signup successful. You can now login.')
    } catch (e1) {
      setMessage('Signup failed')
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <>
    <form className="login-form" onSubmit={onSubmit}>
      <h1>USER SIGNUP</h1>
      <div className="input-container">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {message && <p>{message}</p>}
      <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Create Account'}</button>
    </form>
    </>
  )
}

export default Signup