import {FaUser, FaLock} from "react-icons/fa"

const Login = () => {
  return (
    <div className="container">
        <form>
            <h1>Acesse o sistema</h1>
            <div>
                <input type="email" placeholder='E-mail' />
                <FaUser className="icon" />
            </div>
            <div>
                <input type="password" placeholder='Senha' />
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                    <a href="#">Esqueceu de mim?</a>
                </label>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="#">Registrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login