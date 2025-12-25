-- Create usage tracking table
CREATE TABLE public.usage_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  words_count INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.usage_logs ENABLE ROW LEVEL SECURITY;

-- Users can view their own usage
CREATE POLICY "Users can view their own usage"
ON public.usage_logs
FOR SELECT
USING (auth.uid() = user_id);

-- Allow insert from edge functions (service role) and authenticated users
CREATE POLICY "Users can insert their own usage"
ON public.usage_logs
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create index for efficient monthly queries
CREATE INDEX idx_usage_logs_user_month ON public.usage_logs (user_id, created_at);