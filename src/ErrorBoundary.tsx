import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Trash2 } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React error:', error, errorInfo);
  }

  private handleResetCache = () => {
    try {
      localStorage.removeItem('investai_etf_db_v2');
      localStorage.removeItem('investai_custom_etf_db');
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-2xl text-center">
            <div className="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center mx-auto border border-rose-500/30">
              <AlertTriangle size={30} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">Ceva nu a funcționat corect</h2>
              <p className="text-sm text-slate-400">
                A apărut o eroare la încărcarea aplicației. Am prevenit blocarea ecranului și poți reîncărca aplicația sau reseta datele salvate local.
              </p>
            </div>
            {this.state.error && (
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-left">
                <p className="text-xs font-mono text-rose-300 break-words">
                  {this.state.error.message || String(this.state.error)}
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <RefreshCw size={16} /> Reîncarcă
              </button>
              <button
                onClick={this.handleResetCache}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-slate-700 transition-colors text-sm"
              >
                <Trash2 size={16} /> Resetează Cache
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
