import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import CargoFormSteps from './CargoFormSteps';

interface CargoFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CargoFormDialog: React.FC<CargoFormDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] h-[90vh] w-[90vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-6 py-4">
              <Dialog.Title className="text-xl font-semibold text-gray-900">
                Nova Carga
              </Dialog.Title>
              <Dialog.Close className="rounded-full p-1.5 hover:bg-gray-100">
                <X className="h-5 w-5 text-gray-500" />
              </Dialog.Close>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <CargoFormSteps onComplete={() => onOpenChange(false)} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CargoFormDialog;