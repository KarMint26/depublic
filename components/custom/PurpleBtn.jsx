export default function PurpleBtn({ textContent, nextHandler }) {
  return (
    <div
      onClick={nextHandler}
      className={`btn-view-package justify-center items-center text-[#EEEEEE] bg-primary Mobile-L:w-pwa w-full z-50 p-3 font-bold text-xs Mobile-M:text-sm fixed bottom-0 text-center cursor-pointer`}
    >
      {textContent}
    </div>
  );
}
