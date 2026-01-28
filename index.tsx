
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const startApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Erro Fatal: Elemento #root não encontrado no DOM.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Erro ao renderizar App:", error);
    rootElement.innerHTML = `
      <div style="height:100vh;display:flex;align-items:center;justify-center;background:#1e293b;color:white;font-family:sans-serif;text-align:center;padding:20px;">
        <div>
          <h1 style="font-size:24px;margin-bottom:10px;">Ops! Algo deu errado no carregamento.</h1>
          <p>Tente recarregar a página ou limpar o cache do seu navegador.</p>
          <button onclick="window.location.reload()" style="margin-top:20px;padding:12px 24px;background:#3b82f6;border:none;border-radius:12px;color:white;font-weight:bold;cursor:pointer;">
            Recarregar Aplicativo
          </button>
        </div>
      </div>
    `;
  }
};

// Garantir que o app só inicie após o carregamento completo do DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
