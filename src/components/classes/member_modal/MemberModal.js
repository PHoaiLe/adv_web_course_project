"use client";

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} className="text-black bg-indigo-500">
        Danh sách lớp
      </Button>
      <Modal
        open={open}
        title="Class Members"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="text-black">
            Return
          </Button> 
        ]}
      >
        <div className="text-2xl text black mx-auto font-bold">Teachers</div>
        <div className="border-t-2 border-cyan-400">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <div class="divide-y divide-slate-500 font-semibold text-xl text-gray-700">
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Toan Hao</h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Anh Le</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="text-2xl text black mx-auto font-bold">Students</div>
        <div className="border-t-2 border-cyan-400">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <div class="divide-y divide-slate-500 font-semibold text-xl text-gray-700">
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Phuong Le </h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Le Phuong</h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">lhphuong20</h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">bhtoan400</h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Anh</h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">20127999</h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">xautraihaysuy</h2>
                    </div>
                </div>
                <div className="p-4 md:w-auto flex">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">lanhlungboy</h2>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
      </Modal>
    </>
  );
};
export default App;