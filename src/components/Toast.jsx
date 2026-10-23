import { useApp } from '../context/AppContext'

function Toast() {
  const { toast } = useApp()
  if (!toast) return null

  return (
    <div className={`toast toast-${toast.type}`} key={toast.id}>
      <span>{toast.type === 'success' ? '✅' : '⚠️'}</span>
      {toast.message}
    </div>
  )
}

export default Toast