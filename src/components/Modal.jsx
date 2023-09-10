export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent/80 flex justify-center center items-center z-1000">
      <div className="w-[30%] bg-gray-500 p-5 shadow-lg rounded-[5px] shadow-blue-500/50">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
