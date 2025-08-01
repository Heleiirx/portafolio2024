import React from 'react';

interface Tool {
  id: number;
  name: string;
  icon: string;
  color: string;
}

interface ToolsProps {
  tools: Tool[];
}

const Tools: React.FC<ToolsProps> = ({ tools }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black uppercase tracking-wider">HERRAMIENTAS</h2>
      
      <div className="grid grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div 
            key={tool.id} 
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
              style={{ backgroundColor: tool.color }}
            >
              <span className="text-2xl">{tool.icon}</span>
            </div>
            <span className="text-xs font-medium text-gray-700 text-center">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;