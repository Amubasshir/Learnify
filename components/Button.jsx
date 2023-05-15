import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';

const buttonVariants = cva(
  'rounded-lg transition-colors duration-300 flex justify-center ',
  {
    variants: {
      color: {
        primary: 'bg-black/90 text-white hover:bg-gray-800',
        danger: 'bg-rose text-white hover:bg-rose-600',
        secondary: 'bg-white text-black font-semibold hover:bg-gray-300',
      },
      size: {
        default: 'py-3 px-6',
        full: 'py-3 w-full',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'default',
    },
  }
);

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
