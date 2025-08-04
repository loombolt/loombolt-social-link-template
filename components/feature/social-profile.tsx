'use client';
import React from 'react';
import { SocialLinkItem } from './social-link-item';
import { getActiveSocialLinks, getProfileInfo } from '@/constant/social-links';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SocialLink } from '@/constant/social-links';

export default function SocialProfile() {
  // Fetch profile info and active social links
  const { data: profileData } = getProfileInfo();
  const { data: socialLinks } = getActiveSocialLinks();
  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8"
      >
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={profileData.avatarUrl} alt={profileData.name} />
          <AvatarFallback>{profileData.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        
        <h1 className="text-2xl font-bold mb-2">{profileData.name}</h1>
        <p className="text-muted-foreground text-center max-w-xs">{profileData.bio}</p>
      </motion.div>

      <div className="space-y-3">
        {socialLinks && socialLinks.map((link: SocialLink, index: number) => (
          <SocialLinkItem
            key={link.id}
            title={link.title}
            url={link.url}
            icon={link.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
