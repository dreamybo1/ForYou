import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/providers/router.tsx'
import Content from './app/layouts/content/Content.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Content>
        <RouterProvider router={router} />
    </Content>
  </StrictMode>,
)
