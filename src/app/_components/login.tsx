'use client'
import { useState } from "react"
import styles from './moduleCss/login.module.css'
import { ModeToggle } from "@/app/_components/mode-toggle"
import Navbar from "@/app/_components/navbar"

const Login = () => {
  const [hasError, setHasError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  
  return (
    
    <div  className={styles.container}>
        <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>

        <input 
        className={styles.input}
        type="email"
        placeholder="Digite seu email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        disabled={loading}
        />
        <input 
        className={styles.input}
        type="password"
        placeholder="Digite seu password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        disabled={loading}
        />
        <button 
        className={styles.button}
        disabled={loading}
        >Entrar
        </button>

        {hasError && 'ACESSO NEGADO'}
        {loading && 'Carregando...'}
        </div>
    </div>
  )
}

export default Login
