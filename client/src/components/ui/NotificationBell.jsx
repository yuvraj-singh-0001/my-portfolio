import React, { useState, useEffect } from 'react';
import { Bell, Check, X, Mail } from 'lucide-react';

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Mock notifications - in real app, these would come from your backend
  useEffect(() => {
    const mockNotifications = [
      {
        id: 1,
        title: 'New Project Inquiry',
        message: 'John wants to discuss a website project',
        time: '2 mins ago',
        read: false,
        type: 'email'
      },
      {
        id: 2,
        title: 'Email Received',
        message: 'Sarah sent you a project proposal',
        time: '1 hour ago',
        read: true,
        type: 'email'
      }
    ];
    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.read).length);
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const clearAll = () => {
    setNotifications([]);
    setUnreadCount(0);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative p-2 rounded-lg border border-gray-700 hover:border-neon-500 transition-colors group"
      >
        <Bell className="w-6 h-6 text-gray-300 group-hover:text-neon-500 transition-colors" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center animate-notification-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {showNotifications && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setShowNotifications(false)}
          />
          
          {/* Notification Panel */}
          <div className="absolute right-0 mt-2 w-80 glass-dark rounded-xl border border-gray-700 shadow-xl z-50 animate-fade-in">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold">Notifications</h3>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-xs text-gray-400 hover:text-neon-500 transition-colors"
                  >
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setShowNotifications(false)}
                  className="p-1 hover:bg-gray-800 rounded"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${
                      !notification.read ? 'bg-neon-500/5' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        notification.type === 'email' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        <Mail size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold">{notification.title}</h4>
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-1 hover:bg-gray-700 rounded"
                            >
                              <Check size={12} />
                            </button>
                          )}
                        </div>
                        <p className="text-sm text-gray-300 mt-1">{notification.message}</p>
                        <span className="text-xs text-gray-400 mt-2 block">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400">No notifications yet</p>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-700">
              <button className="w-full py-2 text-sm text-neon-500 hover:text-neon-400 transition-colors">
                View all notifications
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationBell;