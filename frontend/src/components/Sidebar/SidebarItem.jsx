const SidebarItem = ({
  icon,
  label,
  link
}) => {

  return (
    <a href={link}>
      {icon}
      {label}
    </a>
  );

};

export default SidebarItem;