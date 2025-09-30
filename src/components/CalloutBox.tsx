import { ReactNode } from "react";

interface CalloutBoxProps {
  type?: 'info' | 'success' | 'warning' | 'primary';
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const CalloutBox = ({ type = 'info', children, icon, className = "" }: CalloutBoxProps) => {
  const styles = {
    info: 'bg-muted border-border text-muted-foreground',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    primary: 'bg-primary/5 border-primary/20 text-primary-dark'
  };

  return (
    <div className={`p-6 rounded-lg border-l-4 ${styles[type]} shadow-subtle ${className}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CalloutBox;