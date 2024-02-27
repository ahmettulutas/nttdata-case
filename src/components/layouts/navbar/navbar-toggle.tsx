type ToggleProps = {
  open: boolean;
  toggle: () => void;
};

export const NavbarToggle: React.FC<ToggleProps> = ({ open, toggle }) => (
  <button onClick={toggle} aria-label='navbar-toggle'>
    <div
      className={`${open ? 'transform rotate-[45deg] translate-x-[-2px] translate-y-[6px]' : ''} bg-black h-0.5 w-6 transition-all duration-300 ease-in`}
    />
    <div
      className={`${open ? 'hidden' : ''} bg-black h-0.5 w-6 transition-all duration-300 ease-in mt-1`}
    />
    <div
      className={`${open ? 'transform rotate-[-45deg] translate-x-[-2px] translate-y-[2px]' : ''} bg-black h-0.5 w-6 transition-all duration-300 ease-in mt-1`}
    />
  </button>
);
