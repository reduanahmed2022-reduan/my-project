

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { TechItem } from './Types/tech';
import Navbar from './component/navbar';
import Hero from './component/Hero';
import TechCard from './component/TechCard';
// import StackSidebar from './component/StackSidebar';
// import Footer from './component/Footer';

function App() {
  const [techList, setTechList] = useState<TechItem[]>([]);
  const [myStack, setMyStack] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load technology data from JSON
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  // Add technology to sidebar stack
  const handleAddTech = (item: TechItem) => {
    const isAlreadyAdded = myStack.find((tech) => tech.id === item.id);
    
    if (isAlreadyAdded) {
      toast.warning(`${item.name} is already in your stack!`, { position: 'bottom-right' });
      return;
    }

    setMyStack([...myStack, item]);
    toast.success(`Added ${item.name} to stack`, { position: 'bottom-right' });
  };

  // Remove single item from stack
  const handleRemoveTech = (id: string) => {
    const itemToRemove = myStack.find((tech) => tech.id === id);
    const updatedStack = myStack.filter((tech) => tech.id !== id);
    setMyStack(updatedStack);

    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name}`, { position: 'bottom-right' });
    }
  };

  // Remove all items from stack
  const handleClearStack = () => {
    setMyStack([]);
    toast.error('Cleared all items from stack', { position: 'bottom-right' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 flex flex-col justify-between">
      <ToastContainer theme="light" />

      <div>
        <Navbar />
        <Hero />

        {/* Section Header */}
        <div id="tech" className="max-w-7xl mx-auto pt-10 px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Explore the{' '}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Section */}
        <main className="max-w-7xl mx-auto py-6 px-6">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Technology List (3 Columns) */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techList.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handleAddTech}
                      isAdded={myStack.some((item) => item.id === tech.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Stack Sidebar (1 Column) */}
              {/* <div className="lg:col-span-1">
                <StackSidebar
                  stack={myStack}
                  onRemove={handleRemoveTech}
                  onClearAll={handleClearStack}
                />
              </div> */}
            </div>
          )}
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;