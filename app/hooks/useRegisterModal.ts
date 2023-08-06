import { create } from 'zustand';

interface registerModuleStore {
    isOpen: boolean;
    onOpen: () => void
    onClose: () => void
}

const useRegisterModal = create<registerModuleStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal