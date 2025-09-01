import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";

interface Tool {
  id: number;
  name: string;
  icon: string | React.ReactNode; // Puede ser un string o un componente de icono
  color: string;
}

interface ToolsProps {
  tools: Tool[];
}

const Tools: React.FC<ToolsProps> = ({ tools }) => {
  const { t, language } = useLanguage();

  return (
    <div className="w-full">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black uppercase tracking-wider">{t('education.tools')}</h2>
      
      <div className="grid grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div 
            key={tool.id} 
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-2 border border-primary"
            >
              <span className="text-3xl text-primary">{tool.icon}</span>
            </div>
            <span className="text-xs font-medium text-gray-700 text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;