import { Link, useNavigate } from "react-router-dom";
import { Bell, LogOut, Settings, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './styles.css';

const Menu = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: 'Notificações',
      icon: <Bell className="h-5 w-5" />,
      path: '/notificacoes',
    },
    {
      label: 'Perfil',
      icon: <User className="h-5 w-5" />,
      path: '/profile',
    },
    {
      label: 'Configurações',
      icon: <Settings className="h-5 w-5" />,
      path: '/settings',
    },
    {
      label: 'Sair',
      icon: <LogOut className="h-5 w-5" />,
      onClick: async () => {
        await logout();
        navigate('/login');
      },
    },
  ];

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="menu-overlay" onClick={onClose}>
      <div className="menu-container" onClick={(e) => e.stopPropagation()}>
        {menuItems.map((item) => (
          item.path ? (
            <Link
              key={item.label}
              to={item.path}
              className="menu-item"
              onClick={() => handleItemClick(item)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ) : (
            <button
              key={item.label}
              className="menu-item"
              onClick={() => handleItemClick(item)}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          )
        ))}
      </div>
    </div>
  );
};

export default Menu; 