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
      Acteur: {
        Row: {
          biographie_acteur: string | null
          dace_deces: string | null
          date_de_naissance: string | null
          id: number
          image_acteur: string | null
          nationaliter_acteur: string | null
          nom_acteur: string | null
        }
        Insert: {
          biographie_acteur?: string | null
          dace_deces?: string | null
          date_de_naissance?: string | null
          id?: number
          image_acteur?: string | null
          nationaliter_acteur?: string | null
          nom_acteur?: string | null
        }
        Update: {
          biographie_acteur?: string | null
          dace_deces?: string | null
          date_de_naissance?: string | null
          id?: number
          image_acteur?: string | null
          nationaliter_acteur?: string | null
          nom_acteur?: string | null
        }
        Relationships: []
      }
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
      Collection: {
        Row: {
          id: number
          image_collection: string | null
          titre_collection: string | null
        }
        Insert: {
          id?: number
          image_collection?: string | null
          titre_collection?: string | null
        }
        Update: {
          id?: number
          image_collection?: string | null
          titre_collection?: string | null
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
      film_acteur: {
        Row: {
          acteur: number
          film: number
        }
        Insert: {
          acteur: number
          film?: number
        }
        Update: {
          acteur?: number
          film?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_acteur_acteur_fkey"
            columns: ["acteur"]
            isOneToOne: false
            referencedRelation: "Acteur"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_acteur_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
        ]
      }
      film_collection: {
        Row: {
          collection: number
          film: number
        }
        Insert: {
          collection: number
          film?: number
        }
        Update: {
          collection?: number
          film?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_collection_collection_fkey"
            columns: ["collection"]
            isOneToOne: false
            referencedRelation: "Collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_collection_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
        ]
      }
      film_genre: {
        Row: {
          film: number
          genre: number
        }
        Insert: {
          film?: number
          genre: number
        }
        Update: {
          film?: number
          genre?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_genre_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_genre_genre_fkey"
            columns: ["genre"]
            isOneToOne: false
            referencedRelation: "Genre"
            referencedColumns: ["id"]
          },
        ]
      }
      film_plateforme: {
        Row: {
          film: number
          plateforme: number
        }
        Insert: {
          film?: number
          plateforme: number
        }
        Update: {
          film?: number
          plateforme?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_plateforme_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_plateforme_plateforme_fkey"
            columns: ["plateforme"]
            isOneToOne: false
            referencedRelation: "Plateforme"
            referencedColumns: ["id"]
          },
        ]
      }
      film_support: {
        Row: {
          film: number
          support: number
        }
        Insert: {
          film?: number
          support: number
        }
        Update: {
          film?: number
          support?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_support_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_support_support_fkey"
            columns: ["support"]
            isOneToOne: false
            referencedRelation: "Support"
            referencedColumns: ["id"]
          },
        ]
      }
      film_variante: {
        Row: {
          film: number
          variante: number
        }
        Insert: {
          film: number
          variante: number
        }
        Update: {
          film?: number
          variante?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_variante_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_variante_variante_fkey"
            columns: ["variante"]
            isOneToOne: false
            referencedRelation: "Variante"
            referencedColumns: ["id"]
          },
        ]
      }
      Films: {
        Row: {
          banniere_film: string | null
          date_film: string | null
          description_film: string | null
          id: number
          images: string | null
          nom_realisateur: string | null
          note_film: number | null
          titre_film: string | null
        }
        Insert: {
          banniere_film?: string | null
          date_film?: string | null
          description_film?: string | null
          id?: number
          images?: string | null
          nom_realisateur?: string | null
          note_film?: number | null
          titre_film?: string | null
        }
        Update: {
          banniere_film?: string | null
          date_film?: string | null
          description_film?: string | null
          id?: number
          images?: string | null
          nom_realisateur?: string | null
          note_film?: number | null
          titre_film?: string | null
        }
        Relationships: []
      }
      Genre: {
        Row: {
          id: number
          libelle: string
        }
        Insert: {
          id?: number
          libelle: string
        }
        Update: {
          id?: number
          libelle?: string
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
      Plateforme: {
        Row: {
          description_deux: string | null
          description_trois: string | null
          description_une: string | null
          id: number
          image_plateforme: string | null
          lien_externe: string | null
          plateforme_prix: string | null
          titre_plateforme: string | null
        }
        Insert: {
          description_deux?: string | null
          description_trois?: string | null
          description_une?: string | null
          id?: number
          image_plateforme?: string | null
          lien_externe?: string | null
          plateforme_prix?: string | null
          titre_plateforme?: string | null
        }
        Update: {
          description_deux?: string | null
          description_trois?: string | null
          description_une?: string | null
          id?: number
          image_plateforme?: string | null
          lien_externe?: string | null
          plateforme_prix?: string | null
          titre_plateforme?: string | null
        }
        Relationships: []
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
      Support: {
        Row: {
          description_deux: string | null
          description_trois: string | null
          description_une: string | null
          id: number
          image_support: string | null
          lien_externe: string | null
          prix_support: string | null
          titre_support: string | null
        }
        Insert: {
          description_deux?: string | null
          description_trois?: string | null
          description_une?: string | null
          id?: number
          image_support?: string | null
          lien_externe?: string | null
          prix_support?: string | null
          titre_support?: string | null
        }
        Update: {
          description_deux?: string | null
          description_trois?: string | null
          description_une?: string | null
          id?: number
          image_support?: string | null
          lien_externe?: string | null
          prix_support?: string | null
          titre_support?: string | null
        }
        Relationships: []
      }
      Variante: {
        Row: {
          id: number
          titre_variante: string | null
        }
        Insert: {
          id?: number
          titre_variante?: string | null
        }
        Update: {
          id?: number
          titre_variante?: string | null
        }
        Relationships: []
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
