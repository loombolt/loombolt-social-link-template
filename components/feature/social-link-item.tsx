'use client';
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Import icons
import {
  ExternalLink,
  Link as LinkIcon,
} from 'lucide-react';

import type { ReactElement } from 'react';

export interface SocialLinkItemProps {
  title: string;
  url: string;
  icon: ReactElement;
  index?: number;
}

export const SocialLinkItem = memo(function SocialLinkItem({ title, url, icon, index = 0 }: SocialLinkItemProps) {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="w-full"
    >
      <Button
        asChild
        variant="outline"
        className={cn(
          "w-full flex items-center justify-between py-6 px-4 rounded-xl border border-border hover:bg-accent hover:text-accent-foreground transition-all",
          "group"
        )}
>
          <Link href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
          <div className="text-muted-foreground group-hover:text-current">
            {icon || <LinkIcon className="h-5 w-5" />}
          </div>
          <span className="font-medium">{title}</span>
            <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-current opacity-70" />
  </Link>
      </Button>
    </motion.div>
  );
});
