import React, { useEffect, useRef } from 'react';
import { PythonIDEController } from '../../../ui/views/python_ide.js';

export const PythonIDEView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<PythonIDEController | null>(null);

  useEffect(() => {
    if (!controllerRef.current) {
      controllerRef.current = new PythonIDEController();
    }
    const controller = controllerRef.current;

    // Direct root container targeting
    controller.getRoot = () => containerRef.current;
    controller.renderPythonIDE();

    return () => {
      document.body.classList.remove('in-ide-mode');
      document.documentElement.classList.remove('in-ide-mode');
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="python-ide-mount-point"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        background: 'var(--ide-bg, #1e1e1e)',
      }}
    />
  );
};
