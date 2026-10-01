import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ type, message, onClose }) {
  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300 max-w-md">
      <div
        className={`flex items-center gap-3 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl ${
          isSuccess
            ? 'bg-zinc-950/90 border-emerald-500/50 text-emerald-300 shadow-emerald-950/50'
            : 'bg-zinc-950/90 border-rose-500/50 text-rose-300 shadow-rose-950/50'
        }`}
      >
        {isSuccess ? (
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle className="w-6 h-6 text-rose-400 shrink-0" />
        )}
        
        <div className="flex-1 text-sm font-medium">
          {message}
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
