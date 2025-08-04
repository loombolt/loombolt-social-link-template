// Social profile & links — in-memory constants
// add title,url and new icon to add more social links dont forget to update metadata in layout.tsx
// Default profile data
const defaultProfileInfo = {
  id: 'default',
  name: process.env.NEXT_PUBLIC_PROFILE_NAME || 'John Doe',
  bio: process.env.NEXT_PUBLIC_PROFILE_BIO || 'Digital creator & web developer',
  avatarUrl: process.env.NEXT_PUBLIC_PROFILE_AVATAR || 'https://gecogcwqthplfhptoccl.supabase.co/storage/v1/object/public/public-images/previews/loombolt_icon.png',
};

import { Twitter, Instagram, Github, Linkedin, Youtube, Facebook, Mail } from 'lucide-react';
import type { ReactElement } from 'react';

//social links add item here to add more social links
const SocialLink = [
  {
    id: 'twitter',
    title: 'Twitter',
    url: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/username',
    icon: <Twitter className="h-5 w-5" />,
    order: 1,
    active: true
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/username',
    icon: <Instagram className="h-5 w-5" />,
    order: 2,
    active: true
  },
  {
    id: 'youtube',
    title: 'Youtube',
    url: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/username',
    icon: <Youtube className="h-5 w-5" />,
    order: 3,
    active: true
  },
];

// Social Links Functions
export type SocialLink = {
  id: string;
  title: string;
  url: string;
  icon: ReactElement;
  order: number;
  active: boolean;
};

export type ProfileInfo = {
  id: string;
  name: string;
  bio: string;
  avatarUrl: string;
  theme: string;
};

/**
 * Get all social links
 */
export function getAllSocialLinks() {
  // Return the default social links
  return { data: SocialLink, error: null };
}

/**
 * Get active social links only
 */
export function getActiveSocialLinks() {
  // Filter active links and sort by order
  const activeLinks = SocialLink
    .filter(link => link.active)
    .sort((a, b) => a.order - b.order);
  
  return { data: activeLinks, error: null };
}

/**
 * Get a social link by ID
 */
export function getSocialLinkById(id: string) {
  const link = SocialLink.find(link => link.id === id);
  return { data: link || null, error: null };
}

/**
 * Get profile information
 */
export function getProfileInfo() {
  return { data: defaultProfileInfo, error: null };
}
