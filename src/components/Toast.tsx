import { ReactNode } from 'react';

type ToastProps = {
  children: ReactNode;
};

function Toast({ children }: ToastProps) {
  return (
    <div className="bg-green-600 h-10 w-[90%] fixed top-[0.15rem] rounded-md flex items-center p-2">
      <h3 className="text-white font-sans font-semibold">{children}</h3>
    </div>
  );
}

export default Toast;
