import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Loader2, User, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface EditPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditPhotoModal = ({ isOpen, onClose }: EditPhotoModalProps) => {
  const { user, profile, refreshProfile } = useAuth();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!file.type.startsWith('image/')) {
      toast({ title: 'Invalid file', description: 'Please upload an image file.', variant: 'destructive' });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast({ title: 'File too large', description: 'Please upload an image smaller than 2MB.', variant: 'destructive' });
      return;
    }

    setIsUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/avatar.${fileExt}`;

      // Remove old avatar if exists (optional logic depending on bucket settings, but good practice)
      if (profile?.avatar_url) {
         // Logic to remove old could go here, but Supabase overwrite works for same path usually.
         // We use user.id/avatar so it overwrites.
      }

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Force cache bust
      const publicUrlWithTimestamp = `${publicUrl}?t=${new Date().getTime()}`;

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrlWithTimestamp })
        .eq('id', user.id);

      if (updateError) throw updateError;

      await refreshProfile();

      toast({
        title: '✨ Avatar updated!',
        description: 'Your profile picture has been changed.',
      });
      onClose();
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: 'Could not upload avatar. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeletePhoto = async () => {
    if (!user) return;
    setIsUploading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ avatar_url: null })
        .eq('id', user.id);

      if (error) throw error;
      
      await refreshProfile();
      toast({ title: 'Photo removed', description: 'Your profile photo has been removed.' });
      onClose();
    } catch {
       toast({ title: 'Error', description: 'Could not remove photo.', variant: 'destructive' });
    } finally {
        setIsUploading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-card border border-border rounded-xl shadow-2xl p-6 overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold font-display">Update Photo</h2>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full"><X className="w-5 h-5"/></Button>
            </div>

            <div className="flex justify-center mb-8">
                <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center overflow-hidden ring-4 ring-background shadow-xl">
                    {profile?.avatar_url ? (
                        <img src={profile.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <User className="w-16 h-16 text-muted-foreground/50" />
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                />
                <Button 
                    variant="default" 
                    className="w-full gap-2" 
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                >
                    {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                    Upload New
                </Button>
                <Button 
                    variant="outline" 
                    className="w-full gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={handleDeletePhoto}
                    disabled={isUploading || !profile?.avatar_url}
                >
                    <Trash2 className="w-4 h-4" />
                    Remove
                </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
