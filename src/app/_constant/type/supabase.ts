export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookmark: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          story_id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          story_id: number
          user_id: number
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          story_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_bookmark_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "story"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_bookmark_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          content: string
          created_at: string
          deleted_at: string | null
          id: number
          story_id: number
          user_id: number
        }
        Insert: {
          content: string
          created_at?: string
          deleted_at?: string | null
          id?: number
          story_id: number
          user_id: number
        }
        Update: {
          content?: string
          created_at?: string
          deleted_at?: string | null
          id?: number
          story_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_feedback_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "story"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback_tag: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          value: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          value: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          value?: string
        }
        Relationships: []
      }
      feedback_tag_log: {
        Row: {
          created_at: string
          deleted_at: string | null
          feedback_id: number
          id: number
          index: number
          tag_id: number
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          feedback_id: number
          id?: number
          index: number
          tag_id: number
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          feedback_id?: number
          id?: number
          index?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_feedback_tag_log_feedback_id_fkey"
            columns: ["feedback_id"]
            isOneToOne: false
            referencedRelation: "feedback"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_feedback_tag_log_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "feedback_tag"
            referencedColumns: ["id"]
          },
        ]
      }
      sentence: {
        Row: {
          content: string
          deleted_at: string | null
          id: number
          story_id: number
        }
        Insert: {
          content: string
          deleted_at?: string | null
          id?: number
          story_id: number
        }
        Update: {
          content?: string
          deleted_at?: string | null
          id?: number
          story_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_sentence_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "story"
            referencedColumns: ["id"]
          },
        ]
      }
      sentence_tag: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          type: Database["public"]["Enums"]["sentence_tag_type"]
          value: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          type: Database["public"]["Enums"]["sentence_tag_type"]
          value: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          type?: Database["public"]["Enums"]["sentence_tag_type"]
          value?: string
        }
        Relationships: []
      }
      sentence_tag_log: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: number
          sentence_id: number
          tag_id: number
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          sentence_id: number
          tag_id: number
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: number
          sentence_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_sentence_tag_log_sentence_id_fkey"
            columns: ["sentence_id"]
            isOneToOne: false
            referencedRelation: "sentence"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_sentence_tag_log_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "sentence_tag"
            referencedColumns: ["id"]
          },
        ]
      }
      story: {
        Row: {
          content: string
          cover_image_url: string | null
          created_at: string
          deleted_at: string | null
          id: number
          parent_story_id: number | null
          pen_name: string
          signature_image_url: string | null
          title: string | null
          type: Database["public"]["Enums"]["story_type"]
          user_id: number
        }
        Insert: {
          content: string
          cover_image_url?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          parent_story_id?: number | null
          pen_name: string
          signature_image_url?: string | null
          title?: string | null
          type: Database["public"]["Enums"]["story_type"]
          user_id: number
        }
        Update: {
          content?: string
          cover_image_url?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          parent_story_id?: number | null
          pen_name?: string
          signature_image_url?: string | null
          title?: string | null
          type?: Database["public"]["Enums"]["story_type"]
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_story_parent_story_id_fkey"
            columns: ["parent_story_id"]
            isOneToOne: false
            referencedRelation: "story"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_story_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      temporary_story: {
        Row: {
          content: string
          created_at: string
          id: number
          pen_name: string | null
          title: string | null
          type: Database["public"]["Enums"]["story_type"]
          user_id: number
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          pen_name?: string | null
          title?: string | null
          type: Database["public"]["Enums"]["story_type"]
          user_id: number
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          pen_name?: string | null
          title?: string | null
          type?: Database["public"]["Enums"]["story_type"]
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_temporary_story_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          created_at: string
          deleted_at: string | null
          email: string
          id: number
          profile_image_url: string | null
          supabase_auth_id: string | null
          username: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          email: string
          id?: number
          profile_image_url?: string | null
          supabase_auth_id?: string | null
          username: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          email?: string
          id?: number
          profile_image_url?: string | null
          supabase_auth_id?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_supabase_auth_id_fkey"
            columns: ["supabase_auth_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      sentence_tag_type: "topic" | "form"
      story_type: "essay" | "quote"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
