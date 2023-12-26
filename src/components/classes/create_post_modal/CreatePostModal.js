import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const CreatePostModal = () => {
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
      <Button type="primary" onClick={showModal} className="mx-4 mb-4 ml-4 text-xl text-black align-middle bg-cyan-600 hover:text-white hover:bg-cyan-500">
        Create Post
      </Button>
      <Modal
        open={open}
        title="Create New Post"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="text-black">
            Cancel
          </Button>,
          <Button key="back" onClick={handleCancel} className="text-black">
            Post
          </Button>,
        ]}
      >
        <div className="text-2xl text-cyan-600 mx-auto font-bold">Title</div>
        <form>
            <div className="mb-4">
                <input className="shadow appearance-none border rounded bg-gray-50 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Post Title"></input>
            </div>
        </form>
        <div className="text-2xl text-cyan-600 mx-auto font-bold mt-6">Content Post</div>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your post here."></textarea>
      </Modal>
    </>
  );
};
export default CreatePostModal;

