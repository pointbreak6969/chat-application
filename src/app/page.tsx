"use client"
import React from 'react'
import ChatList from '@/components/Chatlist'
import { format, isYesterday, isToday } from 'date-fns';

const page = () => {
  // Helper function to format dates intelligently
  // const formatChatDate = (date: Date) => {
  //   if (isToday(date)) {
  //     return format(date, 'h:mm a');
  //   } else if (isYesterday(date)) {
  //     return 'Yesterday';
  //   } else {
  //     return format(date, 'M/d/yy');
  //   }
  // };

  // const mockChats = [
  //   {
  //     id: "1",
  //     name: "Alex Johnson",
  //     lastMessage: "Hey, are we still meeting tomorrow?",
  //     timestamp: formatChatDate(new Date(2025, 3, 16, 14, 32)),
  //     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  //     unreadCount: 3
  //   },
  //   {
  //     id: "2",
  //     name: "Sarah Williams",
  //     lastMessage: "I sent you the project files",
  //     timestamp: formatChatDate(new Date(2025, 3, 16, 11, 15)),
  //     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  //     unreadCount: 1
  //   },
  //   {
  //     id: "3",
  //     name: "Team Discussion",
  //     lastMessage: "Mike: Let's finalize the proposal by Friday",
  //     timestamp: formatChatDate(new Date(2025, 3, 15, 18, 22)),
  //     avatar: "https://ui-avatars.com/api/?name=Team+Discussion&background=random"
  //   },
  //   {
  //     id: "4",
  //     name: "James Wilson",
  //     lastMessage: "Thanks for your help!",
  //     timestamp: formatChatDate(new Date(2025, 3, 15, 9, 10)),
  //     avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  //   },
  //   {
  //     id: "5",
  //     name: "Emily Parker",
  //     lastMessage: "Can you send me the link to the meeting?",
  //     timestamp: formatChatDate(new Date(2025, 3, 14, 16, 45)),
  //     avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  //     unreadCount: 2
  //   },
  //   {
  //     id: "6",
  //     name: "David Thompson",
  //     lastMessage: "I'll be there in 10 minutes",
  //     timestamp: formatChatDate(new Date(2025, 3, 13, 12, 30)),
  //     avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  //   },
  //   {
  //     id: "7",
  //     name: "Marketing Team",
  //     lastMessage: "Lisa: Here's the updated campaign schedule",
  //     timestamp: formatChatDate(new Date(2025, 3, 12, 15, 0)),
  //     avatar: "https://ui-avatars.com/api/?name=Marketing+Team&background=random"
  //   },
  //   {
  //     id: "8",
  //     name: "Tech Support",
  //     lastMessage: "Your ticket #4587 has been resolved",
  //     timestamp: formatChatDate(new Date(2025, 3, 10, 9, 15)),
  //     avatar: "https://ui-avatars.com/api/?name=Tech+Support&background=0D8ABC&color=fff"
  //   }
  // ];

  return (
    <div>page
      
    </div>
  )
}

export default page