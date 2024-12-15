import React from 'react';
import { Boxes } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Boxes className="h-8 w-8 text-blue-600" />
      <span className="text-2xl font-bold text-blue-600">Uqase</span>
    </div>
  );
}