export default function LoadingScreen() {
  return (
    <div className="loading-container fixed top-0 left-0 bg-white w-screen h-screen flex justify-center items-center z-[99999]">
      <div className="spinner"></div>
    </div>
  );
}
