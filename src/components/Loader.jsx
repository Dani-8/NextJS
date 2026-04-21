import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
      <Loader2 className="animate-spin" size={40} />
    </div>
  );
}