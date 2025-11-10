
import React, { useState, useEffect } from 'react';
import { Modal } from './components/Modal';
import { Glossary } from './components/Glossary';

const App: React.FC = () => {
  const [isArpaModalOpen, setIsArpaModalOpen] = useState(false);
  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isResultsModalOpen) {
      const targetScore = 8.5;
      setScore(0); // Reset score to 0 before starting animation
      
      const timer = setTimeout(() => {
        let currentScore = 0;
        const interval = setInterval(() => {
          currentScore += 0.1;
          if (currentScore >= targetScore) {
            setScore(targetScore);
            clearInterval(interval);
          } else {
            setScore(parseFloat(currentScore.toFixed(1)));
          }
        }, 20);
      }, 300); // Delay to sync with modal opening animation

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isResultsModalOpen]);


  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex items-center justify-center p-4">
      <main className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-8 md:p-12 transition-shadow hover:shadow-2xl duration-500 my-12">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">
            Monitoraggio torrente Diebra
          </h1>
          <p className="text-slate-500 mt-2">Ricerca della classe 2^T - Liceo Scientifico Edoardo Amaldi</p>
        </header>

        <section className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2 mb-4">Introduzione</h2>
          <p>
            Lunedì 13 ottobre 2025 la classe 2^T del Liceo Scientifico Edoardo Amaldi con curvatura ambiente e sostenibilità si è recata a Nese, una frazione di Alzano Lombardo (BG). 
            La classe si è recata sul territorio lungo il torrente Diebra. Insieme a Cerea Silvia, una esperta appartenente all’associazione ARPA.
          </p>
          <div className="pt-2">
            <strong 
              className="text-blue-600 font-semibold cursor-pointer hover:text-blue-800 hover:underline active:text-blue-900 active:scale-[0.98] transition-all duration-200 inline-block"
              onClick={() => setIsArpaModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsArpaModalOpen(true);
                }
              }}
            >
              Ma cos'è ARPA?
            </strong>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2 mb-4">
            Posizione del Rilevamento
          </h2>
          <div className="mt-4 rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1826.5000973433305!2d9.710030014227408!3d45.74983298265743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ0JzU5LjQiTiA5wrA0Mic0My4zIkU!5e1!3m2!1sit!2sit!4v1761309097269!5m2!1sit!2sit"
              className="w-full h-96 md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa della posizione del torrente Diebra"
            ></iframe>
          </div>
        </section>
        
        <section className="mt-10 space-y-6 text-lg text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2 mb-4">L'attività</h2>
          <p>
            Per osservare i parametri chimici del torrente la classe ha utilizzato una sonda multiparametrica che ha immerso nel torrente. I ragazzi si sono divisi in 5 gruppi, ognuno dei quali ha dovuto analizzare un tratto della Diebra.
          </p>
          <p>
            Per rilevare la presenza di{' '}
            <span className="relative group cursor-help">
              <span className="font-semibold text-blue-600 border-b-2 border-dotted border-blue-400">
                macroinvertebrati
              </span>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-slate-800 text-white text-base rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                Organismi invertebrati di dimensioni superiori al millimetro, quindi visibili a occhio nudo, che vivono a stretto contatto con i fondali degli ambienti acquatici.
                <svg className="absolute text-slate-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
                </svg>
              </span>
            </span>
            {' '}nel torrente ha raschiato cinque volte per gruppo il torrente, con uno strumento specifico chiamato surber che ha permesso di esaminare un’area di torrente pari a 0,1 m². Dopo hanno smosso i sassi per far scivolare i microrganismi all’interno di un cilindro posizionato sul fondo del retino. Successivamente è stato utilizzato uno spazzolino per prelevare le diatomee che poi sono state osservate al microscopio.
          </p>
        </section>

        <section className="mt-10">
            <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2 mb-6">
                Materiali Utilizzati
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-slate-700">
                
                <div className="flex flex-col items-center justify-center p-4 bg-slate-100/80 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white border border-transparent hover:border-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-blue-800 mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5v3.75h-7.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v10.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3" />
                    </svg>
                    <span className="font-semibold text-sm">Sonda</span>
                </div>
                
                <div className="flex flex-col items-center justify-center p-4 bg-slate-100/80 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white border border-transparent hover:border-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-blue-800 mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75v16.5m4.5-16.5v16.5M3.75 9.75h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <span className="font-semibold text-sm">Surber</span>
                </div>

                <div className="flex flex-col items-center justify-center p-4 bg-slate-100/80 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white border border-transparent hover:border-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-blue-800 mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25l7.5-7.5m-7.5 0h9v-3h-9v3zM6 9.75V7.5m3 2.25V7.5m3 2.25V7.5" />
                    </svg>
                    <span className="font-semibold text-sm">Spazzolini</span>
                </div>

                <div className="flex flex-col items-center justify-center p-4 bg-slate-100/80 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white border border-transparent hover:border-blue-200 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-blue-800 mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 18.75V9.75a2.25 2.25 0 00-2.25-2.25h-2.5A2.25 2.25 0 008 9.75v9M8.25 9.75V8.25a1.5 1.5 0 011.5-1.5h.75a1.5 1.5 0 011.5 1.5v1.5m-3 0h3m-3.75 6h5.25m-5.25 0a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h0" />
                    </svg>
                    <span className="font-semibold text-sm">Guanti impermeabili</span>
                </div>

                <div className="flex flex-col items-center justify-center p-4 bg-slate-100/80 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white border border-transparent hover:border-blue-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-blue-800 mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5v3.857a2.25 2.25 0 01-2.25 2.25h-5.5a2.25 2.25 0 01-2.25-2.25v-3.857M19 14.5L14.25 10M5 14.5L9.75 10" />
                    </svg>
                    <span className="font-semibold text-sm">Microscopi</span>
                </div>

            </div>
        </section>

        <section className="mt-10">
            <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2 mb-6">
                Risultati
            </h2>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Osservazioni Generali</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-slate-100/80 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.456L12.75 18l1.177-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.177a3.375 3.375 0 002.456 2.456L20.25 18l-1.177.398a3.375 3.375 0 00-2.456 2.456z" />
                            </svg>
                            <p className="font-medium text-slate-700 mt-2 text-sm">Acqua limpida e trasparente</p>
                        </div>
                        <div className="bg-slate-100/80 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                            <p className="font-medium text-slate-700 mt-2 text-sm">Nessuna pioggia nei 7 giorni precedenti</p>
                        </div>
                        <div className="bg-slate-100/80 p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 19.5L19.5 16.5m0 0V19.5m0-3h-3" />
                            </svg>
                            <p className="font-medium text-slate-700 mt-2 text-sm">Regime idrologico: Magra</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Parametri di Campo</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="bg-blue-100/50 p-4 rounded-xl text-center border border-blue-200">
                            <span className="text-sm text-blue-800 font-semibold">Temperatura</span>
                            <p className="text-2xl font-bold text-blue-900 mt-1">13,1°C</p>
                        </div>
                        <div className="bg-blue-100/50 p-4 rounded-xl text-center border border-blue-200">
                            <span className="text-sm text-blue-800 font-semibold">Ossigeno (O₂)</span>
                            <p className="text-2xl font-bold text-blue-900 mt-1">10,32 <span className="text-base font-normal">g/mL</span></p>
                        </div>
                        <div className="bg-blue-100/50 p-4 rounded-xl text-center border border-blue-200">
                            <span className="text-sm text-blue-800 font-semibold">O₂ Saturazione</span>
                            <p className="text-2xl font-bold text-blue-900 mt-1">98,2%</p>
                        </div>
                        <div className="bg-blue-100/50 p-4 rounded-xl text-center border border-blue-200">
                            <span className="text-sm text-blue-800 font-semibold">pH</span>
                            <p className="text-2xl font-bold text-blue-900 mt-1">8,12</p>
                        </div>
                        <div className="bg-blue-100/50 p-4 rounded-xl text-center border border-blue-200 col-span-2 sm:col-span-1">
                            <span className="text-sm text-blue-800 font-semibold">Conduttività</span>
                            <p className="text-2xl font-bold text-blue-900 mt-1">367,0 <span className="text-base font-normal">μS/cm</span></p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Composizione del Fondale</h3>
                    <div className="space-y-4 text-slate-700 text-sm sm:text-base">
                        <div className="flex items-center gap-4">
                            <span className="w-32 sm:w-44 shrink-0 font-medium text-right">Ghiaia</span>
                            <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full flex items-center justify-end px-2 text-white text-xs font-bold" style={{ width: '50%' }}>50%</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-32 sm:w-44 shrink-0 font-medium text-right">Pietre piccole</span>
                            <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full flex items-center justify-end px-2 text-white text-xs font-bold" style={{ width: '20%' }}>20%</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-32 sm:w-44 shrink-0 font-medium text-right">Pietre medie</span>
                            <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full flex items-center justify-end px-2 text-white text-xs font-bold" style={{ width: '20%' }}>20%</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-32 sm:w-44 shrink-0 font-medium text-right">Pietre e massi rocciosi</span>
                            <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full flex items-center justify-end px-2 text-white text-xs font-bold min-w-[4ch]" style={{ width: '5%' }}>5%</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-32 sm:w-44 shrink-0 font-medium text-right">Pietre grossolane</span>
                            <div className="w-full bg-slate-200 rounded-full h-6 overflow-hidden">
                                <div className="bg-blue-500 h-full rounded-full flex items-center justify-end px-2 text-white text-xs font-bold min-w-[4ch]" style={{ width: '5' }}>5%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Glossary />

        <section className="mt-10 text-lg text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2 mb-4">
            Conclusioni
          </h2>
          <p>
            Dopo aver esaminato la tabella a doppia entrata la classe ha stabilito lo stato del ruscello Diebra. Visto che il range dei dati è tra 8 e 9 lo stato del torrente è buono.
          </p>
           <div className="mt-6 text-center">
            <button
              onClick={() => setIsResultsModalOpen(true)}
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Mostra Risultati Rilevazione
            </button>
          </div>
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-slate-200">
            <img 
              src="https://files.catbox.moe/agfc07.jpg" 
              alt="Tabella a doppia entrata per la valutazione dello stato del torrente" 
              className="w-full object-contain bg-white"
            />
          </div>
        </section>

      </main>

      <Modal
        isOpen={isArpaModalOpen}
        onClose={() => setIsArpaModalOpen(false)}
        title={
            <a 
              href="https://www.arpalombardia.it/temi-ambientali/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-700 active:text-blue-800 transition-colors duration-200"
            >
              ARPA Lombardia
            </a>
          }
      >
        <div className="flex justify-center mb-6">
          <img 
            src="https://files.catbox.moe/nssgxm.jpg" 
            alt="Logo ARPA Lombardia" 
            className="h-20 object-contain"
          />
        </div>
        <p>
          ARPA Lombardia è l'Agenzia Regionale per la Protezione dell'Ambiente della Lombardia, un ente pubblico con autonomia amministrativa che si occupa della tutela e della prevenzione ambientale in regione. Svolge attività tecnico-scientifiche per monitorare la qualità dell'aria, dell'acqua e del suolo, controlla le emissioni e fornisce supporto alle istituzioni locali e ai cittadini.
        </p>
      </Modal>

      <Modal 
        isOpen={isResultsModalOpen} 
        onClose={() => setIsResultsModalOpen(false)} 
        title="Risultato della Rilevazione"
      >
        <div className="text-center p-2">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Indice di Qualità dell'Acqua (IBE)</h3>
            <p className="text-sm text-slate-500 mb-6">Il punteggio indica lo stato di salute del torrente su una scala da 0 a 10.</p>
            
            <div className="relative w-full bg-slate-200 rounded-full h-8 mb-2 shadow-inner">
                <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-8 rounded-full transition-all duration-[2000ms] ease-out flex items-center justify-center text-white font-bold"
                    style={{ width: `${(score / 10) * 100}%` }}
                >
                  <span className="transition-opacity duration-500" style={{opacity: score > 1 ? 1 : 0}}>
                    {score.toFixed(1)}
                  </span>
                </div>
            </div>

            <div className="flex justify-between text-xs text-slate-500 px-1 font-medium">
                <span>Pessimo</span>
                <span>Sufficiente</span>
                <span>Eccellente</span>
            </div>

            <div className="mt-8 bg-blue-50/70 p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-800">Stato: BUONO</p>
                <p className="text-slate-600 mt-1">L'ecosistema acquatico è in buone condizioni e ben equilibrato.</p>
            </div>
        </div>
      </Modal>

    </div>
  );
};

export default App;