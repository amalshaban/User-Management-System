import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import 'react-router-dom'
import 'react-toastify/ReactToastify.css'
import App from './Components/Shared/App/App.tsx'
import AuthContextProvider from './context/AuthContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <AuthContextProvider>
        <App/>
    </AuthContextProvider>
    
    
   
)
