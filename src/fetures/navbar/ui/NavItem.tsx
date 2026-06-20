export const NavItem = ({
  icon: Icon,
  onClick,
  className,
  iconClassName,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  onClick: () => void
  className?: string
  iconClassName?: string
}) => {
  const IconSize = 16

  return (
    <li className={`mb-4 md:px-0 px-2 ${className || ''}`}>
      <button onClick={onClick} className="cursor-pointer">
        <Icon width={IconSize} height={IconSize} className={`fill-text ${iconClassName || ''}`} />
      </button>
    </li>
  )
}