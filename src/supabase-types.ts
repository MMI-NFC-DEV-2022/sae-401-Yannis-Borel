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
      Agent: {
        Row: {
          id: number
          id_users: string | null
          nom_agent: string | null
        }
        Insert: {
          id?: number
          id_users?: string | null
          nom_agent?: string | null
        }
        Update: {
          id?: number
          id_users?: string | null
          nom_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_id_users_fkey"
            columns: ["id_users"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      basket: {
        Row: {
          " pointe": string | null
          bande: string | null
          empeigne: string | null
          id: number
          lacet: string | null
          languette: string | null
          oeillet: string | null
          semelle: string
          trimestre: string | null
        }
        Insert: {
          " pointe"?: string | null
          bande?: string | null
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          semelle: string
          trimestre?: string | null
        }
        Update: {
          " pointe"?: string | null
          bande?: string | null
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          semelle?: string
          trimestre?: string | null
        }
        Relationships: []
      }
      Commune: {
        Row: {
          id: number
          nom_commune: string | null
        }
        Insert: {
          id?: number
          nom_commune?: string | null
        }
        Update: {
          id?: number
          nom_commune?: string | null
        }
        Relationships: []
      }
      Films: {
        Row: {
          id: number
          images: string | null
        }
        Insert: {
          id?: number
          images?: string | null
        }
        Update: {
          id?: number
          images?: string | null
        }
        Relationships: []
      }
      Maison: {
        Row: {
          adresse: string | null
          agent: number | null
          favori: boolean | null
          id: number
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string
          prix: number | null
          rue: number | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          agent?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison: string
          prix?: number | null
          rue?: number | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          agent?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string
          prix?: number | null
          rue?: number | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Maison_agent_fkey"
            columns: ["agent"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Maison_rue_fkey"
            columns: ["rue"]
            isOneToOne: false
            referencedRelation: "Quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Maison_rue_fkey"
            columns: ["rue"]
            isOneToOne: false
            referencedRelation: "QuartierCommune"
            referencedColumns: ["id_Quartier"]
          },
        ]
      }
      Quartier: {
        Row: {
          id: number
          nom_quartier: string | null
          quartier_commune: number | null
        }
        Insert: {
          id?: number
          nom_quartier?: string | null
          quartier_commune?: number | null
        }
        Update: {
          id?: number
          nom_quartier?: string | null
          quartier_commune?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Quartier_quartier_commune_fkey"
            columns: ["quartier_commune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Quartier_quartier_commune_fkey"
            columns: ["quartier_commune"]
            isOneToOne: false
            referencedRelation: "QuartierCommune"
            referencedColumns: ["id_Commune"]
          },
        ]
      }
    }
    Views: {
      QuartierCommune: {
        Row: {
          id_Commune: number | null
          id_Quartier: number | null
          nom_commune: string | null
          nom_quartier: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
