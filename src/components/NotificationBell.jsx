import React, { useState, useEffect, useCallback } from 'react';
import { Bell, AlertCircle, CheckCircle, XCircle, Loader2, ShoppingCart, Store, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { io, Socket } from 'socket.io-client'; // Import socket.io-client

// Mock API and Data (Replace with your actual API calls)
// ------------------------------------------------------

// Mock API functions (replace with your actual API calls)
const fetchNotifications = async (recipientType: string, recipientId: string) => {
    // Simulate fetching notifications from a database.
    // In a real application, you'd make an API call to your server.
    console.log(`Fetching notifications for ${recipientType} with ID: ${recipientId}`);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

    // Mock data (replace with actual data from your database)
    const mockData = [
        {
            id: '1',
            type: 'order',
            recipientType: 'customer',
            recipientId: 'user123',
            title: 'Order Shipped',
            message: 'Your order (#1234) has been shipped!',
            createdAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
            read: false,
            link: '/order/1234',
        },
        {
            id: '2',
            type: 'message',
            recipientType: 'customer',
            recipientId: 'user123',
            title: 'New Message',
            message: 'You have a new message from the seller.',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
            read: true,
            link: '/messages/5678',
        },
        {
            id: '3',
            type: 'review',
            recipientType: 'vendor',
            recipientId: 'vendor456',
            title: 'New Review',
            message: 'Your product has received a new review.',
            createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
            read: false,
            link: '/product/review/123',
        },
        {
            id: '4',
            type: 'order',
            recipientType: 'vendor',
            recipientId: 'vendor456',
            title: 'New Order',
            message: 'You have a new order (#9876)!',
            createdAt: new Date(),
            read: false,
            link: '/order/9876',
        },
        {
            id: '5',
            type: 'stock',
            recipientType: 'admin',
            recipientId: 'admin789',
            title: 'Low Stock',
            message: 'Product "Widget X" is running low on stock.',
            createdAt: new Date(),
            read: false,
            link: '/admin/products/widget-x',
        },
        {
            id: '6',
            type: 'user',
            recipientType: 'admin',
            recipientId: 'admin789',
            title: 'New User Registration',
            message: 'A new user has registered on the platform.',
            createdAt: new Date(),
            read: true,
            link: '/admin/users',
        },
    ];

    // Filter notifications based on recipientType and recipientId
    const filteredNotifications = mockData.filter(
        (n) => n.recipientType === recipientType && n.recipientId === recipientId
    );
    return filteredNotifications;
};

const markAsRead = async (notificationId: string) => {
    // Simulate marking a notification as read in the database.
    // In a real application, you'd make an API call to your server.
    console.log(`Marking notification ${notificationId} as read`);
    await new Promise((resolve) => setTimeout(resolve, 200)); // Simulate network delay
    return true; // Indicate success
};

const markAllAsRead = async (recipientType: string, recipientId: string) => {
    console.log(`Marking all notifications as read for ${recipientType} and ${recipientId}`);
    await new Promise((resolve) => setTimeout(resolve, 200));
    return true;
};

const deleteNotification = async (notificationId: string) => {
    // Simulate deleting a notification from the database
    console.log(`Deleting notification ${notificationId}`);
    await new Promise((resolve) => setTimeout(resolve, 200));
    return true;
};

const getNotificationIcon = (type: string) => {
    switch (type) {
        case 'order':
            return <ShoppingCart className="h-4 w-4" />;
        case 'message':
            return <Bell className="h-4 w-4" />;
        case 'review':
            return <CheckCircle className="h-4 w-4" />;
        case 'stock':
            return <AlertCircle className="h-4 w-4" />;
        case 'user':
            return <Users className="h-4 w-4" />;
        case 'orderConfirmation':
            return <CheckCircle className="h-4 w-4" />;
        case 'orderShipped':
            return <ShoppingCart className="h-4 w-4" />;
        case 'follower':
            return <Users className="h-4 w-4" />;
        case 'accountApproved':
            return <ShieldCheck className="h-4 w-4" />;
        default:
            return <Bell className="h-4 w-4" />;
    }
};

const getNotificationTitle = (type: string) => {
    switch (type) {
        case 'order':
            return 'New Order';
        case 'message':
            return 'New Message';
        case 'review':
            return 'New Review';
        case 'stock':
            return 'Low Stock Alert';
        case 'user':
            return 'New User';
        case 'orderConfirmation':
            return 'Order Confirmation';
        case 'orderShipped':
            return 'Order Shipped';
        case 'follower':
            return 'New Follower';
        case 'accountApproved':
            return 'Account Approved';
        default:
            return 'Notification';
    }
};

interface Notification {
    id: string;
    type: string;
    recipientType: string;
    recipientId: string;
    title: string;
    message: string;
    createdAt: Date;
    read: boolean;
    link: string;
    data?: any; // Add data field to the interface
}

const NotificationBell = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [socket, setSocket] = useState<Socket | null>(null);

    const userType = localStorage.getItem('userType'); // 'customer', 'vendor', or 'admin'
    const userId = localStorage.getItem('userId');    //  Replace with actual user ID

    // Initialize Socket.IO connection
    useEffect(() => {
        // Replace 'http://localhost:5000' with your actual server address
        const newSocket = io('http://localhost:5000'); // Connect to your server
        setSocket(newSocket);

        // Clean up the socket connection when the component unmounts
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Fetch notifications on component mount and when a new notification is received
    const fetchAndSetNotifications = useCallback(async () => {
        if (!userType || !userId) return; // Don't fetch if user info is missing
        setLoading(true);
        setError(null);
        try {
            const fetchedNotifications = await fetchNotifications(userType, userId);
            setNotifications(fetchedNotifications);
            setUnreadCount(fetchedNotifications.filter((n) => !n.read).length);
        } catch (err: any) {
            setError(err.message || 'Failed to fetch notifications');
        } finally {
            setLoading(false);
        }
    }, [userType, userId]);

    useEffect(() => {
        fetchAndSetNotifications();

        // Listen for new notifications from the server using Socket.IO
        if (socket) {
            socket.on('notification', (newNotification: Notification) => {
                // Check if the notification is for the current user
                if (newNotification.recipientType === userType && newNotification.recipientId === userId) {
                    setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
                    setUnreadCount((prevCount) => prevCount + (newNotification.read ? 0 : 1));
                }
            });
        }

        // Cleanup function to disconnect from the mock WebSocket
        return () => {
            if (socket) {
                socket.off('notification');
            }
        };
    }, [fetchAndSetNotifications, userType, userId, socket]);

    // Join Socket.IO room on component mount, and whenever userId changes
    useEffect(() => {
        if (socket && userId) {
            socket.emit('join', userId); // Join the user's room
        }
    }, [socket, userId]);

    const handleMarkAsRead = async (notificationId: string) => {
        try {
            await markAsRead(notificationId);
            setNotifications((prevNotifications) =>
                prevNotifications.map((n) =>
                    n.id === notificationId ? { ...n, read: true } : n
                )
            );
            setUnreadCount((prevCount) => Math.max(0, prevCount - 1)); // Prevent negative count
        } catch (err: any) {
            console.error('Failed to mark as read:', err);
            // Optionally show an error message to the user
        }
    };

    const handleMarkAllAsRead = async () => {
        try {
            await markAllAsRead(userType!, userId!);
            setNotifications((prevNotifications) =>
                prevNotifications.map((n) => ({ ...n, read: true }))
            );
            setUnreadCount(0);
        } catch (err: any) {
            console.error('Failed to mark all as read:', err);
        }
    };

    const handleDeleteNotification = async (notificationId: string) => {
        try {
            await deleteNotification(notificationId);
            setNotifications(prevNotifications => prevNotifications.filter(n => n.id !== notificationId));
        } catch (error) {
            console.error("Failed to delete notification", error);
        }
    };

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return 'Good Morning';
        } else if (hour < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    };

    const renderNotificationContent = (notification: Notification) => {
        switch (notification.type) {
            case 'order':
                return (
                    <p>
                        You have a new order: <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            {notification.message.split('#')[1]}
                        </a>
                    </p>
                );
            case 'message':
                return (
                    <p>
                        You have a new message: <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            View message
                        </a>
                    </p>
                );
            case 'review':
                return (
                    <p>
                        Your product has a new review: <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            View review
                        </a>
                    </p>
                );
            case 'stock':
                return (
                    <p>
                        {notification.message}.  <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            View product
                        </a>
                    </p>
                );
            case 'user':
                return (
                    <p>
                        A new user has registered. <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            View users
                        </a>
                    </p>
                );
            case 'orderConfirmation':
                return (
                    <p>
                        Your order has been confirmed. <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            View order
                        </a>
                    </p>
                );
            case 'orderShipped':
                return (
                    <p>
                        Your order has shipped. <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            Track order
                        </a>
                    </p>
                );
            case 'follower':
                return (
                    <p>
                        You have a new follower! <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            View followers
                        </a>
                    </p>
                );
            case 'accountApproved':
                return (
                    <p>
                        Your account has been approved! <a href={notification.link} className="font-semibold text-blue-500 hover:underline">
                            Go to your dashboard.
                        </a>
                    </p>
                );
            default:
                return <p>{notification.message}</p>;
        }
    };

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative"
            >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                    <Badge
                        variant="secondary"
                        className="absolute -top-1 -right-1 rounded-full text-xs px-1.5"
                    >
                        {unreadCount}
                    </Badge>
                )}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Bell className="h-5 w-5 text-gray-500" />
                                    Notifications
                                </CardTitle>
                                <CardDescription>
                                    {loading ? 'Fetching notifications...' :
                                        notifications.length === 0 ? `No notifications for ${getGreeting()}!` :
                                            `You have ${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}.`}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {loading ? (
                                    <div className="flex items-center justify-center py-4">
                                        <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
                                    </div>
                                ) : error ? (
                                    <div className="text-red-500 py-4">Error: {error}</div>
                                ) : notifications.length === 0 ? (
                                    <div className="py-4 text-gray-500">No notifications.</div>
                                ) : (
                                    <ScrollArea className="h-72 pr-2">
                                        <div className="space-y-2">
                                            {notifications.map((notification) => (
                                                <motion.div
                                                    key={notification.id}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.15 }}
                                                    className={cn(
                                                        "p-2 rounded-md flex items-start gap-3 group",
                                                        notification.read ? "bg-gray-100 hover:bg-gray-100/80" : "bg-white hover:bg-gray-50",
                                                        "transition-colors duration-200"
                                                    )}
                                                >
                                                    <div className="min-w-[24px]">{getNotificationIcon(notification.type)}</div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between gap-2 mb-1">
                                                            <h4 className={cn(
                                                                "text-sm font-medium",
                                                                notification.read ? "text-gray-500" : "text-gray-900"
                                                            )}>
                                                                {getNotificationTitle(notification.type)}
                                                            </h4>
                                                            <time
                                                                dateTime={notification.createdAt.toISOString()}
                                                                className={cn(
                                                                    "text-xs text-gray-500",
                                                                    notification.read && "text-gray-400"
                                                                )}
                                                            >
                                                                {notification.createdAt.toLocaleDateString()}
                                                            </time>
                                                        </div>
                                                        <div className={cn(
                                                            "text-sm",
                                                            notification.read ? "text-gray-500" : "text-gray-700"
                                                        )}>
                                                            {renderNotificationContent(notification)}
                                                        </div>
                                                    </div>
                                                    {!notification.read && (
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleMarkAsRead(notification.id)}
                                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleDeleteNotification(notification.id)}
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <XCircle className="h-4 w-4 text-gray-500" />
                                                    </Button>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                )}
                                {notifications.length > 0 && (
                                    <div className="pt-4 border-t border-gray-200">
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={handleMarkAllAsRead}
                                            disabled={unreadCount === 0}
                                        >
                                            Mark all as read
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationBell;