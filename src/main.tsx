import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { LandingV2 } from './v2/LandingV2.tsx'
import { LegalPage } from './v2/LegalPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingV2 version="complete" />} />
        <Route path="/v2-ivan" element={<LandingV2 />} />
        <Route path="/v2-white" element={<LandingV2 variant="white" />} />
        <Route path="/v2-whatsapp" element={<LandingV2 goal="whatsapp" />} />
        <Route path="/v2-dark-whatsapp" element={<LandingV2 goal="whatsapp" />} />
        <Route path="/v2-white-whatsapp" element={<LandingV2 variant="white" goal="whatsapp" />} />
        <Route path="/v2-completa" element={<LandingV2 version="complete" />} />
        <Route path="/v2-completa-white" element={<LandingV2 variant="white" version="complete" />} />
        <Route path="/v2-completa-whatsapp" element={<LandingV2 goal="whatsapp" version="complete" />} />
        <Route path="/v2-completa-white-whatsapp" element={<LandingV2 variant="white" goal="whatsapp" version="complete" />} />
        <Route path="/legal/termos" element={<LegalPage type="termos" />} />
        <Route path="/legal/privacidade" element={<LegalPage type="privacidade" />} />
        <Route path="/legal/cancelamento" element={<LegalPage type="cancelamento" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
