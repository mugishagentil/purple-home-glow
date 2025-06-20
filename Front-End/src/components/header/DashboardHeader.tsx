
import React from 'react';
import { Bell, Moon, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1"></div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Moon className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" className="text-gray-600">
            Log out
          </Button>
        </div>
      </div>
    </header>
  );
};
