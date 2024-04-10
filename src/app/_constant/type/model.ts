import type { Database } from './supabase';

export type User = Database['public']['Tables']['user']['Row'];

type StoryRow = Database['public']['Tables']['story']['Row'];

interface QuoteStory extends StoryRow {
  type: 'quote';
  title: null;
}

interface EssayStory extends StoryRow {
  type: 'essay';
  title: string;
}

export type Story = QuoteStory | EssayStory;

export type Sentence = Database['public']['Tables']['sentence']['Row'];

export type SentenceTag = Database['public']['Tables']['sentence_tag']['Row'];

export type Feedback = Database['public']['Tables']['feedback']['Row'];

export type FeedbackTag = Database['public']['Tables']['feedback_tag']['Row'];

export type TemporaryStory =
  Database['public']['Tables']['temporary_story']['Row'];

export type Bookmark = Database['public']['Tables']['bookmark']['Row'];
