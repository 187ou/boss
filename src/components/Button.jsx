const Button = ({
                  children,
                  variant = 'primary',
                  className = '',
                  shine = false,
                  ...props
                }) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300';
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-secondary hover:bg-gray-200 text-primary',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${shine ? 'shine-effect' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;